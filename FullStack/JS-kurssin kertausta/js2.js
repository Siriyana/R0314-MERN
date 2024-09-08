//funktion tarkasta määrittely
function tarkasta1(event){
    //estetään lomakkeen uudelleenlataus
    event.preventDefault();
    console.log("Tarkistetaan lomake 1")
    var enimi = document.omaLomake1.enimi.value;
    var snimi = document.omaLomake1.snimi.value;
    console.log("Etunimi: " + enimi + "Sukunimi: " + snimi);
    //tarkistetaan kenttien arvot
    if (enimi == "" || enimi == null){
        alert("Etunimi puuttu");
    } else if (snimi == "" || snimi == null) {
        alert("Sukunimi puuttuu");
    } else {
        alert("Lomake ok")
    }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//lisätään jokaiseen chekcboxiin tapahtumakäsittelijä
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        //tulostetaan konsoliin tapahtuman kohde ja sen arvo
        console.log(event.target.value, event.target.checked);
        //lisätään checkboxin vanhempielementtiin span-elementti
        if (event.target.checked){
            console.log("Checkbox is created");
            const addi = document.createElement('span');
            addi.innerHTML = "Checkbox is created";
            event.target.parentElement.appendChild(addi);
        //poistetaan checkboxin vanhempielementistä viimeien span-elementti
        } else {
            console.log("Checkbox is not checked");
            event.target.parentElement.removeChild(event.target.parentElement.lastChild);
        }
    });
});



//skripti registration lomakkeen sisällön tarkastamiseksi
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//lisätään lomakkeeseen tapahtumakäsittelijä
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

//funktio setError() määrittely
const setError = (element, message) => {
    //haetaan elementin vanhempielementti
    const inputControl = element.parentElement;
    //haetaan elementin vanhempielementistä virheilmoitusta varten varattu span-elementt
    const errorDisplay = inputControl.querySelectorAll('.error');
    //asetetaan virheilmoitus span-elementtiin
    errorDisplay.innerText = message;
    //lisätään vanhempielementtiin luokka error
    inputControl.classList.add('error');
    //poistetaan vanhempielementistä luokka successa
    inputControl.classList.remove('success')
}
//funktio setSuccess määrittely
const setSuccess = element => {
    //haetaan elementin vanhempielementti
    const inputControl = element.parentElement;
    //haetaan elementin vanhempielementistä virheilmoitusta varten varattu span-elementt
    const errorDisplay = inputControl.querySelectorAll('.error');
    //asetetaan virheilmoitus span-elementtiin
    errorDisplay.innerText = '';
    //lisätään vanhempielementtiin luokka error
    inputControl.classList.add('success');
    //poistetaan vanhempielementistä luokka successa
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    //Regular expression for email validation - can be checked from https://regex101.c0m/
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //palautetaan totuusarvo, joka kertoo vastaako email muotoa re-regular expression mukaisesti
    return re.test(String(email).toLowerCase());
}

//funktio validateInputs() määrittely
const validateInputs = () => {
    //haetaan input-kenttien arvot ja poistetaan ylimääräiset välilyönnit
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    //tarkistetaan kenttie arvot ja asetetaan virheilmoitukseet tai onnistumisilmoituksetn
    if (usernameValue === ""){
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if (emailValue === ""){
        setError(email, 'Email is required');
    } else if  (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email addresss');
    } else {
        setSuccess(email);
    }
    if (passwordValue === ""){
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character');
    } else {
        setSuccess(password);
    }
    if (password2Value === ""){
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
         setError(password2, 'Passwords does not match');
    } else {
        setSuccess(password2);
    }
};