const crypto = require('crypto');
const https = require('https');
const fs = require('fs');
const path = require('path');

const string = 'Hello, World!';
const website = 'https://albertcervantes.com/cs4220/messages.json';

function nonceHashing(message) {
  // For initial hash at 0, 'Hello, World!
  const initialHash = crypto.createHash('sha256');
  initialHash.update(message);
  console.log(`The SHA-256 digest of '${message}' is: [ ${initialHash.digest('hex')} ]`);

  for (let i = 1; i < Number.POSITIVE_INFINITY; i++) {
    const hash = crypto.createHash('sha256');
    hash.update(message + i);
    const digest = hash.digest('hex');
    console.log(`The SHA-256 digest of '${message + i}' is: [ ${digest} ]`);
    if (digest.substr(0, 3) === '000') {
      break;
    }
  }
}

function getJSON(url, callback) {
  https.get(url, (response) => {
    let body = '';
    response.on('data', (chunk) => {
      body += chunk;
    });
    response.on('end', () => {
      const res = JSON.parse(body);
      callback(res);
    });
  });
}

function runJSON() {
  getJSON(website, (response) => {
    const stringify = JSON.stringify(response);
    const parse = JSON.parse(stringify);

    const fullPrivateKeyPath = path.resolve('keys', 'private_key.pem');
    const privateKey = fs.readFileSync(fullPrivateKeyPath, 'utf8');


    console.log('\nGENERATION\n-------');
    for (const i in Object.keys(parse)) {
      const sign = crypto.createSign('sha256');
      sign.update(parse[i].message);
      const signature = sign.sign(privateKey, 'hex');
      console.log(`Message: ${parse[i].message}\nSignature: ${signature}\n`);
    }

    const fullPublicKeyPath = path.resolve('keys', 'public_key.pem');
    const publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8');
    let isValidSignature;

    console.log('VERIFICATION\n-------');
    for (const j in Object.keys(parse)) {
      const verifySign = crypto.createSign('sha256');
      const verify = crypto.createVerify('sha256');
      verifySign.update(parse[j].message);
      verify.update(parse[j].message);
      const verifySignature = verifySign.sign(privateKey, 'hex');
      isValidSignature = verify.verify(publicKey, verifySignature, 'hex');
      console.log(`Valid: ${isValidSignature} | ${parse[j].message}\nSignature: ${verifySignature}\n`);
    }
  });
}

nonceHashing(string);
runJSON();
