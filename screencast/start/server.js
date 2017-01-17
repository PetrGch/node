var log = require('logger')(module);
var db = require('db');
db.connect();

var User = require('./user');

function run() {
  var vasya = new User('Vasya');
  var petr = new User('Petr');

  vasya.hello(petr);
  log(db.getPhrase('success'));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
