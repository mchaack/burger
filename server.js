// Purpose of server.js: Create Express Connection and Run Node Server

// Figure Out Which NPM Packages You Need to Install

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var handlebrs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',handlebrs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/',routes);

var port = 3000;
app.listen(port);