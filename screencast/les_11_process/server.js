var http = require('http');



http.createServer(function(req, res) {

    res.end('The server is running!')

}).listen(3000);