import React, { useState, useEffect } from "react";
import CatList from "./CatList";
import axios from "axios";

const API_LINK = "https://r0314-mern-catdatabase.onrender.com";
const ALL_CATS = "/api/getall";

export default function CatSearch() {
    const [catQuery, setCatQuery] = useState("");
    const [cats, setCats] = useState([]);

    console.log(catQuery);

    useEffect(() => {
        axios
            .get(`${API_LINK}${ALL_CATS}`)
            .then((response) => setCats(response.data))
            .catch((error) => console.error("Error fetching cats:", error));
    }, []);

    console.log(cats);

    const filteredCats = cats.filter((cat) =>
        cat.name.toLowerCase().includes(catQuery.toLowerCase())
    );

    const showCat = (catName) => {
        setCatQuery(catName);
    };

    return (
        <div>
        <h2>Find a Cat by Name</h2>
            <input
                placeholder="Enter Cat Name"
                value={catQuery}
                onChange={(e) => setCatQuery(e.target.value)}
            />
            {catQuery.length !== 0 && (
                <CatList cats={filteredCats} showCat={showCat} />
            )}
        </div>
    );
}
