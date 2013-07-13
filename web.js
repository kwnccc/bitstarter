var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var input = fs.readFileSync('index.html');
var inputStr = input.toString('utf8');


app.get('/', function(request, response) {
  response.send('Hello World '+inputStr+'!');	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
