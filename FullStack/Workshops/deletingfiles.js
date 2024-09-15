var fs = require('fs');
var file = 'c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example3.txt';

fs.unlink(file, function(err){
    if(err) throw err;
    console.log("File deleted succusefully");
});