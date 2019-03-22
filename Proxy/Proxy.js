// include dependencies
var express = require("express");
var proxy = require("http-proxy-middleware");

let weatherHost =
  "https://api.darksky.net/forecast/258cf106a6d8062f143a77565a3ad9a5/";

// proxy middleware options
var options = {
  target: weatherHost, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets

  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    "dev.localhost:4000": "http://localhost:8000"
  }
};

// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();
app.use("/weather", exampleProxy);
app.listen(4000);
