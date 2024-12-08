import React from "react";
import CatView from "./CatView";

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

/**
 * @param {{ cats: CatInfo[], showCat: (catName: string) => void }} props
 */
export default function CatList({ cats, showCat }) {

    if (cats.length === 1) return <CatView cat={cats[0]} />;

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
