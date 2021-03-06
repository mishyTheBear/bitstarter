var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(fs.readFileSync('index.html'));
  var outString = buffer.toString();
  response.send(outString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
