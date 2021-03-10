import React, { useState } from "react";

const ProductDetail = (props) => {
    const { product, addToCart } = props;
    const [counter, setCounter] = useState(1);
    const handleAdd = () => {
        setCounter((prev) => {
            return prev < 100 ? prev + 1 : prev
        });
    }
    const handleRest = () => {
        setCounter((prev) => {
            return prev > 1 ? prev - 1 : prev;
        })
    }
    return (
        <div className="container detail">
            <h1>{product[0].name}</h1>
            <h2>Product Details</h2>
            <img src={product[0].image} alt={product[0].name}></img>
            <div>
                <button className="move" onClick={handleRest}> - </button>
                {counter}
                <button className="move" onClick={handleAdd}> + </button>
            </div>
            <button className="btn" onClick={() => { addToCart(product[0], counter) }}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;