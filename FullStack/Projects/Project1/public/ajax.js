function processMessage(event) {
    event.preventDefault(); // Estetään lomakkeen lähetys, jotta voimme tarkistaa tiedot

    const form = document.querySelector("form");
    const name = form.name.value.trim();
    const country = form.country.value.trim();
    const message = form.message.value.trim();
    
    // Tarkistetaan, että syötteet eivät ole tyhjät
    let isValid = true;

    // Nimen tarkistus
    if (name === "") {
        document.getElementById("tarkitus1").textContent = "Nimi ei saa olla tyhjää.";
        document.getElementById("tarkitus1").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("tarkitus1").textContent = ""; // Poistetaan virheilmoitus
        document.getElementById("tarkitus1").style.color = "green";
    }

    // Maan tarkistus
    if (country === "") {
        document.getElementById("tarkistus2").textContent = "Maa ei saa olla tyhjää.";
        document.getElementById("tarkistus2").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("tarkistus2").textContent = ""; // Poistetaan virheilmoitus
    }

    // Viestin tarkistus
    if (message === "" || message.length < 3 || message.length > 200) {
        document.getElementById("tarkistus3").textContent = "Viestin pituus voi olla 3-200 merkkiä";
        document.getElementById("tarkistus3").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("tarkistus3").textContent = ""; // Poistetaan virheilmoitus
    }

    // Jos kaikki syötteet ovat oikein, lähetetään AJAX-pyyntö
    if (isValid) {
        fetch('ajaxmessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, country, message })
        })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // The table for messages
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

            document.getElementById('guestbook-messages').innerHTML = results; // Lisää viestit HTML:ään
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

// 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", processMessage); // Liitetään processMessage submit-tapahtumaan
});
