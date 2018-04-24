//server.js
'use strict';

//import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//create our instances
var app = express();
var contacts = require('./routes/contact');

//set our port to either a predetermined port number if you have set it up, or 8081
var port = process.env.API_PORT || 8081;

//Mlab db connection.
//this should be setup in a config file
var mongoDB = 'mongodb://admin:CoAssessment@ds133932.mlab.com:33932/coding-assessment';


mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, I will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent data
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//Use the router configuration when I call /api
app.use('/api', contacts);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
