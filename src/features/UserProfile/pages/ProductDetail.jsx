import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { useProducts } from '../hooks/useProducts';
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FiHeart } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import LoadingSpinner from '../components/Loading/LoadingSpinner'

const ProductDetail = () => {
  const { id } = useParams();
  const products = useProducts();
  const loaded = usePlaceholder();
  const { addItem } = useCart();
  const { addWishlistItem, removeWishlistItem, items: wishlistItems } = useWishlist();
  const [qty, setQty] = useState(1);

  const product = products.find(p => String(p.id) === String(id));

  if (!loaded || !product) { return (<LoadingSpinner />); }

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
      <div className="row">

        {/* LEFT: Images */}
        <div className="col-lg-6">

          <Link to="/products" className="btn btn-outline-secondary mb-4">
            ← Back to Products
          </Link>

          <div className="">
            <img
              src={product.image}
              alt={product.proName}
              className="img-fluid rounded"
              style={{ maxHeight: "600px", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold mb-3">{product.proName}</h1>
          <h3 className="text-warning fw-bold fs-2 mb-4">{product.price}</h3>


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
              <BsCartPlus
                size={22}
                fill='white'
                stroke='red'
              />
              <span className="ms-2 text-white">Add to card</span>
            </button>
            <button
              onClick={toggleWishlist}
              className={`btn btn-lg px-5 align-items-center gap-2 fw-medium ${isInWishlist ? 'btn-danger' : 'btn-outline-danger'
                }`}
            >
              <FiHeart
                size={22}
                fill={isInWishlist ? 'white' : 'none'}
                stroke={isInWishlist ? 'white' : 'red'}
              />
              <span className="ms-2">
                {isInWishlist ? 'In Wishlist' : 'Add to Favorites'}
              </span>
            </button>
          </div>

          <hr className="my-5" />

          <div className="text-success mb-3">
            <i className="fas fa-truck me-2"></i>
            Free shipping use the promocode "你很可爱"
          </div>
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
    </div>
  );
};

export default ProductDetail;