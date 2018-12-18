var socket = io.connect('192.168.0.145:6677',{'forceNew': true});

socket.on('messagens', function(data) {
	console.log(data);
	render(data);
});

function render(data) {
	var html = data.map(function(messagens, index){
		return (`
			<div class="msg">
				<strong>${messagens.nickname}</strong>
				<p>${messagens.text}</p>
			</div>
		`);
	}).join('');

	var divMsgs = document.getElementById('msgs');

	divMsgs.innerHtml = html;
	divMsgs.scrollTop = divMsgs.scrollHeight;
}

function addMessage(e) {
	var mensagem = {
		nickname: document.getElementById('nickname').value,
		msg: document.getElementById('msg').value
	};

	document.getElementById('nickname').style.display = 'none';

	socket.emit('add-message', message);

	// return false;
}