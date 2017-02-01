var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
   if (req.url == '/') {
       fs.readFile('index.html', function(err, info) {
           if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('there was error in the server!');
                return;
           }
           res.end(info);
       });
   } else if (req.url == '/now') {
       res.end(new Date().toString());
   }

}).listen(3000, '127.0.0.1');