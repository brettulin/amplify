import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // Importing CSS for styles
import ScrollAnimation from './scrollAnimation';  // Scroll animation for sticky header
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';

function App() {
  useEffect(() => {
    ScrollAnimation();  // Initialize scroll animation when the component mounts
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header id="header" className="navbar">
          <div className="logo">
            <h1>Jesus Saves Clothing</h1>
          </div>
          <nav className="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/store">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h2>Wear the Word. Share the Gospel.</h2>
        <p>Clothing that Speaks His Name.</p>
        <button className="shop-now">
          <Link to="/store" style={{ textDecoration: 'none', color: '#000' }}>Shop Now</Link>
        </button>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Placeholder products - you can replace with actual products */}
          <div className="product">
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$100</p>
          </div>
          <div className="product">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$120</p>
          </div>
          {/* Add more product blocks here */}
        </div>
      </section>
    </>
  );
}

export default App;
