// Payment.js
import React, { useContext, useState } from 'react';
import { CartContext } from './CartProvider/CartContext'; // Import CartContext
import '../styles/Payment.css'; // Import CSS file for styling

const Payment = () => {
    const { cart } = useContext(CartContext); // Access cart items from context
    const [billingDetails, setBillingDetails] = useState({
        name: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    // Calculate total amount
    const totalAmount = cart.reduce((acc, product) => {
        const productQuantity = cart.filter(item => item.id === product.id).length;
        return acc + product.price * productQuantity;
    }, 0);

    // Handle form input change
    const handleChange = (e) => {
        setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
    };

    // Handle payment submission
    const handlePayment = () => {
        // Process payment logic here
        alert('Payment successful!');
    };

    return (
        <div className="payment-container">
            <h1>Payment Page</h1>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <form className="billing-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={billingDetails.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={billingDetails.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={billingDetails.address}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={billingDetails.cardNumber}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="expiryDate"
                    placeholder="Expiry Date (MM/YY)"
                    value={billingDetails.expiryDate}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={billingDetails.cvv}
                    onChange={handleChange}
                />
                <button type="button" onClick={handlePayment} className="confirm-payment-button">
                    Confirm Payment
                </button>
            </form>
        </div>
    );
};

export default Payment;
