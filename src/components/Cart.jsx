import React, { useContext } from 'react';
import { TshirtContext } from '../store/TshirtContext';

const Cart = () => {
  const { state, removeFromCart } = useContext(TshirtContext);

  const handlePurchase = (index) => {
    alert("Purchase successfully");
    removeFromCart(index);
  };

  return (
    <div className="mt-4">
      <h3>Cart</h3>
      {state.cart.map((item, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.name} ({item.size})</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Price: ${item.price}</p>
            <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
            <button className="btn btn-success ms-2" onClick={() => handlePurchase(index)}>Purchase</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
