// src/components/Store.js
import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

// Sample products data
const products = [
  { id: 1, name: 'Faith T-Shirt', price: '$25.00', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 2, name: 'Blessed Hoodie', price: '$45.00', image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 3, name: 'Grace Cap', price: '$15.00', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 4, name: 'Salvation Jacket', price: '$85.00', image: 'https://images.unsplash.com/photo-1523381212-0d5a5d15316c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  // Add more products as needed
];

function Store() {
  return (
    <section id="store" className="store">
      <h2>Our Products</h2>
      <motion.div
        className="product-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </section>
  );
}

export default Store;
