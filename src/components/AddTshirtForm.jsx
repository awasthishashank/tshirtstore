import React, { useState, useContext } from 'react';
import { TshirtContext } from '../store/TshirtContext';

const AddTshirtForm = () => {
  const { addTshirt } = useContext(TshirtContext);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: { s: 0, m: 0, l: 0 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 's' || name === 'm' || name === 'l') {
      setFormData({ ...formData, quantity: { ...formData.quantity, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTshirt(formData);
    setFormData({ name: '', description: '', price: '', quantity: { s: 0, m: 0, l: 0 } });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Quantity (S)</label>
        <input type="number" name="s" value={formData.quantity.s} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Quantity (M)</label>
        <input type="number" name="m" value={formData.quantity.m} onChange={handleChange} className="form-control" />
      </div>
      <div className="form-group">
        <label>Quantity (L)</label>
        <input type="number" name="l" value={formData.quantity.l} onChange={handleChange} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add T-Shirt</button>
    </form>
  );
};

export default AddTshirtForm;
