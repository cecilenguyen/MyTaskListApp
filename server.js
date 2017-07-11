var express = require('express');
var path = require('path'); // help work w/ file system paths, etc
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

// View engine
app.set('views', path.join(__dirname, 'views')); // views will be in views folder
app.set('view engine', 'ejs'); // specify engine
app.engine('html', require('ejs').renderFile); // ability to render html files

// Set static folder
app.use(express.static(path.join(__dirname, 'client'))); //angular stuff will go in client folder

// Body parser middleware 
// standard middleware, can check body parser documentation -- straight from there
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index); // want the homepage to be associated w/ index route from line 5
app.use('/api', tasks); // when want to interact with api

app.listen(port, function(){
	console.log("Server started on port " + port);
});