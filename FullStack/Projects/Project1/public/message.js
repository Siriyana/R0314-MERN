//Tapahtumakuuntelija, joka varmistaa, että sivu on ladattu kokonaan
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); //haetaan lomakke-elementti
    
    form.addEventListener("submit", function(event) { 
        event.preventDefault(); // Estetään sivun uudelleen latautuminen
        
        //haetaan lomakkeen syötteet ja poistetaan tyhjät merkit
        const name = form.name.value.trim();
        const country = form.country.value.trim();
        const message = form.message.value.trim();
        
        // Tarkistetaan, että syötteet eivät ole tyhjät
        let isValid = true;
        // Nimen tarkistus, ettei ole tyhjä, olisi voinut lisätä muitakin, mutten keksinut mitä
        if (name === "") {
            document.getElementById("tarkitus1").textContent = "Nimi ei saa olla tyhjää."; //lisätään span-kohtaan virheilmotus
            document.getElementById("tarkitus1").style.color = "red";
            isValid = false;
        } else {
            document.getElementById("tarkitus1").textContent = ""; // Poistetaan virheilmoitus
        }
        // Maan tarkistus, ettei ole tyhjä, ehkä olisi voinut jotain muutakin tarkistaa
        if (country === "") {
            document.getElementById("tarkistus2").textContent = "Maa ei saa olla tyhjää."; //lisätään span-kohtaan virheilmotus
            document.getElementById("tarkistus2").style.color = "red";
            isValid = false;
        } else {
            document.getElementById("tarkistus2").textContent = ""; // Poistetaan virheilmoitus
        }
        // Viestin tarkistus, ettei ole tyhjä, liian lyhyt tai liian pitkä
        if (message === "" || message.length < 3 || message.length > 200) {
            document.getElementById("tarkistus3").textContent = "Viestin pituus voi olla 3-200 merkkiä"; //lisätään span-kohtaan virheilmotus
            document.getElementById("tarkistus3").style.color = "red";
            isValid = false;
        } else {
            document.getElementById("tarkistus3").textContent = ""; // Poistetaan virheilmoitus
        }

        // Jos kaikki kunnossa, lähetetään lomake
        if (isValid) {
            form.submit();
        }
    });
});
