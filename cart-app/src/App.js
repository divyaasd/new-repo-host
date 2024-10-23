import React from 'react';
import { CartProvider } from './context/CartContext'; // Import the CartContext
import ProductList from './components/ProductList';  // Import the ProductList
import Cart from './components/Cart';  // Import the Cart
import './style.css'; // Import your styles
import DarkMode from './DarkMode/DarkMode';

function App() {
  return (
  
    <CartProvider>
      <div className="container">

        <DarkMode/>
        <h1>Shopping Cart Example</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
