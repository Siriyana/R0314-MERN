var fs = require("fs");

console.log("Program started");

// Aloitetaan tiedoston lukeminen asynkronisesti
fs.readFile('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example.txt', results);

// Tämä koodi suoritetaan heti, mutta tiedostoa ei ole vielä luettu
for (var i = 0; i < 15; i++) {
    console.log("Node just keeps on going while");
}

// Funktion avulla käsitellään tiedoston lukutulokset
function results(err, data) {
    if (err) {
        return console.error(err);  // Jos virhe, tulostetaan se
    }
    console.log("Results of file read:");
    console.log(data.toString());  // Tulostetaan tiedoston sisältö
}

