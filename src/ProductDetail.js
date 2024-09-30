import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Importing CSS for styles
import ShirtImage from './shirt.png';  // Updated import path

const products = [
    { id: 1, name: 'Product Name 1', price: '$12.99', image: ShirtImage },
    { id: 2, name: 'Product Name 2', price: '$12.99', image: ShirtImage },
    { id: 3, name: 'Product Name 3', price: '$12.99', image: ShirtImage },
    { id: 4, name: 'Product Name 4', price: '$12.99', image: ShirtImage },
];

function ProductDetail() {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
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
        </div>
    );
}

export default ProductDetail;