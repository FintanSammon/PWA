import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import EcommercePage from './pages/EcommercePage';
import AnimalsPage from './pages/AnimalsPage';
import ProductDetails from './components/ProductDetails';
import CartPage from './pages/CartPage';


function App() {
  return (
    <CartProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/shop" element={<EcommercePage />} />
          <Route path="/shop/:productId" element={<ProductDetails />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/cart" element={<CartPage />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
