var express = require('express');
var app = express();
var http = require('http').Server(app);
var morgan = require('morgan');
var port = process.env.PORT || 3000;

var io = require('socket.io')(http);


app.get('/', function(req, res) {
  console.log('index hit');
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('we be connected');
});










app.listen(port, function() {
  console.log('chat server started on port %s', port);
});