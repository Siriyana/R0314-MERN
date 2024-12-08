import { useState } from "react";
import axios from "axios";

const API_LINK = "http://localhost:3000";
const UPDATE_CAT = "/api/update/";

export default function UpdateCat() {
    const [catId, setCatId] = useState("");
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [personality, setPersonality] = useState("");
    const [favoriteActivity, setFavoriteActivity] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [otherInfo, setOtherInfo] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedCat = {
            name,
            color,
            age,
            location,
            personality,
            favoriteActivity,
            pictureUrl,
            otherInfo,
        };

        axios
            .put(`${API_LINK}${UPDATE_CAT}${catId}`, updatedCat)
            .then((response) => {
                alert("Cat updated successfully!");
                setCatId("");
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
                console.error("Error updating cat:", error);
            });
    };

    return (
        <form onSubmit={handleUpdate}>
            <h2>Update Cat</h2>
            <input
                type="text"
                placeholder="Enter Cat ID"
                value={catId}
                onChange={(e) => setCatId(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                placeholder="Other Information (optional)"
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
            />
            <button type="submit">Update Cat</button>
        </form>
    );
}
