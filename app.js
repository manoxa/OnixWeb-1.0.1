var express      = require('express'),
	path         = require('path'),
	favicon      = require('static-favicon'),
	logger       = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser   = require('body-parser'),
	session      = require('express-session'),
	load         = require('express-load');

var app = express();

//middleware
var erros = require('./middleware/erros');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'aulanodejsacadtec009933' }));
app.use(express.static(path.join(__dirname, 'public')));

load('models').then('controllers').then('routes').into(app);

//middleware
app.use(erros.notfound);
app.use(erros.serverError);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
