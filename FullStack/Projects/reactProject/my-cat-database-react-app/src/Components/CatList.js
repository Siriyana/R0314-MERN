import React from "react";
import CatView from "./CatView";

//CatInfo to defining the structure of a cat object
/**
 * @typedef {Object} CatInfo
 * @property {string} name - The name of the cat.
 * @property {string} color - The color of the cat.
 * @property {string} breed - The breed of the cat.
 * @property {number} age - The age of the cat in years.
 * @property {string} location - The location where cat lives
 * @property {string} otherInfo - Possible other information (optional)
 * @property {string} [picture] - The URL of the cat's picture (optional).
 */
//defining props, array and callback function
/**
 * @param {{ cats: CatInfo[], showCat: (catName: string) => void }} props
 */


export default function CatList({ cats, showCat }) {
    //if only one cat is found, then it is shown complete, otherwise there is a list of cats shown
    if (cats.length === 1) return <CatView cat={cats[0]} />;

    //displaying the results on the html-page
    return (
        <div>
            {cats.length > 0 && <h2>Cats</h2>}
            {cats.length === 0 ? (
                <p>No cats found!</p>
            ) : (
                cats.map((cat) => (
                    <div key={cat._id}>
                        <h4 onClick={() => showCat(cat.name)}>{cat.name}</h4>

                    </div>
                ))
            )}
        </div>
    );
}
