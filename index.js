const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/auth/google', express.static('views'));

app.get('/', function(req, res){
	res.render('index', {
		name: 'My dynamic Pug site',
		url: '/auth/google'
	});
});

app.get('/auth/google', function(req, res){
	res.render('auth', {
		name: 'Google Auth'
	});
});

app.listen(3000);
app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});