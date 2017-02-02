var http = require('http');
var fs = require('fs');

new http.Server(function(req, res) {

    if (req.url == '/index.html') {

        var file = fs.ReadStream('index.html');
        sendFile(file, res);

    }

}).listen(3001);

// function sendFile(file, res) {
//     file.on('readable', write);
//
//     function write() {
//         var fileContent = file.read(); // считать
//
//         if (fileContent && !res.write(fileContent)) { // отправить
//             file.removeListener('readable', write);
//
//             res.once('drain', function() {  // подождать
//                 file.on('readable', write);
//                 write();
//             })
//         }
//     }
//
//     file.on('end', function() {
//         res.end();
//     })
// }

function sendFile(file, res) {

    file.pipe(res);
    // file.pipe(process.stdout);

    file.on('error', function(err) {
       res.statusCode = 500;
       res.end("Server Error!");
       console.log(err);
    });

    file
        .on('open', function() {
            console.log('open');
        })
        .on('close', function() {
            console.log('close');
        });

    res.on('close', function() {
        file.destroy();
    })
}


