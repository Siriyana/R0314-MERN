const { response, request } = require("express");
var fs = require("fs");
require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var session = require("express-session");

// Asetetaan view engine EJS:ksi
app.set('view engine', 'ejs');

// Määritetään kansio, jossa EJS-templaatit sijaitsevat
app.set('views', __dirname + '/views');

// Otetaan body-parser käyttöön
app.use(bodyParser.urlencoded({ extended: true }));

// Julkinen kansio, jossa on staattisia tiedostoja kuten CSS ja kuvat
app.use(express.static(__dirname + "/public"));

app.use(session({
    name: "session_demo",
    resave: true,
    saveUninitialized: true,
    secret: "secretly",
    SameSite: "Lax",
    //How long the session will be vali in milliseconds
    cookie: {maxAge: 60 * 1000 * 30 } //30 minutes
}));

app.post("/signin", function (request, response) {
    var email = request.body.email;
    var pass = request.body.pass;

    console.log("Email: " + email);
    console.log("Password: " + pass);

    // Define connection parameters
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "logindemo"
    });

    // Create query
    var query = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + pass + "'";
    console.log(query);

    //connect to database
    con.connect(function(err) {
        if(err) {
            console.log("Error");
            return;
        }
        con.query(query, function(err, result) {
            if(err) {
                console.log("Error in query");
                return
            } else {
                console.log("Roes from query: " + result.length);
                if(result.length == )
            }


            /////////////////KESKEN!!!!!!!!!!!!!!!


        })
    })

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
