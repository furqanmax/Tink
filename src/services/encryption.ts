import * as nacl from 'tweetnacl';
import { decodeUTF8, encodeUTF8, encodeBase64, decodeBase64 } from 'tweetnacl-util';
import { indexedDBService } from '@/services/indexeddb';

export class EncryptionService {
  private static keyPair: nacl.BoxKeyPair | null = null;

  /**
   * Generate or retrieve user's keypair
   */
  static getKeyPair(): nacl.BoxKeyPair {
    if (!this.keyPair) {
      // In production, keys should be stored securely (e.g., encrypted in localStorage)
      // and retrieved here instead of generating new ones
      this.keyPair = nacl.box.keyPair();
    }
    return this.keyPair;
  }

  /**
   * Generate a new keypair for the current user
   */
  static generateKeyPair() {
    const keyPair = nacl.box.keyPair();
    return {
      publicKey: encodeBase64(keyPair.publicKey),
      secretKey: encodeBase64(keyPair.secretKey),
    };
  }

  /**
   * Get or create user keys persisted in IndexedDB
   */
  static async getOrCreateUserKeys(userId: string): Promise<{ publicKey: string; secretKey: string }> {
    const existing = await indexedDBService.getUserKeys(userId);
    if (existing) return existing;

    const keyPair = this.generateKeyPair();
    await indexedDBService.saveUserKeys(userId, keyPair.publicKey, keyPair.secretKey);
    return keyPair;
  }

  /**
   * Encrypt a message with recipient's public key
   */
  static encryptMessage(
    message: string,
    recipientPublicKey: string,
    senderSecretKey: string
  ): { ciphertext: string; nonce: string } {
    const nonce = nacl.randomBytes(nacl.box.nonceLength);
    const sharedKey = nacl.box.before(
      decodeBase64(recipientPublicKey),
      decodeBase64(senderSecretKey)
    );
    const ciphertext = nacl.box.after(
      decodeUTF8(message),
      nonce,
      sharedKey
    );

    return {
      ciphertext: encodeBase64(ciphertext),
      nonce: encodeBase64(nonce),
    };
  }

  /**
   * Decrypt a message with sender's public key
   */
  static decryptMessage(
    ciphertext: string,
    nonce: string,
    senderPublicKey: string,
    recipientSecretKey: string
  ): string {
    const sharedKey = nacl.box.before(
      decodeBase64(senderPublicKey),
      decodeBase64(recipientSecretKey)
    );
    const decrypted = nacl.box.open.after(
      decodeBase64(ciphertext),
      decodeBase64(nonce),
      sharedKey
    );

    if (!decrypted) {
      throw new Error('Failed to decrypt message - invalid keys or corrupted data');
    }

    return encodeUTF8(decrypted);
  }

  /**
   * Hash data using SHA-256 (for file integrity verification)
   */
  static async hashData(data: ArrayBuffer): Promise<string> {
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Generate a random nonce for encryption
   */
  static generateNonce(): Uint8Array {
    return nacl.randomBytes(nacl.box.nonceLength);
  }
}
