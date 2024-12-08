import { useState } from "react";
import axios from "axios";

//link to backend and API
const API_LINK = "https://r0314-mern-catdatabase.onrender.com";
const DELETE_CAT = "/api/delete/"; 

//function to delete cat from database by ID
export default function DeleteCat() {
    const [catId, setCatId] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();

        //send DELETE request to database
        axios
            .delete(`${API_LINK}${DELETE_CAT}${catId}`)
            .then((response) => {
                alert("Cat deleted successfully!");
                setCatId("");
            })
            .catch((error) => {
                console.error("Error deleting cat:", error);
            });
    };

    //displays form to input id and to delete cat
    return (
        <form onSubmit={handleDelete}>
            <h2>Delete a Cat</h2>
            <input
                type="text"
                placeholder="Enter Cat ID"
                value={catId}
                onChange={(e) => setCatId(e.target.value)}
                required
            />
            <button type="submit">Delete Cat</button>
        </form>
    );
}
