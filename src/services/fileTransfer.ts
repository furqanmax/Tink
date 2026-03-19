import { EncryptionService } from './encryption';

const CHUNK_SIZE = 64 * 1024; // 64KB chunks
const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB max

export interface FileTransferProgress {
  fileId: string;
  fileName: string;
  totalSize: number;
  transferredSize: number;
  percentage: number;
  speed: number; // bytes/sec
  eta: number; // seconds
  status: 'pending' | 'transferring' | 'completed' | 'failed';
  error?: string;
}

export interface FileTransfer {
  fileId: string;
  file: File;
  recipientId: string;
  dataChannel?: RTCDataChannel;
  progress: FileTransferProgress;
  chunks: ArrayBuffer[];
  onProgress?: (progress: FileTransferProgress) => void;
  onComplete?: (file: File) => void;
  onError?: (error: Error) => void;
}

class FileTransferService {
  private activeTransfers: Map<string, FileTransfer> = new Map();
  private dataChannels: Map<string, RTCDataChannel> = new Map();

  /**
   * Validate file before transfer
   */
  validateFile(file: File): { valid: boolean; error?: string } {
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size exceeds 30MB limit (${(file.size / 1024 / 1024).toFixed(2)}MB)`,
      };
    }

    // Check file type (optional - can be customized)
    const allowedTypes = [
      'image/',
      'video/',
      'audio/',
      'application/pdf',
      'text/',
      'application/msword',
      'application/vnd.openxmlformats-officedocument',
    ];

    const isAllowed = allowedTypes.some(type => file.type.startsWith(type) || file.type === type);
    
    if (!isAllowed && file.type) {
      console.warn(`File type ${file.type} may not be supported`);
    }

    return { valid: true };
  }

  /**
   * Initiate file transfer
   */
  async sendFile(
    file: File,
    recipientId: string,
    peerConnection: RTCPeerConnection,
    onProgress?: (progress: FileTransferProgress) => void,
    onComplete?: (file: File) => void,
    onError?: (error: Error) => void
  ): Promise<string> {
    // Validate file
    const validation = this.validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const fileId = `${Date.now()}_${file.name}`;
    
    // Create data channel
    const dataChannel = peerConnection.createDataChannel(`file-${fileId}`, {
      ordered: true,
      maxRetransmits: 3,
    });

    dataChannel.binaryType = 'arraybuffer';

    const transfer: FileTransfer = {
      fileId,
      file,
      recipientId,
      dataChannel,
      progress: {
        fileId,
        fileName: file.name,
        totalSize: file.size,
        transferredSize: 0,
        percentage: 0,
        speed: 0,
        eta: 0,
        status: 'pending',
      },
      chunks: [],
      onProgress,
      onComplete,
      onError,
    };

    this.activeTransfers.set(fileId, transfer);
    this.dataChannels.set(fileId, dataChannel);

    // Wait for data channel to open
    await this.waitForDataChannelOpen(dataChannel);

    // Start transfer
    this.performTransfer(transfer);

    return fileId;
  }

  /**
   * Handle incoming file transfer
   */
  handleIncomingTransfer(
    dataChannel: RTCDataChannel,
    onProgress?: (progress: FileTransferProgress) => void,
    onComplete?: (file: File) => void,
    onError?: (error: Error) => void
  ): void {
    const fileId = `incoming-${Date.now()}`;
    let metadata: any = null;
    const chunks: ArrayBuffer[] = [];
    let startTime = Date.now();
    let receivedSize = 0;

    const transfer: Partial<FileTransfer> = {
      fileId,
      dataChannel,
      chunks,
      onProgress,
      onComplete,
      onError,
    };

    dataChannel.binaryType = 'arraybuffer';

    dataChannel.onmessage = async (event) => {
      if (typeof event.data === 'string') {
        const message = JSON.parse(event.data as string);

        if (message.type === 'metadata') {
          metadata = message.data;
          startTime = Date.now();
          receivedSize = 0;
          
          transfer.progress = {
            fileId,
            fileName: metadata.name,
            totalSize: metadata.size,
            transferredSize: 0,
            percentage: 0,
            speed: 0,
            eta: 0,
            status: 'transferring',
          };
        }

        return;
      }

      if (!metadata) {
        return;
      }

      let chunkData: ArrayBuffer;
      if (event.data instanceof ArrayBuffer) {
        chunkData = event.data;
      } else if (event.data instanceof Blob) {
        chunkData = await event.data.arrayBuffer();
      } else {
        return;
      }

      chunks.push(chunkData);
      receivedSize += chunkData.byteLength;

      const percentage = Math.min(100, (receivedSize / metadata.size) * 100);
      const elapsed = (Date.now() - startTime) / 1000;
      const speed = receivedSize / Math.max(1, elapsed);
      const eta = Math.max(0, (metadata.size - receivedSize) / Math.max(1, speed));

      const progress: FileTransferProgress = {
        fileId,
        fileName: metadata.name,
        totalSize: metadata.size,
        transferredSize: receivedSize,
        percentage,
        speed,
        eta,
        status: 'transferring',
      };

      onProgress?.(progress);

      // Check if transfer complete
      if (receivedSize >= metadata.size) {
        try {
          const file = await this.assembleFile(chunks, metadata);
          
          // Verify hash
          const fileBuffer = await file.arrayBuffer();
          const receivedHash = await EncryptionService.hashData(fileBuffer);
          
          if (receivedHash !== metadata.hash) {
            throw new Error('File integrity check failed - hash mismatch');
          }

          onComplete?.(file);
        } catch (error) {
          onError?.(error as Error);
        }
      }
    };

    dataChannel.onerror = (error) => {
      console.error('Data channel error:', error);
      onError?.(new Error('Data channel error'));
    };

    dataChannel.onclose = () => {
      if (metadata && receivedSize < metadata.size) {
        onError?.(new Error('Transfer interrupted before completion'));
      }
    };
  }

  /**
   * Perform file transfer
   */
  private async performTransfer(transfer: FileTransfer): Promise<void> {
    const { file, dataChannel, fileId } = transfer;
    const startTime = Date.now();

    try {
      // Calculate file hash
      const fileBuffer = await file.arrayBuffer();
      const fileHash = await EncryptionService.hashData(fileBuffer);

      // Send metadata
      const metadata = {
        name: file.name,
        size: file.size,
        type: file.type,
        hash: fileHash,
        timestamp: Date.now(),
      };

      dataChannel!.send(JSON.stringify({ type: 'metadata', data: metadata }));

      transfer.progress.status = 'transferring';

      // Send file in chunks
      let offset = 0;
      
      while (offset < fileBuffer.byteLength) {
        await this.waitForBufferedAmountLow(dataChannel!);

        const chunk = fileBuffer.slice(offset, offset + CHUNK_SIZE);
        dataChannel!.send(chunk);

        offset += CHUNK_SIZE;

        // Update progress
        const transferredSize = offset;
        const percentage = Math.min(100, (transferredSize / file.size) * 100);
        const elapsed = (Date.now() - startTime) / 1000;
        const speed = transferredSize / Math.max(1, elapsed);
        const eta = Math.max(0, (file.size - transferredSize) / Math.max(1, speed));

        transfer.progress = {
          ...transfer.progress,
          transferredSize,
          percentage,
          speed,
          eta,
        };

        transfer.onProgress?.(transfer.progress);

        // Small delay to avoid overwhelming the connection
        await new Promise(resolve => setTimeout(resolve, 4));
      }

      transfer.progress.status = 'completed';
      transfer.onComplete?.(file);

    } catch (error) {
      transfer.progress.status = 'failed';
      transfer.progress.error = (error as Error).message;
      transfer.onError?.(error as Error);
    } finally {
      dataChannel?.close();
      this.activeTransfers.delete(fileId);
      this.dataChannels.delete(fileId);
    }
  }

  /**
   * Assemble file from chunks
   */
  private async assembleFile(chunks: ArrayBuffer[], metadata: any): Promise<File> {
    const totalSize = metadata.size;
    const buffer = new Uint8Array(totalSize);
    let offset = 0;

    for (const chunk of chunks) {
      const chunkArray = new Uint8Array(chunk);
      buffer.set(chunkArray, offset);
      offset += chunkArray.length;
    }

    return new File([buffer], metadata.name, {
      type: metadata.type,
    });
  }

  /**
   * Wait for data channel to open
   */
  private waitForDataChannelOpen(dataChannel: RTCDataChannel): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Data channel open timeout'));
      }, 10000);

      dataChannel.onopen = () => {
        clearTimeout(timeout);
        resolve();
      };

      dataChannel.onerror = (error) => {
        clearTimeout(timeout);
        reject(new Error('Data channel failed to open'));
      };
    });
  }

  private waitForBufferedAmountLow(dataChannel: RTCDataChannel): Promise<void> {
    const MAX_BUFFERED = 4 * 1024 * 1024; // 4MB
    dataChannel.bufferedAmountLowThreshold = 1024 * 1024; // 1MB

    if (dataChannel.bufferedAmount < MAX_BUFFERED) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const onLow = () => {
        dataChannel.removeEventListener('bufferedamountlow', onLow);
        resolve();
      };
      dataChannel.addEventListener('bufferedamountlow', onLow);
    });
  }

  /**
   * Cancel active transfer
   */
  cancelTransfer(fileId: string): void {
    const transfer = this.activeTransfers.get(fileId);
    if (transfer?.dataChannel) {
      transfer.dataChannel.close();
    }
    this.activeTransfers.delete(fileId);
    this.dataChannels.delete(fileId);
  }

  /**
   * Get transfer progress
   */
  getTransferProgress(fileId: string): FileTransferProgress | undefined {
    return this.activeTransfers.get(fileId)?.progress;
  }

  /**
   * Get all active transfers
   */
  getActiveTransfers(): FileTransferProgress[] {
    return Array.from(this.activeTransfers.values()).map(t => t.progress);
  }
}

export const fileTransferService = new FileTransferService();
