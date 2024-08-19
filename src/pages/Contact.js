import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import '../styles/Contact.css';

const Contact = () => {
    // Initialize EmailJS when the component loads
    useEffect(() => {
        emailjs.init("-mJge2SOrvMd0mrEa");  // Your Public Key is initialized here
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_84004z8',  // Your Service ID
            'template_r9994mn',  // Your Template ID
            formData
        ).then((result) => {
            console.log(result.text);
            alert('Tin nhắn đã được gửi thành công!');
        }, (error) => {
            console.log(error.text);
            alert('Đã xảy ra lỗi khi gửi tin nhắn, vui lòng thử lại.');
        });

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="contactPage">
            <header className="about-header">
                <img src={require('../assets/logoshop.png')} alt="Viet Master Shop" style={{ width: '100px', height: '85px' }} />
                <div className="Intro">
                    <h1>Việt Master Shop</h1>
                    <p>Giày Đá Bóng Chính Hãng Second Hand</p>
                </div>
                <nav className="about-nav">
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/about" className="navLink">About</Link>
                    <Link to="/contact" className="navLink">Contact</Link>
                </nav>
            </header>

            <main className="contactMain">
                <section className="contact">
                    <h2 className="contactTitle">Liên hệ với chúng tôi</h2>
                    <p className="contactDescription">Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua thông tin dưới đây hoặc điền vào mẫu liên hệ.</p>

                    <div className="contactInfo">
                        <h3 className="contactInfoTitle">Thông tin liên hệ</h3>
                        <p><strong>Email:</strong> vietmastershop@example.com</p>
                        <p><strong>Điện thoại:</strong> 0377 797 231</p>
                        <p><strong>Địa chỉ:</strong> 123 Đường Đá Bóng, Thành phố, Việt Nam</p>
                    </div>

                    <form className="contactForm" onSubmit={handleSubmit}>
                        <h3 className="contactFormTitle">Gửi tin nhắn</h3>
                        <div className="formGroup">
                            <label htmlFor="name" className="formLabel">Họ và tên:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="formInput"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email" className="formLabel">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="formInput"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="phone" className="formLabel">Số điện thoại:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="formInput"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message" className="formLabel">Tin nhắn:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="formTextarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submitButton">Gửi</button>
                    </form>
                </section>
            </main>

            <footer className="contactFooter">
                <p>Liên hệ: vietmastershop@example.com | Điện thoại: 0377 797 231</p>
                <p>&copy; 2018 Viet Master Shop. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
