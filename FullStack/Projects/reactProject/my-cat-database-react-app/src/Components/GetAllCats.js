import React, { useState, useEffect } from "react";
import axios from "axios";
import CatList from "./CatList";
import CatView from "./CatView";

const API_LINK = "http://localhost:3000"; 
const GET_ALL_CATS = "/api/getall"; 

export default function GetAllCat() {
    const [cats, seetCats ] = useState([]);
    const [error, setError ] = useState(null);
    const [selectedCat, setSelectedCat ] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_LINK}${GET_ALL_CATS}`)
            .then((response) => seetCats(response.data))
            .catch((error) => setError("Error feteching cats"));
    }, []);

    const handleShowCat = (catName) => {
        const cat = cats.find((c) => c.name === catName);
        setSelectedCat(cat || null);
    };
    return (
        <div>
            {error && <p>{error}</p>}
            {selectedCat ? (
                <div>
                    <button onClick={() => setSelectedCat(null)}>Back to list</button>
                    <CatView cat={selectedCat} />
                    </div>
            ): (
                <CatList cats={cats} showCat={handleShowCat} />
            )}
        </div>
    );
}