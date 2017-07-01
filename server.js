var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");

//express setup
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

var routes = require('./controllers/routes.js');
app.use('/', routes);


app.set('view engine', 'handlebars');

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

