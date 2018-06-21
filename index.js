const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
	res.sendFile('./index.html');
});

app.get('/userform', function (req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.end(JSON.stringify(response));
});

let server = app.listen(3000, 'localhost', function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});