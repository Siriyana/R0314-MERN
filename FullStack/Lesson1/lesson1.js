var http = require('http');

//send http header, HTTP status: 200 : OK, Content Type : text/plain
http.createServer(function(req, res){
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is my first node.js server\n');
    }
    if(req.url === '/myBlog'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>This is the home page</h1>');
    }
    }
).listen(3000);

//console will print the message
console.log('Server running at http://localhost:3000/');