import React, { useContext } from 'react';
import { TshirtContext } from '../store/TshirtContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { state } = useContext(TshirtContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">T-Shirt Seller</Link>
      <Link to="/cart" className="btn btn-primary">
        Cart ({state.cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;
