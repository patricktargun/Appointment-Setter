"use strict";
// Modules =================================================
var express          = require('express');
var app              = express();
var bodyParser       = require('body-parser');
var mongoose         = require('mongoose'); 
var morgan           = require('morgan');

// Required files ==========================================
var configDB         = require('./config/database.js');
var datePickCtrl    = require('./app/controllers/datePickCtrl');


// Configuration ===========================================
var port = process.env.PORT || 8080; // set our port

mongoose.connect(configDB.url); // connect to our database

var connection = mongoose.connection;
connection.once('open', function(){
	console.log('Successfully connected to: ' + configDB.url)
});

// Express application middleware
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms

app.use(express.static(__dirname + '/public')); // set the static files location


// Routes ==================================================
app.get('/api/getDate', datePickCtrl.getDate);

app.post('/api/setDate', datePickCtrl.setDate);



// Start app ===============================================
app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});