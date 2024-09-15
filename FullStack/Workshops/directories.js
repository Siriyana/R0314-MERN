var fs = require('fs');
var path = require('path');

//uuden hakemiston luomista
/*fs.mkdir('testi', function(err){
    if(err) throw err;
    console.log('Created Testi-directory')
});*/

//hakemiston poistaminen
/*fs.rmdir('testi', function(err){
    if(err) throw err;
    console.log('Deleted Testi-directory')
});*/

// Hakemiston nimi
const uusiHakemisto = 'newdata';

// Tiedostojen polut
const tiedosto1 = 'c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example1.txt';
const tiedosto2 = 'c:/Users/khell/OneDrive/Asiakirjat/GitHub/R0314-MERN/FullStack/Workshops/example2.txt';
const yhdistettySijainti = path.join(uusiHakemisto, 'combined.txt'); // Yhdistetyn tiedoston polku

// Luo uusi hakemisto
fs.mkdir(uusiHakemisto, { recursive: true }, function(err) {
    if (err) {
        return console.error('Error creating directory:', err);
    }
    console.log('Created directory:', uusiHakemisto);

    // Luetaan ensimmäinen tiedosto
    fs.readFile(tiedosto1, 'utf8', (err, data1) => {
        if (err) {
            return console.error('Error reading file1:', err);
        }

        // Luetaan toinen tiedosto
        fs.readFile(tiedosto2, 'utf8', (err, data2) => {
            if (err) {
                return console.error('Error reading file2:', err);
            }

            // Yhdistetään molempien tiedostojen sisältö
            const yhdistettyTiedosto = `\nI wrote this, best regards Veera\n${data1}\n${data2}\nI wrote this, best regards Veera`;

            // Kirjoitetaan yhdistetty sisältö uuteen tiedostoon
            fs.writeFile(yhdistettySijainti, yhdistettyTiedosto, (err) => {
                if (err) {
                    return console.error('Error writing file:', err);
                }
                console.log('The file has been saved!');
            });
        });
    });
});
