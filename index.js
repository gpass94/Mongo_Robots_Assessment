const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();
const userData = require('./data.js');


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
