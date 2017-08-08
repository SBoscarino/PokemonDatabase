const express = require('express');
const mustacheExpress = require('mustache-express');
const itemsRoute = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended : true}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null;

app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', itemsRoute);

let url = "mongodb://localhost:27017/pokemon_collection";

mongoose.connect(url, { useMongoClient : true}).then(function(){console.log('connected to database')});

app.listen(8080, function(){
  console.log('listening on port 8080')
});
