const {response, request} = require("express");
var fs = require("fs");
require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//Lets take body-parser in use
app.use(bodyParser.urlencoded({extended: true}));

//Lets take the material from public folder
app.use(express.static(__dirname + "/public"));

app.post("/signin", function(request, response) {
    var email = request.body.email;
    var pass = request.body.pass;

    console.log("Email: " + email);
    console.log("Password: " + pass);

    if(email == process.env.EMAIL && pass == process.env.PASSWORD) {
        response.redirect("/studentpages");
    } else {
        response.status(200).send("Form submitted with email:" + email);
    }
});

app.get("/studentpages", function(request, response) {
    response.status(200).sendFile(__dirname + "secretpage.html");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});