import React from 'react';
import { Link } from 'react-router-dom';
import ShirtImage from '../shirt.png';  // Corrected import path

const products = [
  { id: 1, name: 'Product Name 1', price: '$12.99', image: ShirtImage },
  { id: 2, name: 'Product Name 2', price: '$12.99', image: ShirtImage },
  { id: 3, name: 'Product Name 3', price: '$12.99', image: ShirtImage },
  { id: 4, name: 'Product Name 4', price: '$12.99', image: ShirtImage },
];

function Store() {
  return (
    <section id="store" className="store">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Store;
