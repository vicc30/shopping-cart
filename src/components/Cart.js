import React from "react";

const Cart = (props) => {
  const { items } = props
  return (
    <div>
      <h1>Cart</h1>
      <p>Number of items are {items}</p>
    </div>
  );
};

export default Cart;