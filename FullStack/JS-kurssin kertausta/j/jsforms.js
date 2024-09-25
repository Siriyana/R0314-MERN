function tarkasta1(e){
    e.preventDefault();
}

function tarkasta2(){
    var enimi = document.getElementById("enimi").value;
    var snimi = document.getElementById("snimi").value;
    if (enimi == "" || snimi == ""){
        alert("Annoit tyhjän nimen");
    } else if (enimi.length <3 || snimi.length <3) {
        alert("Liian lyhyt nimi");
    }
    console.log("Etunimi: " + enimi + " Sukunimi: " + snimi);
}

function toggle() {
    document.getElementById("myDiv").classList.toggle("myStyle");
}

//haetaan kaikki input-checkbox tyyppiset elementit
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// lisätään jokaiseen checkboxiin tapahtumakäsittelijä
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        //tulostetaan konsoliin tapahtuman kohde ja sen arvo
        console.log(event.target.value, event.target.checked);
        //lisätään checkboxin vanhempielementtiin span-elementti
        if (event.target.checked) {
            console.log("Checkbox is checked");
            const addi = document.createElement('span');
            addi.innerHTML = "Checkbox is checked";
            event.target.parentElement.appendChild(addi);
            //positetaan checkboxin vanhempielementistä viimeinen span-elementti
        }else {
            console.log("Checkbox is not checked");
            event.target.parentElement.removeChild(event.target.parentElement.lastChild);
        }
    });
});