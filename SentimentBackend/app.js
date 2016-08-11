var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var articles = require('./routes/articles');

app.use('/api/articles', articles);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/update', function(req, res) {
    console.log(req.body); // the posted data
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;