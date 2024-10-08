// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProductCard({ product }) {
  return (
    <motion.div
      className="product"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
    </motion.div>
  );
}

export default ProductCard;
