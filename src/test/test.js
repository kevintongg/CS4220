var https = require("https");

var url = "https://www.google.com/pretend/this/exists.xml";

var opt = {
  host: url.split(".com/")[0] + ".com",
  path: "/" + url.split(".com/")[1]
};

function callback(response) {
  var str = "";
  
  response.on("data", function (chunk) {
    str += chunk;
  });
  
  response.on("end", function () {
    console.log(str);
  });
}

var request = https.request(opt, callback);

request.on("error", function (error) {
  console.error(error);
});

request.end();
