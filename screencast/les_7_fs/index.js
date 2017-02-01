var fs = require('fs');

var fileName = __dirname;

fs.readFile(fileName + '/data.json', "utf-8", function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(JSON.parse(data));
    }
});

fs.stat(__filename, function(err, stats) {
   console.log(stats.isFile());
   console.log(stats);
});

fs.writeFile(fileName + '/data_2.json', '{"name":"Max"}' , function(err) {
    if (err) throw new Error('can\'t write to this file\n' + err);

    fs.rename(fileName + '/data_2.json', fileName + '/data_new.json', function(err) {
        if (err) throw new Error('can\'t rename this file\n' + err);

        fs.unlink(fileName + '/data_new.json', function(err) {
            if (err) throw new Error('can\'t remove this file\n' + err);
        });
    })
});