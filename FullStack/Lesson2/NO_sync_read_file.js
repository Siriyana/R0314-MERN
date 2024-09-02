var fs = require('fs');

console.log("Going to read the file");
fs.readFile('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Lesson2/example.txt', function(err, data){
    if(err) throw err;
    console.log(data.toString());
});

for(var i=0; i<5; i++){
    console.log('loop text ' + i);
}