import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Modal.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Example product data with additional images
const products = [
    // product 1
    {
        name: 'Nike Superfly 9 Academy TF',
        description: 'Trà Sữa - DJ5629-700',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240410_lLKBIu1l12.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/nms02981_c71de1d3dbbf4a78b7d25ac7b46e9b54_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02982_9c9b1ba81c71490cb0ec0ca71606a1a8_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02984_ab53e528bd3746f49f727faa066e6af9_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02985_4b2fd9b9f20c44aeb1ff438afcf7b9ae_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02986_67a9d5a805e946d78ed8dec6242ab732_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02987_287c911332c84ad0b78515b636cddbb5_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02988_836119c691d344c2ab79997afa3fb7ac_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02989_55d5b423f1cb4671baea5a0a4229ddb2_1024x1024.jpg',
        ]
    },
    // product 2
    {
        name: 'Nike Superfly 9 Academy MDS008 TF',
        description: 'Xanh Lá - FJ7199-300',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240410_YoHqeZsfFQ.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/anh_sp_add_web_3-02-02-02_d327c394fb334b45a65d6ef60c6a9042_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02145_8b11875433f04da59c16f51a3876736c_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02146_fb32a12bb8784266908ab6f20118710e_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02147_0e184de5db5d4d53a3d78a6909d2b370_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02148_8a935e4228594116b65742ebe4517ac5_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02149_fb2bc89ec25c485084c1709a55273c77_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02150_bf4da60b35ce402f813f9e7f9e7a659a_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02151_1e9b6c054b104924b95278c9de7e3b9a_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms02152_8111496a7aa546b1b5419881a5a052b5_1024x1024.jpg',
        ]
    },
    // product 3
    {
        name: ' Nike Vapor 15 Pro TF Mad Brilliance',
        description: 'Hồng Đen - DJ5605-601',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240809_lsCW7rKiN2.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/nms09408_d3cfd76766b34c90b9040663abfd7949_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09409_c27528e620e14627803ee14854656f95_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09410_c20ae704a7e041b398370c8dcb3dcdbb_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09411_7fc5afb0f65a479890658d6ad01bdf31_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09412_047f1b5be3394a62a4bfc83c74577429_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09413_296db57f1b504a40addc0ea326119153_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09414_5cc8ff0b9e144d14b758b8f2c6c41933_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms09415_e83245fa8ea54b419e035e118136c466_1024x1024.jpg',

        ]
    },
    // product 4
    {
        name: ' Mizuno Morelia Neo IV Pro AS',
        description: 'Vàng Xanh/Đỏ - P1GD243445',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240409_uMJ0jioDjg.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/nms04873_087398a47aa5492ead246946f57b4f4a_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04874_55e0080e05ec417bb55d59cd2f841cde_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04877_9ec9a0426d5f4cf29151e9ff25c7637c_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04876_9c98c67b5f274481a1c40053ae962307_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04878_2ffb9b6ce3da4f8d943401d2d3ce4359_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04879_4b73a4ce6f0f4548bb3ecd72410c9d0b_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04880_eebd08c62cfe439fbad46d51e6aed6fc_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04881_4cacaeb899d44481ac1c44154b0c4d4e_1024x1024.jpg',
        ]
    },
    // product 5
    {
        name: 'Mizuno Alpha Pro AS',
        description: 'P1GD246450 - Trắng/Vàng',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240619_lPZdDOgy85.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/nms06596_27231d23c577435eafbe911181e15721_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06597_e3c1636ace644f3b8cfca4e5cf0e3149_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06598_22e80abc58304654a0e91cfb870dd81d_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06600_4877352bdedb40269de510500fdcc574_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06602_7f9789fac773479c9e7616eb96dea1f6_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06604_fbecbb46313644dbafc0f927125b726f_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06605_e5c987d166ef4d2aa22750705e135262_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms06607_a02516b474094a1aac1420c50e44153e_1024x1024.jpg',
        ]
    },
    // product 6
    {
        name: 'Mizuno Morelia Neo III Lạc Việt Limited Edition',
        description: 'P1GD228444 - Đỏ/Vàng',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20220901_EfLl0IOT7DyzjUFVhtGqo2RW.jpg',
        additionalImages: [
            'https://product.hstatic.net/1000313927/product/morelia-neo-iii-lac-viet-1_0db6c182638d4340a3b04d73ba222a99_master.png',
            'https://product.hstatic.net/1000313927/product/morelia-neo-iii-lac-viet-3_64705e7b252e43f988aa6b1f04c22958_master.png',
            'https://product.hstatic.net/1000313927/product/morelia-neo-iii-lac-viet-2_df58442632b145cc9d0b1b0b4e130034_master.png',
            'https://product.hstatic.net/1000313927/product/morelia-neo-iii-lac-viet_12e72472f66a4322bafe94d108b0fb10_master.png',
            'https://product.hstatic.net/1000313927/product/morelia-neo-iii-lac-viet-4_2e696e9e09884d2ab0f5adec2be5c781_master.png',

        ]
    },
    // product 7
    {
        name: 'Adidas F50 Messi League TF',
        description: 'Vàng/Trắng - IG9282',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240619_x4w26QxnUX.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/nms01643_84bb7925e2a14f1d961794c807f196d5_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01644_414c945565fe4e01bd560b0cb163b626_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01645_0170879f81ea4e428312908db8fd2c65_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01649_0cfe287ccfec4e728d9ae99572b04625_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01650_e0b1069a43bd4cd7bcdf714264aa2824_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01651_1962a4acdf684071bb1955976ad81d20_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01652_d563d487b5844260b5c3484425cdeff1_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms01654_0dbc4a280d63450a91d9aa2650e6ca8b_1024x1024.jpg',

        ]
    },
    // product 8
    {
        name: 'Adidas X Crazyfast Elite TF',
        description: 'Đỏ/Cam Trắng - IF0663',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240410_pCKpUFlLpm.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/nms05692_7b640a7573f64b5aac300270e5d8c132_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05693_e0903f0a496847deb0c62692f4c8a339_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05694_2d960eada6b4439782e3464bcd9bc3df_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05695_aace57bde1ac4e479c13675869d16a54_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05696_c2a35beac3a4411792d2836d4d3fe4d4_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05697_13bac294a48c4e3c98ac2c326035f16c_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05698_75dd1ebcceeb4e2ebc2810dd11e8f807_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms05699_54c575cbb18d49e18be82b483d367785_1024x1024.jpg',

        ]
    },
    // product 9
    {
        name: 'Adidas X Crazyfast .1 TF Marine Rush',
        description: 'Xanh Dương/Trắng - IE6633',
        mainImage: 'https://pos.nvncdn.com/b0b717-26181/ps/20240809_dcZUpUoj6N.jpeg',
        additionalImages: [
            'https://product.hstatic.net/1000061481/product/anh_sp_add_web_ballak02-01-01-01-01-02-02-02-02-02-02-02-02_e21e8b35716e45d197bbe2af4d4e3c25_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04605_afb7a3d57b8d412a80692f879ef17f52_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04606_0b873e28501443e38461b4fa09d0c3de_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04607_aa32d2b0ca0747ee908ac020424f751e_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04608_0dd95b99af9f46ffabd1765853c23482_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04609_bcbedaab76404db09693bb5daa5bbc4b_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04610_3dad49d0b30d4d3ea0f50ed01a0e4ea2_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04611_a86e815831c2416f839842691683998d_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms04612_1eb5177db6844b63873e6b5b65b4d0e7_1024x1024.jpg',
        ]
    },

    // Add more products as needed
];

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0); // Set to the first image initially
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

    return (
        <div>
            <header className="home-header">
                <img src={require('../assets/logoshop.png')} alt="Viet Master Shop Logo" className="h-12" style={{ width: '100px', height: '85px' }} />
                <nav className='about-nav'>
                    <Link to="/" className="nav-link mr-4">Home</Link>
                    <Link to="/about" className="nav-link mr-4">About</Link>
                    <Link to="/contact" className="nav-link mr-4">Contact</Link>
                </nav>
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
                    {products.map((product, index) => (
                        <div key={index} className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
                            <img
                                src={product.mainImage}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                                onClick={() => openModal(product)}
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-sm mb-4">{product.description}</p>
                            <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="about-footer">
                <p>Liên hệ: vietmastershop@example.com | Điện thoại: 0377 797 231</p>
                <p>&copy; 2018 Viet Master Shop. All Rights Reserved.</p>
            </footer>

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
                                <img src={require('../assets/next.png')} alt="Previous" className="w-6 h-6" />
                            </button>
                        </div>
                        <button onClick={closeModal} className="mt-6 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors">
                            <img src={require('../assets/closed (2).png')} alt="Previous" className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Home;
