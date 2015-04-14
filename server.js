var express = require('express'),
	bodyParser = require('body-parser'), 
	mongoose = require('mongoose');

mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

var Bear = require('./app/models/bear');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
	res.json({ message: 'hooray! welcome to our api!'});
});


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);


