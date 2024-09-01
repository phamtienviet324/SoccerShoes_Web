import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../CartProvider/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const groupedCart = cart.reduce((acc, product) => {
    const existingProduct = acc.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {groupedCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {groupedCart.map((product) => (
            <li key={product.id} className="cart-item">
              <img src={product.mainImage} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                <button className="pay-now-button" onClick={() => navigate('/cartform')}>Pay Now</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
