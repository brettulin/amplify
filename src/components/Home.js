// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const featuredProducts = [
  { id: 1, name: 'Faith T-Shirt', price: '$25.00', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 2, name: 'Blessed Hoodie', price: '$45.00', image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  // Add more products as needed
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Wear the Word. Share the Gospel.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Clothing that Speaks His Name.
          </motion.p>
          <motion.button
            className="shop-now"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link to="/store" style={{ textDecoration: 'none', color: '#333' }}>Shop Now</Link>
          </motion.button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
