import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FiHeart } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';
import '../css/product.css'; 

const Product = () => {
  const { addWishlistItem, removeWishlistItem, items: wishlistItems } = useWishlist();
  const { addItem } = useCart();
  const loaded = usePlaceholder();
  const products = useProducts();

  const isInWishlist = (id) => wishlistItems.some(item => item.id === id);

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeWishlistItem(product.id);
      toast.success('Removed from wishlist', { icon: 'Broken heart' });
    } else {
      addWishlistItem(product);
      toast.success('Added to wishlist!', { icon: 'Heart' });
    }
  };

  const handleAddToCart = (product) => {
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.proName} added to cart!`, {
      icon: 'Coffee cup',
      style: { background: '#fef6f3', color: '#d45a3e' }
    });
  };

  return (
    <section className="products-section py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="products-title display-4 fw-bold">
            {loaded ? 'Our Products' : <span className="placeholder col-6 rounded"></span>}
          </h2>
          <p className="products-subtitle lead text-muted">
            Freshly brewed coffee, delicious pastries & more
          </p>
        </div>

        {/* Product Grid */}
        <div className="row g-4 g-xl-5">
          {products.slice(0, 6).reverse().map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <div className="product-card h-100 position-relative overflow-hidden rounded-4 shadow-lg hover-lift">
                <Link to={`/product-details/${product.id}`} className="text-decoration-none">
                  {!loaded ? (
                    <div className="placeholder-img bg-light"></div>
                  ) : (
                    <div className="product-img-wrapper">
                      <img
                        src={product.image}
                        alt={product.proName}
                        className="product-img"
                        loading="lazy"
                      />
                      <div className="img-overlay"></div>
                    </div>
                  )}
                </Link>

                {/* Wishlist Heart Button - Top Right */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="wishlist-btn"
                  disabled={!loaded}
                  aria-label="Toggle wishlist"
                >
                  <FiHeart
                    size={22}
                    fill={isInWishlist(product.id) ? '#d45a3e' : 'none'}
                    stroke={isInWishlist(product.id) ? '#d45a3e' : '#d45a3e'}
                    className="wishlist-icon"
                  />
                </button>

                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="product-name fw-bold mb-3">
                    {loaded ? product.proName : <span className="placeholder col-9 rounded"></span>}
                  </h5>
                  <p className="product-name m-0">
                    Price : {loaded ? product.price : <span className="placeholder col-9 rounded"></span>}
                  </p>
                  <p className="product-name">
                    Origin :{loaded ? product.origin : <span className="placeholder col-9 rounded"></span>}
                  </p>

                  <div className="mt-auto">
                    {/* Add to Cart Button */}
                    <button
                      className="btn-add-to-cart w-100 mb-3 fw-bold"
                      onClick={() => handleAddToCart(product)}
                      disabled={!loaded}
                    >
                      {loaded ? 'Add to Cart' : <span className="placeholder col-8 rounded"></span>}
                    </button>

                    {/* Wishlist Text Button */}
                    {/* <button
                      onClick={() => toggleWishlist(product)}
                      className={`btn-wishlist-text w-100 d-flex align-items-center justify-content-center gap-2 ${
                        isInWishlist(product.id) ? 'active' : ''
                      }`}
                      disabled={!loaded}
                    >
                      <FiHeart
                        size={20}
                        fill={isInWishlist(product.id) ? 'white' : 'none'}
                        stroke={isInWishlist(product.id) ? 'white' : '#d45a3e'}
                      />
                      {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Favorites'}
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            boxShadow: '0 10px 30px rgba(212, 90, 62, 0.2)',
            borderRadius: '16px',
            padding: '16px',
          },
        }}
      />
    </section>
  );
};

export default Product;