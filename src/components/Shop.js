import React from "react";

const Shop = (props) => {
    const { addToCart } = props

    return (
        <>
            <div>
                <h1>Welcome to Shop</h1>
                <button onClick={() => addToCart()}>Add item</button>
            </div>
        </>
    );
};

export default Shop;