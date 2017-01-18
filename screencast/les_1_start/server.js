var user = require('./user');               // in local scope
// require('./user');                          // in global scope

var vasya = new user.User('Vasya');         // in local scope
var petr = new user.User('Petr');           // in local scope

// var vasya = new User('Vasya');         // in global scope
// var petr = new User('Petr');           // in global scope

vasya.hello(petr);