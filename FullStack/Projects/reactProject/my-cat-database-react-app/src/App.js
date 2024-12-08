import React, { useState } from "react";
import "./index.css";

//Importing different component-modules, which have different functions/actions
import CatSearch from "./Components/CatSearch";
import CatAdd from "./Components/CatAdd";
import CatUpdate from "./Components/CatUpdate";
import CatDelete from "./Components/CatDelete";
import CatSearchID from "./Components/CatSearchID";
import GetAllCats from "./Components/GetAllCats";

function App() {
    //default action is to view all cats
    const [selectedAction, setSelectedAction] = useState("getAll");

    //factions that can be chosen
    const selectComponent = () => {
        switch (selectedAction) {
            case "getAll":
                return <GetAllCats />; //View all cats in the database
            case "search":
                return <CatSearch />; //Search cats by name
            case "searchById":
                return <CatSearchID />; //Search cat by if
            case "add":
                return <CatAdd />; //Add new cat to database
            case "update":
                return <CatUpdate />; //update information by existing id
            case "delete":
                return <CatDelete />; //delete cat from the database
            default:
                return <GetAllCats />;
        }
    };

    //html-elements that are printed to index.html -page (dropdown menu)
    return (
        <>
          
            <h2>Choose an action:</h2>
            <select
                id="action-select"
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
            >
                <option value="getAll">View All Cats</option>
                <option value="search">Search Cats by Name</option>
                <option value="searchById">Search Cat by ID</option>
                <option value="add">Add a New Cat</option>
                <option value="update">Update Cat Information</option>
                <option value="delete">Delete a Cat</option>
            </select>
            <div className="action-container">
                {selectComponent()}
            </div>
        </>
    );
}

export default App;
