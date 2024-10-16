// components/ProductList.jsx
import styles from '../Home.module.css';

const products = [
  { id: 1, name: 'Modern Smart Phone', price: '$215.00', label: 'NEW', imgSize: '270x274' },
  { id: 2, name: 'Bluetooth Headphones', price: '$312.00', label: 'SALE', imgSize: '270x274' },
  { id: 3, name: 'Smart Black Bag', price: '$89.50', label: 'SALE', imgSize: '270x274' },
  { id: 4, name: 'AirPods 2', price: '$189.50', label: 'NEW', imgSize: '270x274' },
  { id: 5, name: 'Smart Watch', price: '$315.50', imgSize: '270x274' },
  { id: 6, name: 'Smart Table Camera', price: '$29.50', imgSize: '270x274' },
  { id: 7, name: 'Round Rocklite Router', price: '$99.50', imgSize: '270x274' },
  { id: 8, name: 'Power Router 10000Mbp', price: '$233.50', label: '50% OFF', imgSize: '270x274' },
];

const ProductList = () => {
  return (
    <div className={styles.productListContainer}>
      <div className={styles.tabMenu}>
        <button className={styles.activeTab}>Top Rated</button>
        <button>New Arrivals</button>
        <button>Featured</button>
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <p>{product.imgSize}</p>
            </div>
            <div className={styles.productDetails}>
              {product.label && <span className={styles.productLabel}>{product.label}</span>}
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
