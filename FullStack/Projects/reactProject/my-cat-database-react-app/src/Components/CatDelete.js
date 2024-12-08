import { useState } from "react";
import axios from "axios";

const API_LINK = "http://localhost:3000";
const DELETE_CAT = "/api/delete"; 

export default function DeleteCat() {
    const [catId, setCatId] = useState("");

    const handleDelete = (e) => {
        e.preventDefault();

        if (!catId) {
            alert("Please enter a valid cat ID!");
            return;
        }

        axios
            .delete(`${API_LINK}${DELETE_CAT}/${catId}`)
            .then((response) => {
                alert("Cat deleted successfully!");
                setCatId("");
            })
            .catch((error) => {
                console.error("Error deleting cat:", error);
            });
    };

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
