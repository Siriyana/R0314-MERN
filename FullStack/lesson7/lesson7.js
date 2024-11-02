const { response, request } = require("express");
var fs = require("fs");
require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Asetetaan view engine EJS:ksi
app.set('view engine', 'ejs');

// Määritetään kansio, jossa EJS-templaatit sijaitsevat
app.set('views', __dirname + '/views');

// Otetaan body-parser käyttöön
app.use(bodyParser.urlencoded({ extended: true }));

// Julkinen kansio, jossa on staattisia tiedostoja kuten CSS ja kuvat
app.use(express.static(__dirname + "/public"));

app.post("/signin", function (request, response) {
    var email = request.body.email;
    var pass = request.body.pass;

    console.log("Email: " + email);
    console.log("Password: " + pass);

    if (email == process.env.EMAIL && pass == process.env.PASSWORD) {
        response.redirect("/studentpages");
    } else {
        response.status(200).send("Form submitted with email:" + email);
    }
});

app.get("/blog", function (request, response) {
    var data = {
        heading: "Shopping list",
        listItems: ["Milk", "Bread", "Butter", "Cheese"]
    };
    response.render("pages/blog", data); // Huomaa polku 'pages/blog'
});

app.get("/studentpages", function (request, response) {
    response.status(200).sendFile(__dirname + "/secretpage.html"); // Lisää "/" polun alkuun
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
