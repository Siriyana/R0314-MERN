import { useState, useEffect } from "react";
import axios from "axios";
import CatView from "./CatView";

const API_LINK = "http://localhost:3000";
const GET_ID = "/api/";

export default function CatSearchID() {
    const [catId, setId] = useState("");
    const [cat, setCat] = useState(null);

    console.log("Request URL:", `${API_LINK}${GET_ID}${catId}`);

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
