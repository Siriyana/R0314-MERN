//RESTAPI-ROUTES FOR CAT-DATABASE IN MONGODB

//DEFINING VARIABLES

//console.log('Current directory:', __dirname); File-path checking, because there were issues
require('dotenv').config();  //Loading environment variables from .env

const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'  // Frontpage REACT URL
}));


// CREATING A CONNECTION TO MONGODB ATLAS AND CREATING SCHEMA

//Environment variables that are not supposed to be seen publicly
var user = process.env.MONGO_USERID;
var passwd = process.env.MONGO_PW;
//Creating mongoDB uri with the environment variables
const uri = "mongodb+srv://" + user + ":" + passwd + "@veeraproject2.m3hql.mongodb.net/VeeraCatHouse?retryWrites=true&w=majority&appName=VeeraProject2";

//Connection to MongoDB Atlas
mongoose.connect(uri)
    .then(() => console.log("Mongoose connection established"))
    .catch((error) => console.log("Connection error: ", error));

// Mongoose schema and model for 'Cat'-objects. Also validation rules
const catSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    color: { type: String, required: true, minlength: 3 },
    location: { type: String, minlength: 3 },
    age: { type: Number, required: true, min: 0 },
    pictureUrl: { type: String },
    personality: { type: String, required: true },
    favoriteActivity: { type: String, required: true },
    otherInfo: { type: String },
});

//Defining a custom method to greet. Not necessary, but practice from lesson
catSchema.methods.sayHi = function () {
    console.log(`Hello! My name is ${this.name}! I love ${this.favoriteActivity}`);
};

const Cat = mongoose.model("Cat", catSchema);



//ROUTES

//Route to homepage
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to fetch all cats 
app.get("/api/getall", async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.json(cats);
    } catch (e) {
        console.error(e);
        res.status(500).send("Error fetching cats");
    }
});

//Route to fetch one cat by id
app.get("/api/:id", async (req, res) => {
    try {
        const catId = await Cat.findById(req.params.id);
        if (!catId) {
            return res.status(404).send("Cat not found");
        }
        res.json(catId);  
    } catch (e) {
        console.error(e);
        res.status(500).send("Error fetching cats");
    }
});

//Route to fetch one cat by name
app.get("/api/catname/:name", async (req, res) => {
    try {
        const catName = await Cat.findOne({name: new RegExp(req.params.name)});
        if (!catName) {
            return res.status(404).send("Cat not found");
        }
        res.json(catName);
    } catch (e) {
        console.error(e);
        res.status(500).send("Error fetching cats");
    }
});

//route for adding a new cat
app.post("/api/add", async (req, res) => {
    const newCat = new Cat({
        name: req.body.name,
        color: req.body.color,
        location: req.body.location,
        age: req.body.age,
        pictureUrl: req.body.pictureUrl,
        personality: req.body.personality,
        favoriteActivity: req.body.favoriteActivity,
        otherInfo: req.body.otherInfo,
    });
    try {
        await newCat.save();
        res.send(`Added cat: ${newCat.name}`);
    } catch (error) {
        res.status(400).send("Error adding cat: " + error.message);
    }
});


//route to update/modify a cat by ID
app.put("/api/update/:id", async (req, res) => {
    try {
        const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send("Modified cat: " + updatedCat.name);
    } catch (error) {
        res.status(400).send("Error modifying cat: " + error.message);
    }
});

//route to remove a cat by ID
app.delete("/api/delete/:id", async (req, res) => {
    try {
        await Cat.findByIdAndDelete(req.params.id);
        res.send("Removed cat with ID: " + req.params.id);
    } catch (error) {
        res.status(400).send("Error removing cat: " + error.message);
    }
});

// route for undefined paths
app.get("*", (req, res) => {
    res.send("Error: No such path");
});

// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("App is listening on port " + PORT);
});
