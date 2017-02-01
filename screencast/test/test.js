function fun(val, cb) {
    setTimeout(function() {
        cb(null, 'hi there');
    }, val);
}

fun(2500, function(err, data) {
    if (err) {
        console.log('there was error');
    } else {
        console.log('data');
    }
});

console.log('I\'m continue working');