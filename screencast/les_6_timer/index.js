var http = require('http');

var server = http.createServer(function(req, res) {

}).listen(3000);

setTimeout(function() {
    server.close(function() {clearInterval(timer)});
}, 2500);

var timer = setInterval(function() {
    console.log('message');
}, 1000);

// timer.unref();