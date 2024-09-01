import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import  Cart  from './pages/CartProvider/Cart';
/// import Payment from './pages/Payment';
import  CartProvider  from './pages/CartProvider/CartContext';
import CardForm from './pages/CartProvider/CartForm';

function App() {
  return (
    <CartProvider> {/* Wrap all components with CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartform" element={<CardForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
