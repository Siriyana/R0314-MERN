import { useState } from "react";
import axios from "axios";

//url to backend and API
const API_LINK = "https://r0314-mern-catdatabase.onrender.com";
const UPDATE_CAT = "/api/update/";

//function to update cat information in database
export default function UpdateCat() {
    //defining the properties of the cat
    const [catId, setCatId] = useState("");
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [personality, setPersonality] = useState("");
    const [favoriteActivity, setFavoriteActivity] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [otherInfo, setOtherInfo] = useState("");

    //form submission
    const handleUpdate = (e) => {
        e.preventDefault();

        //creating cat-object from the given values
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

        //sending PUT request to update the cat data
        axios
            .put(`${API_LINK}${UPDATE_CAT}${catId}`, updatedCat)
            .then((response) => {
                alert("Cat updated successfully!");
                //clear the fields
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

    //display the form and fields to update
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
