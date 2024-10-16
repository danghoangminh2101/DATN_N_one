// pages/index.jsx
import Banner from '../components/Banner';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductList from '../components/ProductList';
import styles from '../Home.module.css';

export default function index() {
  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <div className={styles.featuredSection}>
          <FeaturedProduct />
        </div>
        <ProductList />
      </div>
    </div>
  );
}
