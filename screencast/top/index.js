var util = require('util');


var obj = {
  a: 2,
  b: 3
};

obj.self = obj;

console.log(util.inspect(obj));
