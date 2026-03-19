import { describe, it, expect } from 'vitest';
import { EncryptionService } from '@/services/encryption';

describe('EncryptionService', () => {
  it('generates a keypair', () => {
    const keyPair = EncryptionService.generateKeyPair();
    expect(keyPair.publicKey).toBeDefined();
    expect(keyPair.secretKey).toBeDefined();
    expect(keyPair.publicKey.length).toBeGreaterThan(10);
    expect(keyPair.secretKey.length).toBeGreaterThan(10);
  });

  it('encrypts and decrypts a message', () => {
    const sender = EncryptionService.generateKeyPair();
    const recipient = EncryptionService.generateKeyPair();

    const message = 'Hello, World!';
    const encrypted = EncryptionService.encryptMessage(message, recipient.publicKey, sender.secretKey);

    const decryptedByRecipient = EncryptionService.decryptMessage(
      encrypted.ciphertext,
      encrypted.nonce,
      sender.publicKey,
      recipient.secretKey
    );

    expect(decryptedByRecipient).toBe(message);
  });

  it('hashes data consistently', async () => {
    const data = new TextEncoder().encode('test data').buffer;
    const hash1 = await EncryptionService.hashData(data);
    const hash2 = await EncryptionService.hashData(data);
    expect(hash1).toBe(hash2);
  });
});
