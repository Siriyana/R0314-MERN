import React, { useState, useEffect } from "react";
import axios from "axios";

//importing components to displaying list of cats and viewing a cat-object
import CatList from "./CatList";
import CatView from "./CatView";

//Links to backend api
const API_LINK = "https://r0314-mern-catdatabase.onrender.com"; 
const GET_ALL_CATS = "/api/getall"; 

//function to fetch all cats from databasr
export default function GetAllCat() {
    const [cats, seetCats ] = useState([]);
    const [error, setError ] = useState(null);
    const [selectedCat, setSelectedCat ] = useState(null);

    useEffect(() => {
        //sending GET-request to database, response if successful and message if error
        axios
            .get(`${API_LINK}${GET_ALL_CATS}`)
            .then((response) => seetCats(response.data))
            .catch((error) => setError("Error fetching cats"));
    }, []);

    //function to select cat to view it
    const handleShowCat = (catName) => {
        const cat = cats.find((c) => c.name === catName);
        setSelectedCat(cat || null);
    };

    //return and display on the html-page (error message, list of cats or viewing a cat)
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