import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-body">
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

            <main className="about-main">
                <section className="about">
                    <h2 className="text-3xl font-bold mb-4">Về chúng tôi</h2>
                    <p className="mb-4">
                        Chào mừng bạn đến với Việt Master Shop! Chúng tôi là những người đam mê giày đá bóng và cam kết cung cấp những sản phẩm chính hãng, chất lượng nhất đến tay khách hàng.
                    </p>
                    <p className="mb-4">
                        Việt Master Shop được thành lập với sứ mệnh mang đến cho người tiêu dùng những đôi giày đá bóng chính hãng, chất lượng cao và phù hợp với túi tiền. Chúng tôi cam kết mang đến cho khách hàng sự hài lòng tuyệt đối.
                    </p>
                    <p className="mb-4">
                        Chúng tôi làm việc với các thương hiệu hàng đầu và đảm bảo mỗi sản phẩm đều được kiểm tra kỹ lưỡng để đảm bảo chất lượng. Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn để bạn có thể tìm thấy sản phẩm phù hợp nhất.
                    </p>
                </section>
            </main>

            <footer className="about-footer">
                <p>Liên hệ: vietmastershop@example.com | Điện thoại: 0377 797 231</p>
                <p>&copy; 2018 Viet Master Shop. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
