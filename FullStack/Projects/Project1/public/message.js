document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) { // Muutettu "submitMessage" -> "submit"
        // Estetään lomakkeen lähetys, jotta voimme tarkistaa tiedot
        event.preventDefault();
        
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

        // Jos kaikki syötteet ovat oikein, lähetetään lomake
        if (isValid) {
            form.submit();
        }
    });
});
