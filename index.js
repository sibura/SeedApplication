var express = require('express');
var exphbs  = require('express-handlebars');
var mysql = require('mysql'),
cookieParser = require('cookie-parser');
bodyParser = require('body-parser'),
myConnection = require('express-myconnection');
session = require('express-session');
var cookieSession =require('cookie-session');

var current = require('./routes/Currency');
var transct = require('./routes/Transaction');

 var dbOptions = {
   host: 'localhost',
   user: 'root',
   password: 'coder123',
   port: 3306,
   database: 'tour_bank'
 };
   // create a route
var app = express();
app.use(express.static('public'));
app.use(myConnection(mysql, dbOptions, 'single'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'keyboard cat',resave : true,   saveUninitialized: true, cookie: { maxAge: 60000 }}))
var fs = require('fs');

app.get('/', function (req, res) {
  res.render('home')
});
app.get('/madeTrans', function (req, res) {
  res.render('madeTrans')
});




app.get('/convert', function (req, res) {
  res.render('convertTransactions')
});


//Currencies///
app.get('/currencie', current.currencies);
//app.get('/currencie/edit/:Id', current.currencs);
app.get('/currenc/edit/:Id', current.get);
app.post('/currenc/edit/:Id', current.update);
app.post('/currenc/update/:Id', current.update);
app.post('/currenc/add', current.add);
app.get('/trans/add', transct.add);
//this should be a post but this is only an illustrationof CRUD - not on good practices
app.get('/currenc/delete/:Id', current.delete);



 ////Transactions //
 app.get('/trans', transct.transact);
  app.get('/transect/add', transct.ShowAdd);
  app.get('/transect/add', transct.ShowAdd);
 app.get('/trans/edit/:id', transct.get);
 //app.get('/trans/edit/:id', transct.update);
 app.post('/trans/update/:Id', transct.update);
app.post('/trans/add', transct.add);
// app.post('/transect/add', transct.add);
app.get('/trans/delete/:Id', transct.delete);

 app.listen(3000);