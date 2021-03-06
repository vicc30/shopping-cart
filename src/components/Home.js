import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    const beverages = props.beverages;
    
    const addToCart = (id) => {
        console.log(`Added to cart ${id}`);
    }

    const list = beverages.map((beverage) => {
        console.log("this is " + beverage.id);
        return (
            <>
                <p>{beverage.name}</p>
                <img width="10%" src={beverage.image} alt={beverage.name} />
                <button onClick={() => addToCart(beverage.id)}>Add to cart</button>
            </>
        );
    });

    return (
        <>
            <div>
                <h1>Welcome to Home</h1>
                <p>This is the main page</p>
                <p><Link to="/shop">Shop Now</Link></p>
                {list}
            </div>
        </>
    );
};

export default Home;