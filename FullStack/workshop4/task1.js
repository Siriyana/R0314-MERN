var express = require('express');
var app = express();

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
    res.send('Lets try to add some data to a file');
});

app.get('/about', function (req, res){
    res.sendFile(__dirname + '/demosite/about.html');
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});