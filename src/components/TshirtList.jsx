import React, { useContext } from 'react';
import { TshirtContext } from '../store/TshirtContext';

const TshirtList = () => {
  const { state, addToCart } = useContext(TshirtContext);

  return (
    <div className="mt-4">
      <h3>Available T-Shirts</h3>
      {state.tshirts.map(tshirt => (
        <div key={tshirt._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{tshirt.name}</h5>
            <p className="card-text">{tshirt.description}</p>
            <p className="card-text">Price: ${tshirt.price}</p>
            <p className="card-text">Quantity: S - {tshirt.quantity.s}, M - {tshirt.quantity.m}, L - {tshirt.quantity.l}</p>
            <button className="btn btn-primary me-2" disabled={tshirt.quantity.s <= 0} onClick={() => addToCart(tshirt, 's')}>Buy S</button>
            <button className="btn btn-primary me-2" disabled={tshirt.quantity.m <= 0} onClick={() => addToCart(tshirt, 'm')}>Buy M</button>
            <button className="btn btn-primary" disabled={tshirt.quantity.l <= 0} onClick={() => addToCart(tshirt, 'l')}>Buy L</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TshirtList;
