const http = require('http');

const sample = [
  'http://google.com/',
  'http://spotify.com/us/',
  'http://twitter.com/',
  'http://google.com/nothing'
];

const getTimes = (url, start, resolve, reject) => {
  http.get(url, (res) => {
    resolve({
      url: url,
      time: Date.now() - start
    });
  }).on('error', (err) => {
    reject(err);
  });
};

const printTimes = (array) => {
  const promises = array.map(url => new Promise((resolve, reject) => {
    getTimes(url, Date.now(), resolve, reject);
  }));
  Promise.all(promises).then((values) => {
    console.log(values);
  });
};

// const getTimes = (url, callback) => {
//   http.get(url, (res) => {
//     const error = 'Request failed.';
//     callback(error, Date.now() - start);
//   });
// };
//
// const printTimes = (array) => {
//   const list = [];
//   for (let i = 0; i < array.length; i++) {
//     getTimes(array[i], (err, result) => {
//       list.push({
//         url: array[i],
//         time: result,
//       });
//       if (i === 3) {
//         console.log(list);
//       }
//     });
//   }
// };

printTimes(sample);

const status = (url, resolve, reject) => {
  http.get(url, (res) => {
    // if (res.statusCode >= 300 && res.statusCode <= 302) {
    //   resolve({
    //     success: [],
    //   });
    // } else if (res.statusCode === 404) {
    //   resolve();
    // }
    resolve(res.statusCode);
  }).on('error', (err) => {
    reject(err);
  });
};

const printStatus = (array) => {
  const promises = array.map(url => new Promise((resolve, reject) => {
    status(url, resolve, reject);
  }));
  Promise.all(promises).then((values) => {
    console.log(values);
  });
};

// const status = url => new Promise((resolve, reject) => {
//   http.get(url, (res) => {
//     const err = 'Request failed.';
//     if (err) {
//       resolve(res.statusCode);
//     } else {
//       resolve(res.statusCode);
//     }
//   });
// });
//
// const success = (array) => {
//   const promises = array.map(urls => status(urls));
//   Promise.all(promises).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log('Error:', error);
//   });
// };

printStatus(sample);
