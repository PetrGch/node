var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
  // console.log(req.method, req.url);
  //
  // console.log(req.headers);

  var urlPars = url.parse(req.url, true);
  debugger;

  if (urlPars.pathname == '/echo' && urlPars.query.message) {
    res.setHeader('Cache-control', 'no-cache');
    res.end(urlPars.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
}).listen(1337, '127.0.0.1');

console.log('server is runnig');
