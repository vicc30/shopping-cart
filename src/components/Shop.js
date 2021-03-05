import React from "react";

const Shop = (props) => {
    const { addItem } = props

    return (
        <>
            <div>
                <h1>Welcome to Shop</h1>
                <button onClick={addItem}>Add item</button>
            </div>
        </>
    );
};

export default Shop;