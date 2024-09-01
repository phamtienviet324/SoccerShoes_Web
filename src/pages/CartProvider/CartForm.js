import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartForm.css'; // Import CSS

const CardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expMonth, setExpMonth] = useState('mm');
    const [expYear, setExpYear] = useState('yy');
    const [cvv, setCvv] = useState('');
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [errors, setErrors] = useState({}); // State to handle errors
    const navigate = useNavigate();

    const handleCvvFocus = () => setIsCardFlipped(true);
    const handleCvvBlur = () => setIsCardFlipped(false);

    const validateForm = () => {
        const newErrors = {};
        if (cardNumber.length !== 16) newErrors.cardNumber = 'Card number must be 16 digits.';
        if (!cardHolder) newErrors.cardHolder = 'Card holder name is required.';
        if (expMonth === 'mm') newErrors.expMonth = 'Please select an expiration month.';
        if (expYear === 'yy') newErrors.expYear = 'Please select an expiration year.';
        if (cvv.length < 3) newErrors.cvv = 'CVV must be at least 3 digits.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if there are no errors
    };

    const handlePayment = () => {
        if (validateForm()) {
            alert('Payment successful!');
            navigate('/');
            // Reset form fields if needed
        }
    };

    return (
        <div className="container">
            <div className="card-container">
                <div className={`card front ${isCardFlipped ? 'flipped' : ''}`}>
                    <div className="image">
                        <img src={require('./images/chip.png')} alt="chip" />
                        <img src={require('./images/visa.png')} alt="visa" />
                    </div>
                    <div className="card-number-box">{cardNumber || '################'}</div>
                    <div className="flexbox">
                        <div className="box">
                            <span>card holder</span>
                            <div className="card-holder-name">{cardHolder || 'full name'}</div>
                        </div>
                        <div className="box">
                            <span>expires</span>
                            <div className="expiration">
                                <span className="exp-month">{expMonth}</span>
                                <span> / </span>
                                <span className="exp-year">{expYear}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`card back ${isCardFlipped ? 'flipped' : ''}`}>
                    <div className="stripe"></div>
                    <div className="box">
                        <span>cvv</span>
                        <div className="cvv-box">{cvv}</div>
                        <img src={require('./images/visa.png')} alt="visa" />
                    </div>
                </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className="inputBox">
                    <span>card number</span>
                    <input
                        type="text"
                        maxLength="16"
                        className="card-number-input"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    {errors.cardNumber && <small className="error">{errors.cardNumber}</small>}
                </div>
                <div className="inputBox">
                    <span>card holder</span>
                    <input
                        type="text"
                        className="card-holder-input"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                    />
                    {errors.cardHolder && <small className="error">{errors.cardHolder}</small>}
                </div>
                <div className="flexbox">
                    <div className="inputBox">
                        <span>expiration mm</span>
                        <select
                            className="month-input"
                            value={expMonth}
                            onChange={(e) => setExpMonth(e.target.value)}
                        >
                            <option value="mm" disabled>
                                month
                            </option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                    {String(i + 1).padStart(2, '0')}
                                </option>
                            ))}
                        </select>
                        {errors.expMonth && <small className="error">{errors.expMonth}</small>}
                    </div>
                    <div className="inputBox">
                        <span>expiration yy</span>
                        <select
                            className="year-input"
                            value={expYear}
                            onChange={(e) => setExpYear(e.target.value)}
                        >
                            <option value="yy" disabled>
                                year
                            </option>
                            {Array.from({ length: 10 }, (_, i) => (
                                <option key={i + 2021} value={i + 2021}>
                                    {i + 2021}
                                </option>
                            ))}
                        </select>
                        {errors.expYear && <small className="error">{errors.expYear}</small>}
                    </div>
                    <div className="inputBox">
                        <span>cvv</span>
                        <input
                            type="text"
                            maxLength="4"
                            className="cvv-input"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            onFocus={handleCvvFocus}
                            onBlur={handleCvvBlur}
                        />
                        {errors.cvv && <small className="error">{errors.cvv}</small>}
                    </div>
                </div>
                <input type="submit" onClick={handlePayment} value="submit" className="submit-btn" />
            </form>
        </div>
    );
};

export default CardForm;
