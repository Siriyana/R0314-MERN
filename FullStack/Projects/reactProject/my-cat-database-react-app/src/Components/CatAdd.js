import { useState } from "react";
import axios from "axios";

//link to backend and API
const API_LINK = "https://r0314-mern-catdatabase.onrender.com";
const ADD_CAT = "/api/add";

//function to add cat to database
export default function AddCat() {
    //the set properties and make sure they are empty
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [personality, setPersonality] = useState("");
    const [favoriteActivity, setFavoriteActivity] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [otherInfo, setOtherInfo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //some validation rules (same that are in the backend: name, color and location has to be at least three characters long)
        if (name.length < 3 || color.length < 3 || location.length < 3) {
            alert("Name, color, and location must each be at least 3 characters long.");
            return;
        }
    
        //validating that age is a number and positive number
        if (isNaN(age) || age < 0) {
            alert("Age must be a valid number and cannot be negative.");
            return;
        }
    
        //creating newCat object from the data
        const newCat = {
            name,
            color,
            age: Number(age),
            location,
            personality,
            favoriteActivity,
            pictureUrl,
            otherInfo,
        };
    
        console.log("Submitted cat data:", newCat);
    
        //send POST request to add cat to database
        axios
            .post(`${API_LINK}${ADD_CAT}`, newCat)
            .then((response) => {
                alert("Cat added successfully!");
                //clear the fields
                setName("");
                setColor("");
                setAge("");
                setLocation("");
                setPersonality("");
                setFavoriteActivity("");
                setPictureUrl("");
                setOtherInfo("");
            })
            .catch((error) => {
                console.error("Error adding cat:", error);
                alert(error.response?.data?.error || "Error adding cat.");
            });
    };

    //display the form and input fields on the html page
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Cat</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type="text"
                placeholder="Personality"
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
            />
            <input
                type="text"
                placeholder="Favorite Activity"
                value={favoriteActivity}
                onChange={(e) => setFavoriteActivity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Picture Url (optional)"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Other information (optional)"
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
            />
            <button type="submit">Add Cat</button>
        </form>
    );
}
