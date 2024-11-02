function processMessage(event) {
    event.preventDefault(); // Estetään lomakkeen lähetys, jotta voimme tarkistaa tiedot

    //Lomakkeen ja lomakkeen tietojen (nimi, maa, viesti) hakeminen
    const form = document.querySelector("form");
    const name = form.name.value.trim();
    const country = form.country.value.trim();
    const message = form.message.value.trim();
    
    // Tarkistetaan, että syötteet ok
    let isValid = true;
    // Nimen tarkistus
    if (name === "") {
        document.getElementById("tarkitus1").textContent = "Nimi ei saa olla tyhjää."; //lisätään span-kohtaan virheilmotus
        document.getElementById("tarkitus1").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("tarkitus1").textContent = ""; // Poistetaan virheilmoitus
    }
    // Maan tarkistus
    if (country === "") {
        document.getElementById("tarkistus2").textContent = "Maa ei saa olla tyhjää."; //lisätään span-kohtaan virheilmotus
        document.getElementById("tarkistus2").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("tarkistus2").textContent = ""; // Poistetaan virheilmoitus
    }
    // Viestin tarkistus, ettei tyhjä, liian lyhyt tai liian pitkä
    if (message === "" || message.length < 3 || message.length > 200) {
        document.getElementById("tarkistus3").textContent = "Viestin pituus voi olla 3-200 merkkiä"; //lisätään span-kohtaan virheilmotus
        document.getElementById("tarkistus3").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("tarkistus3").textContent = ""; // Poistetaan virheilmoitus
    }

    // Jos kaikki kunnossa, lähetetään AJAX-pyyntö
    if (isValid) {
        //lähetetään tietoja ja muutetaan tiedot json-muotoon
        fetch('ajaxmessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, country, message })
        })
        //vastauksena tulleet tiedot muutetaan json-muotoon
        .then(response => response.json()) 
        .then(data => {
            // Tiedon tallentaminen taulukko-muotoon: järjestysnumero, nimi, maa ja viesti omissa sarakkeissa
            let results = '<table class="table table-dark table-striped">';
            results += '<tr><th>#</th><th>Name</th><th>Country</th><th>Message</th></tr>';
            for (let i = 0; i < data.length; i++) {
                results +=
                    '<tr>' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + data[i].Name + '</td>' +
                    '<td>' + data[i].Country + '</td>' +
                    '<td>' + data[i].Message + '</td>' +
                    '</tr>';
            }
            results += '</table>';
            //taulukko asetetaan div-kohtaan, jonka nimi on guestbook-messages
            document.getElementById('guestbook-messages').innerHTML = results; // Lisää viestit HTML:ään
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

// Kun sivusto on latautunut, niin funktio processMessage yhdistetty lähetä-nappulaan
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", processMessage); 
});
