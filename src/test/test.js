const startTime = Date.now();

// const myCallback = (data) => {
//   console.log('got data: ' + data);
// };
//
// const usingItNow = (callback) => {
//   callback('get it?');
// };
//
// usingItNow(myCallback);

// const myPromise = new Promise(((resolve, reject) => {
//   // code here
//
//   const night = true;
//
//   if (night) {
//     resolve('fine');
//   } else {
//     reject('error');
//   }
// }));
// myPromise.all
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const http = require('http');
const https = require('https');

const url =
  'https://maps.googleapis.com/maps/api/geocode/json?address=Florence';
https.get(url, (res) => {
  res.setEncoding('utf8');
  let body = '';
  res.on('data', (data) => {
    body += data;
  });
  res.on('end', () => {
    body = JSON.parse(body);
    console.log(
      `City: ${body.results[0].formatted_address} -`,
      `Latitude: ${body.results[0].geometry.location.lat} -`,
      `Longitude: ${body.results[0].geometry.location.lng}`
    );
  });
});


// const timings = {
//   // use process.hrtime() as it's not a subject of clock drift
//   startAt: process.hrtime(),
//   dnsLookupAt: undefined,
//   tcpConnectionAt: undefined,
//   tlsHandshakeAt: undefined,
//   firstByteAt: undefined,
//   endAt: undefined
// };
//
// const req = http.request({ ... }, (res) => {
//   res.once('readable', () => {
//     timings.firstByteAt = process.hrtime()
//   });
//   res.on('data', (chunk) => {
//     responseBody += chunk
//   });
//   res.on('end', () => {
//     timings.endAt = process.hrtime()
//   })
// });
// req.on('socket', (socket) => {
//   socket.on('lookup', () => {
//     timings.dnsLookupAt = process.hrtime()
//   });
//   socket.on('connect', () => {
//     timings.tcpConnectionAt = process.hrtime()
//   });
//   socket.on('secureConnect', () => {
//     timings.tlsHandshakeAt = process.hrtime()
//   })
// });


const sample = [
  'http://www.google.com/',
  'http://www.spotify.com/us/',
  'http://twitter.com/',
  'http://google.com/nothing'
];

sample.forEach((e) => {
  // http.get('http://httpbin.org/ip', (res) => {
  http.get(e, (res) => {
    res.setEncoding('utf8');
    let temp = '';
    res.on('data', (body) => {
      temp += body;
    });
    res.on('end', () => {
      console.log(`${Date.now() - startTime}ms`);
    });
  });
});
