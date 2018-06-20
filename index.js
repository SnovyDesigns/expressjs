const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils');

const app = express();

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	utils.read('test.json')
		.then(data => res.send(data))
		.catch(err => res.send(`Nie udało się pobrać zawartości pliku <br/> Błąd: ${err.message}`));
});

app.post('/updateNote/:note', function(req, res) {
	let note = req.params.note;

	utils.update('test.json', note)
		.then(data => res.send(`Nadpisano poprawnie plik. <br/> Nowa zawartość pliku to: ${data}`))
		.catch(err => res.send(`Nie udało się pobrać nowej zawartości pliku <br/> Błąd: ${err.message}`));
});



app.listen(3000);

app.use(function(req, res, next) { // eslint-disable-line
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});
