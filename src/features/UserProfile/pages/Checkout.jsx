import React, { useState, useEffect } from 'react';
import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { MdDelete } from "react-icons/md";
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import '../css/checkout.css';

const Checkout = () => {
  const loaded = usePlaceholder(1200);
  const [selectedPay, setSelectedPay] = useState('khqr');
  const [selectedItems, setSelectedItems] = useState({});

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  useEffect(() => {
    const initial = {};
    items.forEach(item => initial[item.id] = selectedItems[item.id] ?? true);
    setSelectedItems(initial);
  }, [items.length]);

  const toggleSelectAll = () => {
    const allSelected = items.every(i => selectedItems[i.id]);
    const newSel = {};
    items.forEach(i => newSel[i.id] = !allSelected);
    setSelectedItems(newSel);
  };

  const toggleItem = (id) => setSelectedItems(prev => ({ ...prev, [id]: !prev[id] }));

  const deleteSelected = () => {
    // Object.keys(selectedItems).forEach(id => selectedItems[id] && removeItem(id));
    // setSelectedItems({});
  };

  const parsePrice = (p) => typeof p === 'number' ? p : parseFloat(String(p).replace(/[^0-9.-]/g, '')) || 0;

  const selectedTotal = items
    .filter(i => selectedItems[i.id])
    .reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;
  const allSelected = items.length > 0 && selectedCount === items.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCount === 0) return alert("Please select at least one item!");
    alert(`Order placed!\nItems: ${selectedCount}\nTotal: $${selectedTotal.toFixed(2)}\nPayment: ${selectedPay.toUpperCase()}`);
  };

  if (isEmpty) {
    return (
      <div className="empty-cart text-center py-5 align-content-center" style={{ height: '50vh' }}>
        <MdDelete size={80} className="text-muted mb-4" />
        <h3>Your cart is empty</h3>
        <p className="text-muted">Add some delicious items first!</p>
        <Link to="/products" className="btn-cafe mt-3">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page py-5">
      <div className="container">
        <div className="row">

          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="m-0">Shopping Cart ({totalUniqueItems})</h2>
              {loaded && items.length > 0 && (
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <label className="checkbox-label">
                    <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
                    Select All ({selectedCount})
                  </label>
                  <button onClick={deleteSelected} className="btn-delete-sm text-black ">
                    <MdDelete /> Delete
                  </button>
                </div>
              )}
            </div>

            <div className="cart-items">
              {(loaded ? items : [...Array(4)]).map((item, i) => (
                <div key={item?.id || i} className="cart-row">

                  <div className="d-flex align-items-center">
                    {/* Checkbox */}
                    <div className="check">
                      {loaded ? (
                        <input type="checkbox" checked={!!selectedItems[item?.id]} onChange={() => toggleItem(item.id)} />
                      ) : <div className="skeleton-circle"></div>}
                    </div>
                    {/* Image */}
                    <div className="img m-auto d-flex flex-wrap justify-content-center align-items-center ">
                      {loaded ? <img src={item.image} alt={item.proName} /> : <div className="skeleton-img"></div>}
                    </div>

                    {/* Info */}
                    <div className="info flex-grow-1 ms-md-5">
                      <h6>{loaded ? item.proName : <div className="skeleton-text long"></div>}</h6>
                      <small className="text-cafe">
                        {loaded ? `$${parsePrice(item.price).toFixed(2)} each` : <div className="skeleton-text"></div>}
                      </small>
                    </div>
                    {/* Quantity */}
                    <div className="qty">
                      {loaded ? (
                        <div className="qty-box m-auto d-flex justify-content-evenly align-items-center w-auto">
                          <button onClick={() => item.quantity > 1 && updateItemQuantity(item.id, item.quantity - 1)}>−</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      ) : <div className="skeleton-qty"></div>}
                    </div>
                    {/* Price */}
                    <div className="price text-cafe">
                      {loaded ? `$${(parsePrice(item.price) * item.quantity).toFixed(2)}` : <div className="skeleton-text"></div>}
                    </div>

                    {/* Delete */}
                    <div className="del ms-3 bg-danger px-2 rounded-circle">
                      <button onClick={() => removeItem(item.id)} className="btn-del">
                        <MdDelete />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="notes-row mt-4">
              <input type="text" placeholder="Note (optional)" className="note-input" disabled={!loaded} />
              <input type="text" placeholder="Delivery address" className="note-input" disabled={!loaded} />
            </div>
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <form onSubmit={handleSubmit} className="summary-card">
              <h4>Order Summary</h4>

              <div className="payment-methods">
                <h6>Payment Method</h6>
                {loaded ? (
                  <>
                    <label><input type="radio" name="pay" checked={selectedPay === 'khqr'} onChange={() => setSelectedPay('khqr')} /> KHQR</label>
                    <label><input type="radio" name="pay" checked={selectedPay === 'creditCard'} onChange={() => setSelectedPay('creditCard')} /> Credit Card</label>
                    <label><input type="radio" name="pay" checked={selectedPay === 'cashOnDelivery'} onChange={() => setSelectedPay('cashOnDelivery')} /> Cash on Delivery</label>
                  </>
                ) : (
                  <>
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line short"></div>
                    <div className="skeleton-line"></div>
                  </>
                )}
              </div>

              <div className="total-section">
                <div className="line">
                  <span>Subtotal ({selectedCount} items)</span>
                  <strong className="text-cafe">${loaded ? selectedTotal.toFixed(2) : '0.00'}</strong>
                </div>
                <div className="line">
                  <span>Shipping</span>
                  <strong className="text-success">Free</strong>
                </div>
                <div className="total-line">
                  <span>Total</span>
                  <strong className="text-cafe fs-3">${loaded ? selectedTotal.toFixed(2) : '0.00'}</strong>
                </div>
              </div>

              <button type="submit" disabled={selectedCount === 0 || !loaded} className="btn-place-order">
                Place Order • ${loaded ? selectedTotal.toFixed(2) : '0.00'}
              </button>

              {selectedCount === 0 && loaded && <p className="text-center text-muted small mt-2">Select items to continue</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;