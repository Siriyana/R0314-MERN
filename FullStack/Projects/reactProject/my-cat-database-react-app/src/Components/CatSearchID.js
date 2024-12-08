import { useState, useEffect } from "react";
import axios from "axios";
import CatView from "./CatView";

//link to backend and API
const API_LINK = "https://r0314-mern-catdatabase.onrender.com";
const GET_ID = "/api/";

//function to search cat from database by ID
export default function CatSearchID() {
    const [catId, setId] = useState("");
    const [cat, setCat] = useState(null);

    console.log("Request URL:", `${API_LINK}${GET_ID}${catId}`);

    //send GET request to get cat from the database by id
    useEffect(() => {
        console.log("ID:", catId);
        if (catId) {
            axios
                .get(`${API_LINK}${GET_ID}${catId}`)
                .then((response) => setCat(response.data))
                .catch((error) => console.error("Error fetching cat:", error));
        } else {
            setCat(null); 
        }
    }, [catId]);


    //display the search input and results to html-page
    return (
        <div>
            <h2>Find a Cat by ID</h2>
            <input
                type="text"
                placeholder="Enter cat ID"
                value={catId}
                onChange={(e) => setId(e.target.value)}
            />
            {cat ? (
                <CatView cat={cat} />
            ) : (
                catId && <p>No cat found with this ID.</p>
            )}
        </div>
    );
}
