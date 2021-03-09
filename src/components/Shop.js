import React from "react";
import DisplayProducts from "./shared/DisplayProducts";

const Shop = (props) => {
    const { addToCart, productList } = props
    return (
        <>
            <div className="container">
                <h1>Welcome to Shop</h1>
                <div className="products">
                    <h3>Product List</h3>
                    <div className="product-list">
                        <DisplayProducts addToCart={addToCart} productList={productList} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;