var http = require('http');

var fs = require('fs');

//send http header, HTTP status: 200 : OK, Content Type : text/plain
http.createServer(function(req, res){
    if(req.url === "/hello"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('hello world\n');
    }
    else if(req.url === '/frontpage'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('c:\\Users\\khell\\OneDrive\\Asiakirjat\\GitHub\\R0314-MERN\\FullStack\\Workshops\\frontpage.html', 'utf8', (err, frontData)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading file');
                return;
            }
            res.end(frontData);
        });

    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('c:\\Users\\khell\\OneDrive\\Asiakirjat\\GitHub\\R0314-MERN\\FullStack\\Workshops\\contact.html', 'utf8', (err, contactData)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading file');
                return;
            }
            res.end(contactData);
        });

    }
    else if(req.url === '/plaintext'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        fs.readFile('c:\\Users\\khell\\OneDrive\\Asiakirjat\\GitHub\\R0314-MERN\\FullStack\\Workshops\\local.txt', 'utf8', (err, plainData)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading file');
                return;
            }
            res.end(plainData);
        });

    }
    else if(req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'json'});
        fs.readFile('c:\\Users\\khell\\OneDrive\\Asiakirjat\\GitHub\\R0314-MERN\\FullStack\\Workshops\\sampledata.json', 'utf8', (err, jsonData)=>{
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading file');
                return;
            }
            res.end(jsonData);
        });


    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>NOTHING HERE TO SEE</h1>')
    }
    }
).listen(3001);

//console will print the message
console.log('Server running at http://localhost:3001/');