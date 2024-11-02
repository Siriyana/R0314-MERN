//Haetaan express.js-moduuli ja node.js:stä fileservice- ja path-moduuli
const express = require("express");
var fs = require("fs");
const path = require("path");

//Luodaan express-sovellus ja body-parser url-koodattujen ja json-muotoisten tietojen käsittelyyn
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public'))); //staattiset tiedosto public-kansiossa, kuten html ja css-tiedostot


//REITTI KOTISIVULLE / JUUREEN ja hakee kotisivun tiedot public-kansiosta
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


//REITTI VIERASKIRJAAN, jonne haetaan tiedot guestbook_messages.json -tiedostosta ja muodostetaan haetuista tiedoista taulukko
app.get('/guestbook', function (req, res) {

    fs.readFile(path.join(__dirname, 'guestbook_messages.json'), 'utf8', (err, data) => {
        if (err) throw err;
        const messages = JSON.parse(data);

        let results = '<table border="1">';
        results += '<tr><th>#</th><th>Name</th><th>Country</th><th>Message</th></tr>';
        for (let i = 0; i < messages.length; i++) {
            results +=
                '<tr>' +
                '<td>' + messages[i].id + '. </td>' +
                '<td>' + messages[i].Name + '</td>' +
                '<td>' + messages[i].Country + '</td>' +
                '<td>' + messages[i].Message + '</td>' +
                '</tr>';
        }
        results += '</table>';

        // Muodostetaan sivu uudestaan taulukon kanssa    ---- Tähän olisi ehkä joku fiksumpikin tapa, jossa voisi vain lisätä taulun sivulle, joka oli jo valmiina
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Guestbook</title>
            <link rel="stylesheet" href="css/style.css">
        </head>
        <body>

            <nav role="navigation">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Guestbook</a></li>
                    <li><a href="newmessage.html">Send message</a></li>
                    <li><a href="ajaxmessage.html">Ajax-messages</a></li>
                </ul>
            </nav>

            <header>
                <h1>Guestbook &lt;3</h1>
            </header>

            <main>
                <article>
                    <h2>Meowssages:</h2>
                    <div id="guestbook-messages">${results}</div>
                </article>
                <article>
                    <h2>Meow!</h2>
                </article>
            </main>

            <footer>
            </footer>

        </body>
        </html>
        `);
    });
});



//REITTI UUDEN VIESTIN LÄHETTÄMISSIVULLE
app.get('/newmessage', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'newmessage.html'));
});
//haetaan aikaisemmat viestit ja lisätään uusi viesti
app.post('/newmessage', function (req, res) {
    fs.readFile(path.join(__dirname, 'guestbook_messages.json'), 'utf8', (err, data) => {
        var messages = JSON.parse(data);
        var newID = messages.length + 1;
        messages.push({
            "id": newID,
            "Date": new Date(),
            "Name": req.body.name,
            "Country": req.body.country,
            "Message": req.body.message,
        });
        //kirjoitetaan/päivitetään tiedot json-tiedostoon
        fs.writeFile(path.join(__dirname, 'guestbook_messages.json'), JSON.stringify(messages, null, 4), (err) => { /* stringifyssa null, 4 auttaa siihen, että tietue tallentuu sisennettynä json-tiedostoon yhden rivin sijaan */
            if (err) throw err;
            console.log('It\´s saved!');
            res.redirect('/guestbook');
        });
    });
});


//REITTI AJAX-VIESTIT SIVULLE
app.get('/ajaxmessage', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'ajaxmessage.html'));
});

//haetaan aikaisemmat viestit ja lisätään uusi viesti
app.post('/ajaxmessage', function (req, res) {
    fs.readFile(path.join(__dirname, 'guestbook_messages.json'), 'utf8', (err, data) => {
        if (err) throw err;
        let messages = JSON.parse(data);

        let newMessage = {
            id: messages.length + 1,
            Date: new Date(),
            Name: req.body.name,
            Country: req.body.country,
            Message: req.body.message
        };
        messages.push(newMessage);

        // Kirjoitetaan / päivitetään tiedot json-tiedostoon
        fs.writeFile(path.join(__dirname, 'guestbook_messages.json'), JSON.stringify(messages, null, 4), (err) => {
            if (err) throw err;
            res.json(messages); // lähetetään tiedot 
        });
    });
});


//KÄYNNISTETÄÄN PAIKALLINEN SERVER
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

