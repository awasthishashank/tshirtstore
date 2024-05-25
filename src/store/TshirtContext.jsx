import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const TshirtContext = createContext();

const initialState = {
  tshirts: [],
  cart: [],
};

const tshirtReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TSHIRTS':
      return { ...state, tshirts: action.payload };
    case 'ADD_TSHIRT':
      return { ...state, tshirts: [...state.tshirts, action.payload] };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'UPDATE_TSHIRT_QUANTITY':
      return {
        ...state,
        tshirts: state.tshirts.map(tshirt =>
          tshirt.id === action.payload.id ? action.payload : tshirt
        ),
      };
    default:
      return state;
  }
};

const TshirtProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tshirtReducer, initialState);

  useEffect(() => {
    axios.get('https://crudcrud.com/api/8642d558c68142199e7b696aa2eaf780/tshirts')
      .then(response => {
        dispatch({ type: 'SET_TSHIRTS', payload: response.data });
      })
      .catch(error => console.error(error));
  }, []);

  const addTshirt = (tshirt) => {
    axios.post('https://crudcrud.com/api/8642d558c68142199e7b696aa2eaf780/tshirts', tshirt)
      .then(response => {
        dispatch({ type: 'ADD_TSHIRT', payload: response.data });
      })
      .catch(error => console.error(error));
  };

  const addToCart = (tshirt, size) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...tshirt, size } });
    const updatedTshirt = {
      ...tshirt,
      quantity: {
        ...tshirt.quantity,
        [size]: tshirt.quantity[size] - 1
      }
    };
    axios.put(`https://crudcrud.com/api/8642d558c68142199e7b696aa2eaf780/tshirts/${tshirt._id}`, updatedTshirt)
      .then(response => {
        dispatch({ type: 'UPDATE_TSHIRT_QUANTITY', payload: response.data });
      })
      .catch(error => console.error(error));
  };

  return (
    <TshirtContext.Provider value={{ state, addTshirt, addToCart }}>
      {children}
    </TshirtContext.Provider>
  );
};

export { TshirtContext, TshirtProvider };
