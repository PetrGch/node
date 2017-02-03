var http = require('http');
var fs = require('fs');
var url = require('url');
var chat = require('./chat');

http.createServer(function(req, res) {
    var puth = url.parse(req.url, true);

    switch (puth.pathname) {
        case '/':
            sendFile('index.html', res);
            break;
        case '/subscribe':
            chat.subscribe(req, res, puth.query.name);
            break;
        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    var data;
                    if (null != (data = req.read())) {
                        body += data;
                    }

                    if (body.length > 1e4) {
                        res.statusCode = 413;
                        res.end('Your message is too big!');
                    }
                })
                .on('end', function() {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end('Bad request');
                        return;
                    }

                    chat.publish(body.message);
                    res.end('ok')
                });
            break;
        default:
            res.statusCode = 404;
            res.end('Not found');
    }

}).listen(3002);

function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end('Server error');
        })
        .pipe(res);
}