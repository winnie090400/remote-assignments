//-----Assignment 1: Your First Web Server----------------
const express = require('express');
const app = express();

app.get('/', function (req, res){
  res.send('<h1>Hello, My Server!</h1>');
});
app.listen(3000, function () {
  console.log("伺服器已經啟動在http://localhost:3000/");
});

//-----Assignment 2: Build Backend API for Front-End -----
app.get('/getData', function (req, res){
  let number = req.query.number;
  let beNumber = Number(number);
  let sum = 0;
  if ( number === undefined || number ==='' ) {
    res.send('<h1>Lack of Parameter!</h1>');
  } else if ( Number.isInteger(beNumber) && beNumber > 0) {
    for(let i = 0; i <= beNumber; i ++ ){
      sum += i;
    }
    res.send(sum.toString());
  } else {
    res.send('<h1>Wrong Parameter!</h1>');
  }
});

//-----Assignment 3: Connect to Backend API by AJAX -----
app.use(express.static('./sum'));

//-----Assignment 4: HTTP Cookie ------------------------
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
      res.render('index', { name });
    } else {
      res.redirect('/trackname');
    }
});

app.get('/trackname', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/myName');
  } else {
    res.render('trackname');
  }
});

app.post('/trackname', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/myName');
});



