// For cryptographic functions (https://nodejs.org/api/crypto.html)
const crypto = require('crypto');

// For reading keys and writing files
const fs = require('fs');
const path = require('path');

// The message we will sign
const message = 'Hello, World!';

/** *******************************
 Encrypt the message using the PUBLIC key
 ******************************** */

// Load the public key
const fullPublicKeyPath = path.resolve('keys', 'public_key.pem');
const publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8');

// Perform encryption
const encryptedBuffer = crypto.publicEncrypt(publicKey, Buffer.from(message));

// Convert buffer to HEX string
const encryptedHexString = encryptedBuffer.toString('hex');

// Prints: the calculated signature
console.log(`Message: ${message}
 Encrypted with Public Key ('hex'): ${encryptedHexString}`);

/** *******************************
 Decrypt the message using the PRIVATE key
 ******************************** */

// Read the private key
const fullPrivateKeyPath = path.resolve('keys', 'private_key.pem');

const privateKey = fs.readFileSync(fullPrivateKeyPath, 'utf8');

// Perform decryption
const decryptedBuffer = crypto.privateDecrypt(privateKey, Buffer.from(encryptedHexString, 'hex'));

// Convert buffer to string
const decryptedMessage = decryptedBuffer.toString();

// Print the results
console.log(`Encrypted Message ('hex'): ${encryptedHexString} 
Decrypted Message: ${decryptedMessage}`);
