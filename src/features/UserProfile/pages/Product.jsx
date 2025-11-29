import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FiHeart } from "react-icons/fi";
import Card from 'react-bootstrap/Card';
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
      toast.success('Removed from wishlist');
    } else {
      addWishlistItem(product);
      toast.success('Added to wishlist!');
    }
  };

  const handleAddToCart = (product) => {
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.proName} added to cart!`);
  };

  return (
    <section className="products-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="products-title display-4 fw-bold">
            {loaded ? 'Our Products' : <span className="placeholder col-6 rounded"></span>}
          </h2>
          <p className="products-subtitle lead text-muted">
            Freshly brewed coffee, delicious pastries & more
          </p>
        </div>

        {/* Responsive grid */}
        <div className="row g-3 g-md-4 g-xl-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                col-6            /* 2 columns on mobile (<576px) */
                col-sm-6         /* still 2 columns up to 576px */
                col-md-4         /* 3 columns on tablets ≥768px */
                col-lg-3         /* 4 columns on desktop ≥992px */
                col-xl-3         /* keep 4 columns on XL */
              "
            >
              <Card className="h-100 position-relative overflow-hidden rounded-4 shadow-lg border-0">
                <Link to={`/product-details/${product.id}`}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.proName}
                    className="w-100 product-img object-fit-cover"
                    style={{ height: '200px' }}  
                  />
                </Link>

               {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="wishlist-btn border-0 bg-transparent position-absolute top-0 end-0 m-2 z-3"
                  disabled={!loaded}
                  aria-label="Toggle wishlist"
                >
                  <FiHeart
                    size={24}
                    fill={isInWishlist(product.id) ? '#ff0000ff' : 'none'}
                    stroke={isInWishlist(product.id) ? '#ffffffff' : '#333'}
                    className="drop-shadow"
                  />
                </button>

                <Card.Body className="d-flex flex-column p-3">
                  <Card.Title className="fw-bold fs-6 mb-1">
                    {product.proName}
                  </Card.Title>
                  <Card.Title className="text-danger fw-bold">
                    {product.price}
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    {product.origin}
                  </Card.Text>

                  <button
                    className="btn btn-outline-dark btn-add-to-cart w-100 mt-auto fw-bold py-2"
                    onClick={() => handleAddToCart(product)}
                    disabled={!loaded}
                  >
                    {loaded ? 'Add to Cart' : <span className="placeholder col-8 rounded"></span>}
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Toaster
        position="bottom-right"
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