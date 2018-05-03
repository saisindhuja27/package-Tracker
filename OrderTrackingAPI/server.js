const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const morganBody = require('morgan-body');


const orderRoute = require('./app/routes/orderRoute');
const itemRoute = require('./app/routes/itemRoute');

const db = mongoose.connect("mongodb://localhost:27017/PackageTracking", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to ' + db, ' + ', response); }
});

const app = express();
app.use(bodyParser.json());
morganBody(app);

app.use(logger('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  
app.use('/api',orderRoute);
app.use('/api',itemRoute);

const port = 8000;

app.listen(port, function () {
    console.log('Example app listening on port 8000!');
  })




