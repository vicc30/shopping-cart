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

    function handleAdd() {
        setItemNumber((itemNumber + 1));
        console.log(itemNumber);
    }
    return (
        <>
            <Head />
            <Switch>
                <Route exact path="/" >
                    <Home food={food} beverages={beverages}/>
                </Route>
                <Route exact path="/cart" >
                    <Cart items={itemNumber} />
                </Route>
                <Route exact path="/shop">
                    <Shop addItem={handleAdd} />
                </Route>
            </Switch>
        </>
    );
};

export default App;