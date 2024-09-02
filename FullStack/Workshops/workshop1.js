
//a loop hich counts from 0 to 100
for (let i=0; i<=100; i++){console.log(i);}



//run script on terminal 
console.log("Hello World!")



//create a simple webserver with Node.js
var http = require('http');
//send the http header, HTTP status: 200 : OK, Content Type: text/plain
http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1>Welcome to the Home Page</h1>')
    }
    else if(req.url === '/whyNodeServer'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(`
            <h1>What use can you think of a web server created with Node.js</h1>
            <ol>
                <li>Static File Server: files for a website</li>
                <li>API Server: Provide API for a frontend</li>
                <li>Real-Time Applications: power real-time applications, like chat-apps</li>
                <li>Prototyping: quickly prototype a web application with basic structures</li>
                <li>Data Collection: serve as an endpoint for collecting data, for example form submissions from users</li>
            </ol>
            `)
    }
    else if(req.url === '/table'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
            <header>
            <style>table, th, td{border:2px solid black}</style>
            </header>
            <body>
            <h1>Table</h1>
            <table>
                <tr><th>Name</th><th>Address</th><th>City</th></tr>
                <tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>
                <tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>
            </table>
            </body>
            </html>
            `);
    }
    else if(req.url === '/myBlog'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><head><style>body{background-color:lightblue;}</style></head><body><h1>Blog!</h1></body></html>');
    }
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist</p>')
    }
}).listen(3000);
//Console will print the message
console.log('Server running at http://localhost:3000/');


//