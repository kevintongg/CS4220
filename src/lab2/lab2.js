const crypto = require('crypto');
const http = require('http');
const http = require('request');

const message = 'Hello, World!';

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

// // ----receive function----v
// function get_json(url, callback) {
//   http.get(url, (res) => {
//     let body = '';
//     res.on('data', (chunk) => {
//       body += chunk;
//     });
//
//     res.on('end', () => {
//       const response = JSON.parse(body);
//       // call function ----v
//       callback(response);
//     });
//   });
// }
//
// // -----------the url---v         ------------the callback---v
// const mydata = get_json('http://albertcervantes.com/cs4220/messages.json', (resp) => {
//   console.log(resp);
// });
//
// console.log(mydata);
