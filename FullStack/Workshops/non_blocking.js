var fs = require("fs");
console.log("Program started");
var data = fs.readFileSync('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example.txt');
console.log(data.toString());
for (var i=0; i<15; i++){
    console.log("Node just keeps on going while");
}

console.log("Program Ended");