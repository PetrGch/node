var fs = require('fs');

var stream = new fs.ReadStream('index.html');

stream.on('readable', function() {
   var chunk;

   while (null !== (chunk = stream.read())) {
      console.log(chunk.length);
   }
   // var data = stream.read();
});

stream.on('end', function() {
   console.log('the end');
});