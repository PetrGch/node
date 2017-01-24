var ee = require('events').EventEmitter;

var server = new ee;

server.on('request', function(request) {
    if (request.age > 30) {
        request.approved = true;
    } else {
        request.approved = false;
    }
});

server.on('request', function(request) {
   console.log(request);
});

server.emit('request', {from: 'client', age: 26});

server.emit('request', {from: 'Another client', age: 32});
