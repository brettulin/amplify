// src/components/Header.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="navbar">
      <div className="logo">
        <h1>Jesus Saves</h1>
      </div>
      <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/store" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart />
              {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
