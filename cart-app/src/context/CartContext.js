// src/context/CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if item already exists in the cart
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Update quantity of the existing item
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item to the cart
      return [...state, { ...action.payload, quantity: 1 }];

    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
