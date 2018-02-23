const startTime = Date.now();

const http = require('http');
const https = require('https');

// const sample = [
//   'http://www.google.com/',
//   'http://www.spotify.com/us/',
//   'http://twitter.com/',
//   'http://google.com/nothing'
// ];
//
// sample.forEach((e) => {
//   // http.get('http://httpbin.org/ip', (res) => {
//   http.get(e, (res) => {
//     res.setEncoding('utf8');
//     let temp = '';
//     res.on('data', (body) => {
//       temp += body;
//     });
//     res.on('end', () => {
//       console.log(`${Date.now() - startTime}ms`);
//     });
//   });
// });


/* ES6 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => { // fat arrow
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black'
    };
    resolve(phone);
  } else {
    const reason = new Error('mom is not happy');
    reject(reason);
  }
});

const showOff = function (phone) {
  const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
  return Promise.resolve(message);
};

// call our promise
const askMom = function () {
  willIGetNewPhone
    .then(showOff)
    .then(fulfilled => console.log(fulfilled)) // fat arrow
    .catch(error => console.log(error.message)); // fat arrow
};

askMom();
