import React, { useState } from "react";
import "./index.css";
import CatSearch from "./Components/CatSearch";
import CatAdd from "./Components/CatAdd";
import CatUpdate from "./Components/CatUpdate";
import CatDelete from "./Components/CatDelete";
import CatSearchID from "./Components/CatSearchID";
import GetAllCats from "./Components/GetAllCats";

function App() {
    const [selectedAction, setSelectedAction] = useState("getAll");

    // Valittavissa olevat toiminnallisuudet
    const renderSelectedComponent = () => {
        switch (selectedAction) {
            case "getAll":
                return <GetAllCats />;
            case "search":
                return <CatSearch />;
            case "searchById":
                return <CatSearchID />;
            case "add":
                return <CatAdd />;
            case "update":
                return <CatUpdate />;
            case "delete":
                return <CatDelete />;
            default:
                return <GetAllCats />;
        }
    };

    return (
        <>
          
            <label htmlFor="action-select">Choose an action:</label>
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
                {renderSelectedComponent()}
            </div>
        </>
    );
}

export default App;
