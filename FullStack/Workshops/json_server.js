var http = require("http");
var fs = require("fs");

http.createServer(function (req, res){
    //tarkista URL
    if (req.url === "/jsondata") {
        //lue JSON-tiedosto
        fs.readFile('c://Users//khell//OneDrive//Asiakirjat//GitHub//R0314-MERN//FullStack//Workshops//persons.json', 'utf8', (err, data)=>{
            if (err) {
                res.writeHead(500, {'Content-Type':'text/plain'});
                res.end('Error reading file');
                return;
            }
            var persons = JSON.parse(data);
            var sisalto = "<html><head><title>People Data</title></head><body>";
            sisalto+='<h1>People Data</h1>';
            sisalto+="<table border='1'>";
            sisalto+="<tr><th>Name</th><th>Age</th><th>Company</th><th>Address</th></tr>";
            for (var i=0; i<persons.length; i++){
                sisalto += "<tr>";
                sisalto += "<td>"+persons[i].name+"</td>";
                sisalto+="<td>"+persons[i].age+"</td>";
                sisalto+="<td>"+persons[i].company+"</td>";
                sisalto+="<td>"+persons[i].address+"</td>";
                sisalto+="</tr>\n";
            };
            sisalto+="</table>";
            sisalto+="</body></html>";
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(sisalto);
        }); 
    } else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('404 Not Found');
    }
}).listen(3002, () =>{
    console.log('Server running at http://localhost:3002/');
});