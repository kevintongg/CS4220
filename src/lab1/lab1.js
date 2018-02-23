const http = require('http');

const sample = [
  'http://google.com/',
  'http://spotify.com/us/',
  'http://twitter.com/',
  'http://google.com/nothing'
];

const start = Date.now();

const getTimes = (url, callback) => {
  http.get(url, (res) => {
    const error = 'Request failed.';
    callback(error, Date.now() - start);
  });
};

const printTimes = (array) => {
  const list = [];
  array.forEach((e, i) => {
    getTimes(array[i], (err, result) => {
      list.push({
        url: array[i],
        time: result,
      });
      if (i >= 3) {
        console.log(list);
      }
    });
  });
};

printTimes(sample);
