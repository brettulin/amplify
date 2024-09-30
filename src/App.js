import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // Importing CSS for styles
import ScrollAnimation from './scrollAnimation';  // Scroll animation function for sticky header
import ShirtImage from './shirt.png';  // Updated import path
import ProductDetail from './ProductDetail';  // Importing ProductDetail component

function App() {
  useEffect(() => {
    ScrollAnimation();  // Initialize scroll animation when the component mounts
  }, []);  // Add closing brace and dependency array
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header id="header">
          <div className="logo">Jesus saves.</div>
          <nav>
            <ul>
              <li><Link to="#home">Home</Link></li>
              <li><Link to="#store">Shop</Link></li>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero" id="home">
          <img src={ShirtImage} alt="Flagship Shirt" className="hero-image" />
        </section>

        {/* Store Section */}
        <section id="store" className="store">
          <h2>Our Products</h2>
          <div className="product-grid">
            {/* Example product */}
            <div className="product">
              <Link to="/product/1">
                <img src={ShirtImage} alt="Product 1" />
                <h3>Product Name 1</h3>
                <p>$12.99</p>
              </Link>
            </div>
            {/* Additional products */}
            <div className="product">
              <Link to="/product/2">
                <img src={ShirtImage} alt="Product 2" />
                <h3>Product Name 2</h3>
                <p>$12.99</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/product/3">
                <img src={ShirtImage} alt="Product 3" />
                <h3>Product Name 3</h3>
                <p>$12.99</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/product/4">
                <img src={ShirtImage} alt="Product 4" />
                <h3>Product Name 4</h3>
                <p>$12.99</p>
              </Link>
            </div>
            {/* Add more products similarly */}
          </div>
        </section>

        {/* Routes */}
        <Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
