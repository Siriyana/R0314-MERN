var https = require('https');

var options = {
    hostname: 'www.omdbapi.com',
    //port: 443,
    path: '/?s=star+wars&apikey=cbbc6750',
    method: 'GET'
}

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    var data = '';
    res.on('data', chunk => {
        data += chunk;
        //process.stdout.write(chunk);
    });
    res.on('end', () => {
        const jsData = JSON.parse(data);
        console.log(jsData)


        var tableData = `<tr><th>Title</th><th>Year</th><th>Poster</th></tr>`

        for (var i=0; i <10; i++){
            tableData+= `<tr><td>`+ jsData.Search[i].Title + `</td><td>` + jsData.Search[i].Year + `</td><td><img src="` + jsData.Search[i].Poster + `"></td></tr>`;
        }


        var http = require('http');


        //send http header, HTTP status: 200 : OK, Content Type : text/plain
        http.createServer(function(req, res){
            if(req.url === "/hello"){
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('hello world\n');
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
                    <table> `
                    + tableData +
                    `
                    </table>
                    </body>
                    </html>
                    `);
            }
            else{
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>NOTHING HERE TO SEE</h1>')
            }
            
        }).listen(3001);

    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
