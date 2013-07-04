var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(256);

app.get('/', function(request, response) {
  console.log('Entro 1');
  var data = fs.readFileSync('index.html', 'utf8') 
  var buffer = new Buffer(data,'utf8');
  response.send(buffer.toString('utf8'));
  console.log(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
