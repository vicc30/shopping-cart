import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Head from './components/Header';
import Cart from './components/Cart';
import Shop from './components/Shop';

import { BEVERAGES } from './components/shared/beverages';
import { FOOD } from './components/shared/food';

import './App.css';

const App = () => {

    const [beverages] = useState(BEVERAGES);
    const [food] = useState(FOOD);
    const [itemNumber, setItemNumber] = useState(0);
    const [cart, setCart] = useState([]);

    const addToCart = (item, num) => {
        //check if item is already in inventory
        const isInCart = cart.map((cItem) => cItem.id).includes(item.id);

        setCart((prevCart) => {
            if (!isInCart) {
                console.log("true");
                return [...prevCart, { id: item.id, qty: num }];
            } else {
                return cart.map((prod) =>
                    (prod.id === item.id ? { ...prod, qty: prod.qty + num } : prod)
                );
            }
        });
        setItemNumber((prev) => prev + num);
        console.log(cart);
        console.log(itemNumber);
    }

    return (
        <>
            <Head />
            <Switch>
                <Route exact path="/" >
                    <Home food={food}
                        beverages={beverages}
                        addToCart={addToCart} />
                </Route>
                <Route exact path="/cart" >
                    <Cart items={itemNumber}
                        addToCart={addToCart} />
                </Route>
                <Route exact path="/shop">
                    <Shop addToCart={addToCart} />
                </Route>
            </Switch>
        </>
    );
};

export default App;