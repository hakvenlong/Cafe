import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { useProducts } from '../hooks/useProducts';
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FiHeart } from "react-icons/fi";
import Notfound from '../../../pages/NotFound'

const ProductDetail = () => {
  const { id } = useParams();
  const products = useProducts();
  const loaded = usePlaceholder();
  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, items: wishlistItems } = useWishlist();
  const [qty, setQty] = useState(1);

  const product = products.find(p => String(p.id) === String(id));

  if (!product) {
    return (
      <Notfound/>
    );
  }

  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeWishlistItem(product.id);
      toast.success('Removed from wishlist');
    } else {
      addWishlistItem(product);
      toast.success('Added to wishlist');
    }
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity: qty });
    toast.success(`${qty}x ${product.proName} added to cart!`);
  };

  return (
    <div className="container py-5">
      <div className="row g-5">

        {/* LEFT: Images */}
        <div className="col-lg-6">
          <div className="sticky-top" style={{ top: '100px' }}>
            {!loaded ? (
              <div className="placeholder bg-light rounded" style={{ height: "600px" }}></div>
            ) : (
              <img
                src={product.image}
                alt={product.proName}
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "600px", objectFit: "cover", width: "100%" }}
              />
            )}

            {/* <div className="row g-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="col-3">
                  {!loaded ? (
                    <div className="placeholder bg-light rounded" style={{ height: "100px" }}></div>
                  ) : (
                    <img
                      src={product.image}
                      alt={`Thumbnail ${i}`}
                      className="img-thumbnail cursor-pointer"
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                  )}
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-3">{product.proName}</h1>
          <h3 className="text-warning fw-bold fs-2 mb-4">{product.price}</h3>

          <div className="d-flex align-items-center mb-4">
            <div className="text-warning me-2">
              {[...Array(4)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="text-muted">(128 reviews)</span>
          </div>

          <div className="mb-4">
            <h5><strong>Origin:</strong> {product.origin}</h5>
            <h5><strong>Region:</strong> {product.Region}</h5>
          </div>

          <p className="lead mb-4">
            <strong>Tasting Notes:</strong>{' '}
            {product.tastingNotes?.join(', ') || 'N/A'}
          </p>

          <p className="text-muted mb-5">{product.description}</p>

          {/* Action Buttons */}
          <div className="d-grid d-md-flex gap-3">
            <button
              className="btn btn-warning btn-lg px-5 fw-bold"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`btn btn-lg px-5 d-flex align-items-center gap-2 fw-medium ${
                isInWishlist ? 'btn-danger' : 'btn-outline-danger'
              }`}
            >
              <FiHeart
                size={22}
                fill={isInWishlist ? 'white' : 'none'}
                stroke={isInWishlist ? 'white' : 'red'}
              />
              {isInWishlist ? 'In Wishlist' : 'Add to Favorites'}
            </button>
          </div>

          <hr className="my-5" />

          <div className="text-success mb-3">
            <i className="fas fa-truck me-2"></i>
            Free shipping use the promocode "你很可爱"
          </div>

          <Link to="/products" className="btn btn-outline-secondary mt-4">
            ← Back to Products
          </Link>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default ProductDetail;