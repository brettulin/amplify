import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';  // Importing CSS for styles
import ScrollAnimation from './scrollAnimation';  // Scroll animation function for sticky header
import ShirtImage from './shirt.png';  // Updated import path
import ProductDetail from './components/ProductDetail';  // Corrected import path
import Store from './components/Store';  // Importing Store component

function App() {
  useEffect(() => {
    ScrollAnimation();  // Initialize scroll animation when the component mounts
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header id="header">
          <div className="logo">Jesus saves.</div>
          <nav>
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
          {/* Render Home component at root */}
          <Route path="/" element={<Home />} />

          {/* Render Store component on /store route */}
          <Route path="/store" element={<Store />} />

          {/* Render ProductDetail component dynamically on /product/:productId route */}
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="hero" id="home">
      <h1>Welcome to Jesus Saves Clothing</h1>
      <p>Check out our collection by visiting the <Link to="/store">Shop</Link></p>
    </section>
  );
}

export default App;
