const express = require('express');
const { add, sub } = require('../pkg/calc_lib.js');

const app = express();
const port = 8080;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
/*
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
})); 
*/

app.get('/', (req, res) => res.redirect('/index.html'));

app.post('/solve', function (req, res) {
  var a = parseFloat(req.body.a);
  var b = parseFloat(req.body.b);
  res.send(add([a, b]));
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
