import React, { useEffect } from 'react';
import './App.css';
import { scrollAnimation } from './scrollAnimation';

function App() {
  useEffect(() => {
    window.addEventListener('scroll', scrollAnimation);
    return () => window.removeEventListener('scroll', scrollAnimation);
  }, []);

  return (
    <div className="App">
      {/* Header section */}
      <header>
        <div className="logo">My Clothing Co.</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Premium Clothing. Redefined.</h1>
          <p>Discover our collection.</p>
        </div>
        <div className="scroll-animation">
          <img src="/shirt.png" alt="Shirt" id="animated-shirt" />
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="section">
        <h2>Our Collection</h2>
        <p>Explore the best fabrics, quality, and styles.</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Crafting premium quality clothing since 2024.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Have any questions? Get in touch with us.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Clothing Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
