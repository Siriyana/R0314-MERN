var express = require('express');
var app = express();
var fs = require('fs');

//Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //for parsing application

app.use(express.static(__dirname + '/demosite'));

app.get('/hello', function(req, res){
    res.send('Hello World!');
});

app.get('/list', function (req, res){
    res.sendFile(__dirname + '//exampledata.txt');
});

app.get('/jsondata', function (req, res){
    var data = require('./exampledata2.json');
    res.json(data);
});

app.get('/details', function (req, res){
    var data = require('./exampledata2.json');
    //Parse the results into a variable
    var results = '<table border="1"> ';
    for (var i=0; i < data.length; i++){
        results +=
        '<tr>'+
        '<td>' + data[i].Name + '</td>'+
        '<td>' + data[i].Email + '</td>'+
        '<td>' + data[i].Company + '</td>'+
        '<td>' + data[i].Date + '</td>'+
        '</tr>';
    }
    results += '</table>';
    res.send(results)
});

app.get('/add', function (req, res){
    //Load the existing data from a file
    var data = require('./exampledata2.json');
    // Create a new JSON object and add it to the existing data variable
    data.push({
        "Name": "Mika Stenberg",
        "Company": "Laurea",
        "Email": "mika@keksitty.fi",
        "Date": "30/3/2016 \r\n"
    });
    var jsonStr = JSON.stringify(data);
    //Write data to a file
    fs.writeFile('exampledata2.json', jsonStr, (err)=> {
        if (err) throw err;
        console.log('T|\`s saved!');
    });
    res.send('Saved the data to a file. Browse to the /detail ton see the contens of the file');
});

//Serve a form to the user
app.get('/adduser', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/adduser.html');
});

//Route for form sending the POST data
app.post('/adduser', function (req, res) {
    var data = require('./exampledata2.json');
    data.push({
        "Name": req.body.name,
        "Company": req.body.company,
        "Email": req.body.email,
        "Date": new Date()
    });
    //convert the JSON object to a string format
    var jsonStr = JSON.stringify(data);
    //Write data to a file
    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log('It\´s saved!');
    });
    res.send("Saved the data to a file. Browse to the /details to see the contents of the file")
});

app.get('/about', function (req, res){
    res.sendFile(__dirname + '/demosite/about.html');
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});