var express = require('express');
var fs = require('fs');
var app = express();

//Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //for parsing application

//Serve a form to the user
app.get('/adduser', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/adduser.html');
});

//Route for form sending the POST data
app.post('/adduser', function (req, res) {
    var data = "";
    data += req.body.name + "\n";
    data += req.body.email + "\n";
    data += req.body.company + "\n";
    console.log(data);
    res.send(data);
});