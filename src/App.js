// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollAnimation from './scrollAnimation';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  useEffect(() => {
    ScrollAnimation(); // Initialize scroll animation
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
