import React from "react";

//funtionality to display cat-object information on the html-page
export default function CatView({ cat }) {
    return (
        <div>
            <h3>{cat.name}</h3>
            <p>Color: {cat.color}</p>
            <p>Age: {cat.age}</p>
            <p>Location: {cat.location}</p>
            <p>Personality: {cat.personality}</p>
            <p>Favorite Activity: {cat.favoriteActivity}</p>
            {cat.pictureUrl && <img class="catPic" src={cat.pictureUrl} alt="cat" />}
            <p>Other information: {cat.otherInfo}</p>
            <p>ID: {cat._id}</p>
        </div>
    );
}
