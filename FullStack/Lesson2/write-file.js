var fs = require('fs');

const data = "this is the data that will be written";

fs.writeFile('write.txt', data, function(err){
    if(err) throw err;
    console.log("Data written succesfully");
});