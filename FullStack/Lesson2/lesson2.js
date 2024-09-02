/*var http = require('http');

var server = http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("This my first node.js server\n")
    }
    if(req.url === '/myBlog'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end("<h1>My Blog</h1>")
    }
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server running at http://localhost:3000/'); */

var fs = require('fs');
console.log("Going to read the file");
var data = fs.readFileSync('example.txt');

console.log(data.toString());

console.log("Program Ended");