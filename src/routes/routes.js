import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Cart from '../components/Cart';
import Shop from '../components/Shop';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;