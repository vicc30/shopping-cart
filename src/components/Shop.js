import React from "react";
import DisplayProducts from "./shared/DisplayProducts";
import FloatingIcon from './shared/FloatingIcon';

const Shop = (props) => {
    const { addToCart, productList, items } = props;

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
                <FloatingIcon items={items} />
            </div>
        </>
    );
};

export default Shop;