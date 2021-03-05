import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Head from './components/Header';
import Cart from './components/Cart';
import Shop from './components/Shop';

import './App.css';
const App = () => {
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
                    <Home />
                </Route>
                <Route exact path="/cart" >
                    <Cart items={itemNumber}/>
                </Route>
                <Route exact path="/shop">
                    <Shop addItem={handleAdd} />
                </Route>
            </Switch>
        </>
    );
};

export default App;