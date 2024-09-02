function change(){
    const header = document.getElementsByTagName("h2").item(0);
    header.firstChild.data = "A dynamic document";

    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the first paragraph";


    const newText = document.createTextNode("This is the second paragraph.");
    const newElement = document.createElement("p");
    newElement.appendChild(newText);
    para.parentNode.appendChild(newElement)
}

let d2 = new Date();
document.getElementById("date").innerHTML = "<h1>Today´s date is " + d2 + "</h1>"

var nappi = document.getElementById('magic');
var pressNappi = document.getElementById('nappi1');
var acraNappi = document.getElementById('nappi2');

function sayMagicWord(event){
    if (event.target === pressNappi) {
        document.body.style.backgroundColor = 'red';
    }
    else if (event.target === acraNappi) {
        document.body.style.backgroundColor = 'blue';
    }
    else if (event.target === nappi) {
        document.body.style.backgroundColor = 'green';
    }
}


pressNappi.addEventListener('click', sayMagicWord)
acraNappi.addEventListener('click', sayMagicWord)
nappi.addEventListener('click', sayMagicWord)


function showCustomer(str){
    console.log(str)
    if (str == "JOUNI"){
        tulosta(str);
    } else if (str == "MIKA") {
        tulosta(str);
    } else if (str == "SANTERI") {
        tulosta(str)
    } else {
        const newDiv = document.createElement("p");
        const newContent = document.createTextNode("Huijasit...");
        newDiv.appendChild(newContent);
        const currentDiv = document.getElementById("txtHint");
        currentDiv.appendChild(newDiv);
    }
}

function tulosta(nimi) {
    console.log(nimi);
    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(nimi);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("txtHint");
    currentDiv.appendChild(newDiv);
}