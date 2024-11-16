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
    saveUninitialized: true,  // Korjattu: "saveUntilInitialized" -> "saveUninitialized"
    secret: "secretkey",
    SameSite: "Lax",
    // How long this session will be valid in milliseconds (60s * 1000ms * 30min)
    cookie: { maxAge: 60 * 1000 * 30 } // 30 minutes
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
        password: "", // Should not be empty
        database: "logindemo"
    });

    // Create query to database
    var query = "SELECT * FROM users WHERE email = ? AND password = ?";
    console.log(query);

    // Connect to database
    con.connect(function (err) {
        if (err) {
            console.log("Error connecting to database");
            response.status(500).send("Database connection error");
            return;
        }

        con.query(query, [email, pass], function (err, result) {
            if (err) {
                console.log("Error in query");
                response.status(500).send("Query error");
                return;
            }

            console.log("Rows from query: " + result.length);
            if (result.length == 1) {
                // If login is successful, store user data in session
                request.session.loggedin = true;
                request.session.email = email;
                console.log("User logged in: " + email);
                response.redirect("/studentpages");
            } else {
                response.status(401).send("Invalid credentials");
            }

            con.end(); // Always close the connection after use
        });
    });
});

app.get("/blog", function (request, response) {
    var data = {
        heading: "Shopping list",
        listItems: ["Milk", "Bread", "Butter", "Cheese"]
    };
    response.render("pages/blog", data); // Huomaa polku 'pages/blog'
});

app.get("/studentpages", function (request, response) {
    // Tarkistetaan, onko käyttäjä kirjautunut
    if (request.session.loggedin) {
        response.status(200).sendFile(__dirname + "/secretpage.html"); // Lisää "/" polun alkuun
    } else {
        response.status(401).send("Please log in first");
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
