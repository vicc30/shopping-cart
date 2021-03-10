import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <div className="container home">
                <h1 className="title">Welcome to Home</h1>
                <p>Welcome to the store! </p>
                <p>Please enter the shop to view the products!</p>
                <Link className="shop-btn" to="/shop">Shop Now</Link>
            </div>
        </>
    );
};

export default Home;