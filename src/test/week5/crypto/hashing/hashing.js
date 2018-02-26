const crypto = require('crypto');
// For cryptographic functions (https://nodejs.org/api/crypto.html)

// Get a list of all supported hashing algorithms
const hashes = crypto.getHashes();

// Print the list to the console
// console.log(hashes)

// The hashing algorithm we will use
const hashingAlgorithm = 'sha256';

// Create a new Hash object (Note: we do not use 'new')
const hash = crypto.createHash(hashingAlgorithm);

// The message to be hashed
const message = 'Hello, World!';

// Update the data to be hashed
hash.update(message);

// Perform the hash
const digest = hash.digest('hex');

// Print the results
console.log(`The '${hashingAlgorithm}' digest of '${message}' is: ${digest}`);

// const testAlgorithm = 'sha256';
// const testHash = crypto.createHash(testAlgorithm);
// for (let i = 0; i < 2; i++) {
//   const messageTest = 'Hello, World!';
//   testHash.update(messageTest);
//   const testDigest = testHash.digest('hex');
//   console.log(`The '${testAlgorithm}' digest of '${messageTest}' is: ${testDigest}`);
// }

