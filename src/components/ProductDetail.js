// src/components/ProductDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';

// Sample products data (ideally, fetch from a backend or a global state)
const products = [
  { id: 1, name: 'Faith T-Shirt', price: '$25.00', description: 'A comfortable t-shirt with inspiring faith messages.', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 2, name: 'Blessed Hoodie', price: '$45.00', description: 'Stay warm and blessed with our premium hoodie.', image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 3, name: 'Grace Cap', price: '$15.00', description: 'A stylish cap that represents grace.', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  { id: 4, name: 'Salvation Jacket', price: '$85.00', description: 'A jacket that symbolizes salvation.', image: 'https://images.unsplash.com/photo-1523381212-0d5a5d15316c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgwNzYxNTh8&ixlib=rb-4.0.3&q=85' },
  // Add more products as needed
];

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div style={{ padding: '80px 20px', textAlign: 'center' }}>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      className="product-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <div className="product-options">
          <h3>Available Colors</h3>
          <ul>
            <li>Red</li>
            <li>Blue</li>
            <li>Green</li>
          </ul>
          <h3>Available Sizes</h3>
          <ul>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
          </ul>
        </div>
        <button className="shop-now" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductDetail;
