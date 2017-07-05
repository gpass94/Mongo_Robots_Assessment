const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const userData = require('./data.json');


var MongoClient = require('mongodb').MongoClient , assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:3001/Robots';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
    findDocuments(db, function){
      db.close();
    });
});

var robots_collection;
var findDocuments =


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'))


app.get('/users', function(req, res){
  res.render('index', userData)
})


app.listen(3001, function () {
  console.log("App is running on local host:3001");
});
