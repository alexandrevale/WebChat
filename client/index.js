var socket = io.connect('http://192.168.0.145:6677',{'forceNew': true});

// function render(data) {
// 	var html = data.map(function(message, index){
// 		return (
// 			`<div class="message">
// 				<strong>${message.nickname}</strong>
// 				<p>${message.text}</p>
// 			</div>`
// 			);
// 	}).join(' ');

// 	var divMsgs = document.getElementById('messages');

// 	divMsgs.innerHtml = html;
// 	divMsgs.scrollTop = divMsgs.scrollHeight;
// }

function addMessage(e) {
	var message = {
		nickname: document.getElementById('nickname').value,
		text: document.getElementById('message').value
	};

	document.getElementById('nickname').style.display = 'none';

	socket.emit('add-message', message);

}

socket.on('messages', function(data) {
	console.log(data);
	// render(data);
	var html = data.map(function(message, index){
		return (
			`<div class="message">
				<strong>${message.nickname}</strong>
				<p>${message.text}</p>
			</div>`
			);
	}).join(' ');

	var divMsgs = document.getElementById('messages');

	divMsgs.innerHtml = html;
	divMsgs.scrollTop = divMsgs.scrollHeight;
	
});
