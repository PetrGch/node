var http = require('http');
var fs = require('fs');

function handler(req, res) {
    if (req.url == '/') {

        fs.readFile('index.htm', 'utf-8', function(err, data) {
           if (err) throw err;

           res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end("not found");
    }
}

var server = new http.createServer(handler);

module.exports = server;