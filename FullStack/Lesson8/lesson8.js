var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

var user = process.env.MONGO_USERID;
var password = process.env.MONGO_PW;

// Correct MongoDB URI
const uri = "mongodb+srv://" + user + ":" + password + "@cluster.mongodb.net/yourDatabase?retryWrites=true&w=majority";

// Routes
app.get("/api/movies", function (req, res) {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    async function connectAndFetch() {
        try {
            await client.connect();
            const collection = client.db("yourDatabase").collection("movies"); // Replace with your database and collection names
            const movies = await collection.find({}).toArray();
            res.json(movies);
        } catch (e) {
            console.error(e);
            res.status(500).send("Error fetching movies");
        } finally {
            await client.close();
            console.log("Connection closed to MONGO");
        }
    }
    connectAndFetch();
});

app.post("/api/add", function (req, res) {
    res.send("add movie: " + req.body.title + " (" + req.body.year + ")");
});

app.put("/api/modify/:id", function (req, res) {
    res.send("modify movie: " + req.params.id);
});

app.delete("/api/remove/:id", function (req, res) {
    res.send("remove movie: " + req.params.id);
});

app.get("*", function (req, res) {
    res.send("Error No such path");
});

// Web server by express
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Example app is listening on port " + PORT);
});
