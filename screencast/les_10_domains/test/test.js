var domain = require('domain');

var d = domain.create();

d.on('error', function(err) {
    console.error("domain cached error %s", err);
});

d.run(function() {

    setTimeout(function() {
        console.log(process.domain);
        ERROR();
    }, 1000 );

});