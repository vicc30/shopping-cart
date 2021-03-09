import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Head from './components/Header';
import Cart from './components/Cart';
import Shop from './components/Shop';

import { PRODUCTS } from './components/shared/productList';

import './App.css';

const App = () => {

    const [productList] = useState(PRODUCTS);
    const [itemNumber, setItemNumber] = useState(0);
    const [cart, setCart] = useState([]);

    const addToCart = (item, num) => {
        //check if item is already in inventory
        const isInCart = cart.map((cItem) => cItem.id).includes(item.id);

        setCart((prevCart) => {
            if (!isInCart) {
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

    /*
    const productWithId = ({match}) => {
        const productSelected = beverages.filter((bev)=>{

        });
        <ProductDetail product={}/>
    }
*/
    return (
        <>
            <Head />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/cart" >
                    <Cart items={itemNumber}
                        addToCart={addToCart} />
                </Route>
                <Route exact path="/shop">
                    <Shop productList={productList}
                        addToCart={addToCart} />
                </Route>
                {/*<Route path="/shop/:id" component={ProductWithId}></Route>*/}
            </Switch>
        </>
    );
};

export default App;