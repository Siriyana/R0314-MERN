const fs = require('fs');

console.log("Program started");

// Luetaan molempien tiedostojen sisältö
fs.readFile('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example1.txt', 'utf8', (err, data1) => {
    if (err) {
        return console.error(err);
    }

    fs.readFile('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example2.txt', 'utf8', (err, data2) => {
        if (err) {
            return console.error(err);
        }

        // Yhdistetään molempien tiedostojen sisältö
        const combinedData = "\nI wrote this, best regards Veera\n" + data1 + "\n" + data2 + "\nI wrote this, best regards Veera";

        // Kirjoitetaan yhdistetty sisältö uuteen tiedostoon
        fs.writeFile('c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example3.txt', combinedData, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('The file has been saved!');
        });
    });
});





