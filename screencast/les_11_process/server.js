var http = require('http');
var opts = require('optimist').argv;

http.createServer(function(req, res) {

    if (process.env.NODE_ENV == "production") {
        res.end('The server is running in production!');
    } else {
        res.end('Development');
    }


}).listen(opts.port);