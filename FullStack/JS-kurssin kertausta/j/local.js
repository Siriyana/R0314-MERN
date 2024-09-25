//create needed constants
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");
const copyright = document.querySelector(".copyright");

//Stop form from submitting when a button is pressed
form.addEventListener("submit", (e) => e.preventDefault());

//run function when the Say hello button is clicked
submitBtn.addEventListener("click", () => {
    //store the entered name in web storage
    localStorage.setItem("name", nameInput.value);
    //run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
    nameDisplayCheck();
});

//run function when the "forget" button is clicked
forgetBtn.addEventListener("click", () => {
    //remove the stored name from web storage
    localStorage.removeItem("name");
    // clear the name input field
    nameInput.value = '';
    //run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
    nameDisplayCheck();
});

//define the nameDisplayCheck() function
function nameDisplayCheck() {
    //check whether the name data item is stored in the web storage
    if (localStorage.getItem("name")) {
        //if it is, display personalized greetings
        const name = localStorage.getItem("name");
        h1.textContent = `Welcome, ${name}`;
        personalGreeting.textContent = `Welcome to our website, ${name}! Let´s hope you have fun while you are here`;
        copyright.textContent = "@ 2024 " + name +". All right reserved. This is a fictional website.";
        //hide the remember part of the form and shor the forget part
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
    } else {
        //if not, displau generic greeting
        h1.textContent = "Welcome to our website";
        personalGreeting.textContent = "Welcome to our website. We hope you have fun while you are here."
        copyright.textContent = "@ 2024 Nobody. All right reserved. This is a fictional website";
        rememberDiv.style.display ="block";
    }
}

nameDisplayCheck();