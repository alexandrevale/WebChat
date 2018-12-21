var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

// http://localhost:6677/teste-rota
app.get('/teste-rota', function(req, res) {
	res.status(200).send('Rota de teste OK');
});

var messages = [{
	id: 1,
	text: 'Bem vindo ao Web chat',
	nickname: 'Alexandre do Vale'
}];

io.on('connection', function(socket){
	console.log("IP:" + socket.handshake.address + " conectado.");

	socket.emit('messages', messages);

	socket.on('add-message', function(data) {
		messages.push(data);
		io.sockets.emit('messages', messages); 
	});
});

server.listen(6677, function(){
	console.log('Testando o servidor...');
});