// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  const handleCheckout = () => {
    // Placeholder for Stripe integration
    alert('Proceeding to checkout...');
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart is Empty</h2>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <motion.div
            className="cart-item"
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </motion.div>
        ))}
      </div>
      <h3>Total: ${totalPrice}</h3>
      <button className="checkout-button" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </section>
  );
}

export default Cart;
