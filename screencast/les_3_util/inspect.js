var util = require('util');

var obj = {
    a: 3,
    b: 2
}

obj.self = obj;

console.log(util.inspect(obj));