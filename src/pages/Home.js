import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartProvider/CartContext'; // Import CartContext
import Modal from 'react-modal'; // Đảm bảo đã cài đặt và import Modal
import { CSSTransition } from 'react-transition-group';
import '../styles/cart-info.css'; // Đảm bảo đã cài đặt và import CSSTransition
import products from './Product';

const Home = () => {
    const { addToCart, cart } = useContext(CartContext); // Sử dụng CartContext
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0); // Đặt chỉ mục hình ảnh đầu tiên
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProduct(null);
    };

    const nextImage = () => {
        if (selectedProduct && currentImageIndex < selectedProduct.additionalImages.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (selectedProduct && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product); // Thêm sản phẩm vào giỏ hàng
    };



    return (
        <div>
            <header className="home-header">
                <img src={require('../assets/logoshop.png')} alt="Viet Master Shop Logo" className="h-12" style={{ width: '100px', height: '85px' }} />
                <nav className='about-nav'>
                    <Link to="/" className="nav-link mr-4">Home</Link>
                    <Link to="/about" className="nav-link mr-4">About</Link>
                    <Link to="/contact" className="nav-link mr-4">Contact</Link>
                </nav>
                <div className="cart-info">
                    <Link to="/cart" className="nav-link mr-4">
                        <img src={require('../assets/shopping-cart (1).png')} alt="Close" className="w-6 h-6" /> ({cart.length})
                    </Link>
                </div>
            </header>

            <section className="bg-banner text-primary-foreground py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Viet Master Shop</h1>
                <p className="text-lg mb-8">Your one-stop shop for all things sports!</p>
                <button onClick={() => { /* Handle action here */ }} className="bg-secondary text-secondary-foreground py-2 px-6 rounded-lg hover:bg-secondary/80 transition-colors">
                    Explore Now
                </button>
            </section>

            <section className="bg-background text-primary-foreground py-12 px-6">
                <div className="text-featured-products-container">
                    <h2 className="text-2xl font-bold mb-8 text-featured-products">
                        <span>F</span>
                        <span>e</span>
                        <span>a</span>
                        <span>t</span>
                        <span>u</span>
                        <span>r</span>
                        <span>e</span>
                        <span>d</span>
                        <span> </span>
                        <span>P</span>
                        <span>r</span>
                        <span>o</span>
                        <span>d</span>
                        <span>u</span>
                        <span>c</span>
                        <span>t</span>
                        <span>s</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
                            <img
                                src={product.mainImage}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                                onClick={() => openModal(product)}
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-sm mb-4">{product.description}</p>
                            <h2 className="text-lg font-semibold mb-2">Price : {product.price}$</h2>
                            <button
                                className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors"
                                onClick={() => handleAddToCart(product)} // Thêm sản phẩm vào giỏ hàng
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="about-footer">
                <p>Liên hệ: vietmastershop@example.com | Điện thoại: 0377 797 231</p>
                <p>&copy; 2018 Viet Master Shop. All Rights Reserved.</p>
            </footer>

            <CSSTransition
                in={modalIsOpen}
                timeout={300}
                classNames="modal"
                unmountOnExit
            >
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Product Images"
                    className="modal"
                    overlayClassName="overlay"
                >
                    {selectedProduct && (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                            <div className="relative">
                                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors">
                                    <img src={require('../assets/previous.png')} alt="Previous" className="w-6 h-6" />
                                </button>
                                <img
                                    src={selectedProduct.additionalImages[currentImageIndex]}
                                    alt={`Product ${currentImageIndex + 1}`}
                                    className="w-full h-96 object-cover rounded-lg"
                                />
                                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors">
                                    <img src={require('../assets/next.png')} alt="Next" className="w-6 h-6" />
                                </button>
                            </div>
                            <button onClick={closeModal} className="mt-6 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors">
                                <img src={require('../assets/closed (2).png')} alt="Close" className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </Modal>
            </CSSTransition>
        </div>
    );
};

export default Home;
