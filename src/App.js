import React, { useEffect } from 'react';
import './App.css';  // Importing CSS for styles
import ScrollAnimation from './scrollAnimation';  // Scroll animation function for sticky header
import ShirtImage from '../public/shirt.png';  // Use your image for the shirt

function App() {
  useEffect(() => {
    ScrollAnimation();  // Initialize scroll animation when the component mounts
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header id="header">
        <div className="logo">Your Brand</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#store">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
            <img src={ShirtImage} alt="Product 1" />
            <h3>Product Name</h3>
            <p>$29.99</p>
          </div>
          {/* Add more products similarly */}
        </div>
      </section>
    </div>
  );
}

export default App;
