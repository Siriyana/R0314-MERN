import { useState } from "react";
import axios from "axios";

const API_LINK = "http://localhost:3000";
const ADD_CAT = "/api/add";

export default function AddCat() {
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
    
        if (name.length < 3 || color.length < 3 || location.length < 3) {
            alert("Name, color, and location must each be at least 3 characters long.");
            return;
        }
    
        if (isNaN(age) || age < 0) {
            alert("Age must be a valid number and cannot be negative.");
            return;
        }
    
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
    
        axios
            .post(`${API_LINK}${ADD_CAT}`, newCat)
            .then((response) => {
                alert("Cat added successfully!");
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
