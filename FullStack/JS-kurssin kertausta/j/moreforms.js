const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

//lisätään lomakkeeseen tapahtumakäsittelijä
form.addEventListener('submit', e => {
    //estetään lomakkeen uudelleenlataus
    e.preventDefault();
    //kutsutaan fuktiota valideteInputs()
    validateInputs();
});

//funktio setError() määrittely
const setError = (element, message) => {
    //haetaan elementin vanhempielementti
    const inputControl = element.parentElement;
    //haetaan elementin vanhempielementistä virheilmoitusta varten varattu span-elementti
    const errorDisplay = inputControl.querySelector('.error');
    //asetetaan virheilmoitus span-elementtiin
    errorDisplay.innerText = message;
    //listään vanhempielementtiin luokka error
    inputControl.classList.add('error');
    //poistetaan vanhempielementistä luokka success
    inputControl.classList.remove('success');
}

//funktio setSuccess() määrittely
const setSuccess = element => {
    //haetaan elementin vanhempielementti
    const inputControl = element.parentElement;
    //haetaan elementin vanhempielementistä virheilmoitusta varten varattu span-elementti
    const errorDisplay = inputControl.querySelector('.error');
    //poistetaan virheilmoitus span-elementistä
    errorDisplay.innerText = '';
    //lisätään vanhempielementtiin luokka success
    inputControl.classList.add('success');
    //poistetaan vanhempielementistä luokka error
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    //palautetaan totuusarvo, joka kertoo vastaako email muotoaa re-regular expression mukaisesti
    return re.test(String(email).toLowerCase());
}

//funtkio validateInputs() määrittely
const validateInputs = () => {
    //haetaan input-kenttien arvot ja poistetaan ylimääräiset välilyönnit
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    //tarkistetaan kenttien arvot ja asetetaan virheilmoitukset tai onnistumisilmoitukset
    if (usernameValue === '') {
        setError(username, 'Username is requires');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (password1Value === '') {
        setError(password1Value, 'Password is required');
    } else if (password1.length < 8) {
        setError(password1, 'Password must be at least 8 character');
    } else {
        setSuccess(password1);
    }

    if (password2Value === '') {
        setError(password2Value, 'Please confirm your password');
    } else if (password2Value !== password1Value) {
        setError(password2, 'Passwords don´t match');
    } else {
        setSuccess(password2);
    }
}