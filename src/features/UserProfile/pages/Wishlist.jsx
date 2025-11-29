import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { MdDelete, MdOutlineFavorite } from "react-icons/md";

const Wishlist = () => {
  const loaded = usePlaceholder(1000);

  const {
    isWishlistEmpty,
    totalWishlistItems,
    items,
    removeWishlistItem,
  } = useWishlist();

  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
    toast.success(`${item.proName} added to cart!`);
  };

  if (isWishlistEmpty) {
    return (
      <div className="text-center align-content-center py-5 my-5 " style={{ height: '50vh' }}>
        <div className="mb-4">
          <div className="bg-light d-inline-flex p-4 rounded-circle">
            <MdOutlineFavorite size={48} className="text-muted " />
          </div>
        </div>
        <h3 className="fw-bold">Your favorite is empty</h3>
        <p className="text-muted mb-4">Add some items to your favorite!</p>
        <Link to="/products" className="btn btn-primary px-5">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-wrap py-5">
      <div className="container">
        <h2 className="main-heading mb-4">My Wishlist ({totalWishlistItems})</h2>

        <div className="table-responsive">
          <table className="table table-wishlist align-middle">
            <thead className="table-light">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.proName}
                        className="me-3 rounded"
                        style={{ width: 80, height: 80, objectFit: "cover" }}
                      />
                      <div>
                        <h6 className="mb-0">{item.proName}</h6>
                      </div>
                    </div>
                  </td>
                  <td><strong>{item.price}</strong></td>
                  <td>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-warning btn-sm"
                    >
                      Add to Cart
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => removeWishlistItem(item.id)}
                      className="btn btn-link text-danger p-0"
                    >
                      <MdDelete size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;