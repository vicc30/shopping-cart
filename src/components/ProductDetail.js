import React, { useState } from "react";

const ProductDetail = (props) => {
    const { product, addToCart } = props;
    const [counter, setCounter] = useState(1);
    const handleAdd = () => {
        setCounter((prev) => {
            return prev<100 ? prev + 1 : prev
        });
    }
    const handleRest = () => {
        setCounter((prev) => {
            return prev > 1 ? prev - 1 : prev;
        })
    }
    return (
        <div>
            <h1>Product Details {product[0].name}</h1>
            <img src={product[0].image} alt={product[0].name}></img>
            <div>
                <button onClick={handleRest}> - </button>
                {counter}
                <button onClick={handleAdd}> + </button>
            </div>
            <buton onClick={()=>{addToCart(product,counter)}}>Add to Cart</buton>
        </div>
    );
}

export default ProductDetail;