import React from "react";

const Cart = (props) => {
  const { items, cart, deleteCartItem } = props;

  const totalPrice = () => {
    let total = 0;
    cart.forEach(item => total += item.price * item.qty);
    return Math.round(total * 100) / 100;
  }

  const EachItem = () => {
    return (
      cart.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.qty}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>$ {item.price} CAD</td>
            <td><button onClick={() => deleteCartItem(item.id, item.qty)}>Delete</button></td>
          </tr>
        );
      })
    );
  }

  return (
    <>
      <div className="container">
        <h1>Cart</h1>
        <table id="cart-items">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <EachItem />
          </tbody>
          <tfoot>
            <tr>
              <td> Total Items: {items}</td>
              <td colSpan="2"></td>
              <td colSpan="2">
                Total: $ {totalPrice()} CAD
              </td>
            </tr>
          </tfoot>
        </table>

      </div>
    </>
  );
};

export default Cart;