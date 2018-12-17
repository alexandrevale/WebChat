var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// http://localhost:6677/teste-rota
app.get('/teste-rota', function(req, res) {
	res.status(200).send('Rota de teste OK');
});

server.listen(6677, function(){
	console.log('Testando o servidor...');
});