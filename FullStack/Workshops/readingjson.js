var fs = require('fs');

var data = require('./persons.json');

//original data
console.log(data);

//add a new person
data.push({
    index: 7,
    name: "John Doe",
    age: '52',
    company: 'Laurea',
    address: "Ratatie 22"
});

console.log("Afteer adding a new person");
console.log(data);


//Write the data to new file "dataset.json"
fs.writeFile('dataset.json', JSON.stringify(data, null, 2), function(err){
    if(err) throw err;
    console.log("Data written succesfully");
});

//Output the JSON data to the web browser as plain text, remember Content-Type : text/json
var http = require('http');

http.createServer(function(req, res){
    if(req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'text/json'});
        fs.readFile('dataset.json', 'utf8', (err, data)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading file');
                return;
            }
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3003);

/*
//remove the last person
data.pop();

console.log("After removing the last person");
console.log(data);
*/
