var http = require('http');
var url = require('url');

// var server = new http.Server();

// server.on('require', function(req, res) {
//     res.end("hello world");
// });

// server.listen(1337, '127.0.0.1');

var count = 0;

http.createServer(function(req, res) {
    // console.log(req.method, req.url);

    var urlPars = url.parse(req.url, true);

    // console.log(urlPars);
    console.log(req.headers);

    if (urlPars.pathname === '/echo' && urlPars.query.message) {
        res.setHeader('Cache-control', 'no-cache');
        res.end("hello world " + ++count);
        res.statusCode = 200;
    } else {
        res.statusCode = 404;
        res.end('page is not found');
    }
}).listen(1337, '127.0.0.1');