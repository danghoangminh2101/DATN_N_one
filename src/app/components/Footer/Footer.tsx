import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <h3 className={styles.footerLogo}>
                            H<span>mart</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consl adipisi elit, sed do
                            eiusmod templ incididunt ut labore
                        </p>
                        <div className={styles.footerSocials}>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-tumblr"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Services Login</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>My Account</h3>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Services Login</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerColumn}>
                        <h3>Contact Info</h3>
                        <p>Address: Your Address Goes Here.</p>
                        <p>Phone/Fax: 0123456789</p>
                        <p>Email: demo@example.com</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2022 Hmart Made With <i className="fas fa-heart"></i> By Codecarnival.</p>
                    <div className={styles.paymentMethods}>
                        <img src="/images/amex.png" alt="Amex" />
                        <img src="/images/paypal.png" alt="PayPal" />
                        <img src="/images/mastercard.png" alt="Mastercard" />
                        <img src="/images/visa.png" alt="Visa" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
