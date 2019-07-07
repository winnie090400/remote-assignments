
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '12345',
	database : 'assignment',
});

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,           
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/home', function(request, response) {
	var email = request.body.email;
	var password = request.body.password;

	if (email && password) {
		
		connection.query('SELECT * FROM user WHERE email = ? OR password = ?', [email, password], function(error, results, fields) {
			
			if (results.length > 0 && results[0].email == email && results[0].password == password) {
				
				request.session.loggedin = true;
				request.session.email = email;
				request.session.password = password;
				response.redirect('/member');
			
			} else if(results.length > 0 && results[0].email == email && results[0].password !== password){
				
				response.send('Wrong password!');
			
			} else if(results.length > 0 && results[0].email !== email && results[0].password == password){			
				
				response.send('Wrong email address!');
			
			} else if(results.length == 0){
				
				var data = {email: email , password: password};
				connection.query('INSERT INTO user SET ?', data, function(error, fields) {
					if(error) throw error;
				});
			
				response.send('User successfully created!')							
			}		
			
			response.end();
		});
	} else {
		response.end(request.session.loggedin);
	}
});

app.get('/member', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});


app.listen(3000, function () {
  console.log("伺服器已經啟動在http://localhost:3000/");
});