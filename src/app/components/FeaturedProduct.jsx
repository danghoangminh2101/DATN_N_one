// components/FeaturedProduct.jsx
import styles from '../Home.module.css';

const FeaturedProduct = () => {
  return (
    <div className={styles.featuredContainer}>
      <div className={styles.featuredLarge}>
        <div className={styles.productInfo}>
          <h2>Smart Watch For Your Hand</h2>
          <p>From $29.00</p>
        </div>
      </div>
      <div className={styles.featuredSmall}>
        <div className={styles.productItem}>
          <h3>Headphones</h3>
          <p>From $95.00</p>
        </div>
        <div className={styles.productItem}>
          <h3>Smartphone</h3>
          <p>From $89.00</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
