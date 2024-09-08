var fs = require("fs");

console.log("Program started");

// Aloitetaan tiedoston lukeminen asynkronisesti
var data = fs.readFileSync('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example1.txt');
console.log(data.toString());
var data2 = fs.readFileSync('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example2.txt');
console.log(data2.toString());

console.log("Program Ended")