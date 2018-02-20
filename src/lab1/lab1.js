const http = require('http');

const sample = [
  'http://www.google.com/',
  'http://www.spotify.com/us/',
  'http://twitter.com/',
  'http://google.com/nothing',
];

// const now = Date.now();
// sample.forEach((e, i) => {
//   http.get({
//     host: e[i],
//     port: 80,
//   }, (response) => {
//     console.log('Request took:', new Date() - now, 'ms');
//   });
// });

// const start = Date.now();
// http.get({ host: 'google.com', port: 80 }, (res) => {
//   console.log('Request took:', new Date() - start, 'ms');
// });

function orderTimes(array) {
  const start = Date.now();
  const getTimes = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      http.get({
        host: '' + arr[i],
        port: 80,
      }, (response) => {
        console.log(`Request took: ${Date.now() - start}ms`);
      });
    }
  };
  getTimes(array);
}

orderTimes(sample);
