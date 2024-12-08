import React, { useState, useEffect } from "react";
import CatList from "./CatList";
import axios from "axios";

//backend-server and API
const API_LINK = "https://r0314-mern-catdatabase.onrender.com";
const ALL_CATS = "/api/getall";

//function to find cats from the database by name
export default function CatSearch() {
    const [catQuery, setCatQuery] = useState(""); 
    const [cats, setCats] = useState([]);

    console.log(catQuery);

    //send GET request to API, get response or error message
    useEffect(() => {
        axios
            .get(`${API_LINK}${ALL_CATS}`)
            .then((response) => setCats(response.data))
            .catch((error) => console.error("Error fetching cats:", error));
    }, []);

    console.log(cats);

    //filters cats from database based on the value of the query
    const filteredCats = cats.filter((cat) =>
        cat.name.toLowerCase().includes(catQuery.toLowerCase())
    );

    //Shows Cat, when the name is clicked
    const showCat = (catName) => {
        setCatQuery(catName);
    };

    //displays in the html page the search option and possible results
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
