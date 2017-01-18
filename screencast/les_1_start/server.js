var User = require('./user');               // in local scope
// require('./user');                          // in global scope
var log = require('logger')(module);
var db = require('db');
db.connect();

function run() {
    var vasya = new User('Vasya');         // in local scope
    var petr = new User('Petr');           // in local scope

    // var vasya = new User('Vasya');         // in global scope
    // var petr = new User('Petr');           // in global scope

    vasya.hello(petr);
}


if (module.parent) {
    exports.run = run;
} else {
    run();
}

log('phrases');
