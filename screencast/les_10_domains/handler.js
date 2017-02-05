var fs = require('fs');

module.exports = function handler(req, res) {
    if (req.url == '/') {
        fs.readFile('no-file', 'utf-8', function(err, data) {
            if (err) throw err;

            res.end(data);
        })
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
};