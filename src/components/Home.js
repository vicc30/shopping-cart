import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div>
                <h1>Welcome to Home</h1>
                <p>This is the main page</p>
                <p><Link to="/shop">Shop Now</Link></p>
            </div>
        </>
    );
};

export default Home;