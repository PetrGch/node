function GetFile(path, done) {
    setTimeout(function(err, data) {
       if (path !== 'index.html') {
           return done(new Error('error'));
       } else {
           return done(null, 'data');
       }
    }, 1000);
}

GetFile('index.html', function(err, data) {
   if (err) {
       console.log('there was error!' + err.stack)
   } else {
       console.log(data);
   }
});

console.log('hi');