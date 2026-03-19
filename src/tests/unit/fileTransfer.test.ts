import { describe, it, expect } from 'vitest';
import { fileTransferService } from '@/services/fileTransfer';

describe('FileTransferService', () => {
  it('rejects oversized files', () => {
    const file = new File([new Uint8Array(31 * 1024 * 1024)], 'big.bin');
    const result = fileTransferService.validateFile(file);
    expect(result.valid).toBe(false);
  });

  it('accepts small files', () => {
    const file = new File([new Uint8Array(1024)], 'small.txt', { type: 'text/plain' });
    const result = fileTransferService.validateFile(file);
    expect(result.valid).toBe(true);
  });
});
