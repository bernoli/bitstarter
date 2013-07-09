var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var inputFile = 'index.html';


var inputBuffer = fs.readFileSync(inputFile);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(inputBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
