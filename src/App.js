import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Head from './components/Header';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';

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
                return [...prevCart, { id: item.id, name: item.name, qty: num, image: item.image, price: item.price}];
            } else {
                return cart.map((prod) =>
                    (prod.id === item.id ? { ...prod, qty: prod.qty + num } : prod)
                );
            }
        });
        setItemNumber((prev) => prev + num);
    }

    const deleteCartItem = (id, qty) => {
        setCart((prevCart) => {
            return prevCart.filter((i) => i.id !== id);
        });
        setItemNumber((prev) => prev - qty);
    }

    const productWithId = ({ match }) => {
        const selected = productList.filter((product) => match.params.id === product.id)
        return (
            <ProductDetail product={selected} addToCart={addToCart} />
        );
    }

    return (
        <>
            <Head />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/cart" >
                    <Cart items={itemNumber}
                        cart={cart}
                        deleteCartItem={deleteCartItem} />
                </Route>
                <Route exact path="/shop">
                    <Shop productList={productList}
                        addToCart={addToCart} />
                </Route>
                <Route path="/shop/:id" component={productWithId}></Route>
            </Switch>
        </>
    );
};

export default App;