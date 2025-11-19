import React from 'react'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080" className="card-img-top" alt="Product Image"/>
              <div className="card-body">
                <div className="row g-2">
                  <div className="col-3">
                    <img src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080" className="img-thumbnail" alt="Thumbnail 1"/>
                  </div>
                  <div className="col-3">
                    <img src="https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080" className="img-thumbnail" alt="Thumbnail 2"/>
                  </div>
                  <div className="col-3">
                    <img src="https://images.unsplash.com/photo-1451859757691-f318d641ab4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080" className="img-thumbnail" alt="Thumbnail 3"/>
                  </div>
                  <div className="col-3">
                    <img src="https://images.unsplash.com/photo-1490915785914-0af2806c22b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHx3YXRjaHxlbnwwfDB8fHwxNzM0OTY1MTc4fDA&ixlib=rb-4.0.3&q=80&w=1080" className="img-thumbnail" alt="Thumbnail 4"/>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="col-md-6">
          <h1 className="h2 mb-3">Elegant Watch classNameic Edition</h1>
          <div className="mb-3">
            <span className="h4 me-2">$299.99</span>
            <span className="text-muted text-decoration-line-through">$399.99</span>
            <span className="badge bg-danger ms-2">25% OFF</span>
          </div>

          <div className="mb-3">
            <div className="d-flex align-items-center">
              <div className="text-warning me-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="text-muted">(128 reviews)</span>
            </div>
          </div>

          <p className="mb-4">Timeless elegance meets modern functionality in this classNameic timepiece. Features premium
            materials, water resistance, and sophisticated design.</p>

          <div className="mb-4">
            <h6 className="mb-2">Color</h6>
            <div className="btn-group" role="group">
              <input type="radio" className="btn-check" name="color" id="silver" checked/>
                <label className="btn btn-outline-secondary" for="silver">Silver</label>
                <input type="radio" className="btn-check" name="color" id="gold"/>
                  <label className="btn btn-outline-secondary" for="gold">Gold</label>
                  <input type="radio" className="btn-check" name="color" id="black"/>
                    <label className="btn btn-outline-secondary" for="black">Black</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center">
                    <label className="me-2">Quantity:</label>
                    <select className="form-select w-auto">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">Add to Cart</button>
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="far fa-heart me-2"></i>Add to Wishlist
                  </button>
                </div>

                <div className="mt-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-truck text-primary me-2"></i>
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-undo text-primary me-2"></i>
                    <span>30-day return policy</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-shield-alt text-primary me-2"></i>
                    <span>2-year warranty</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
}

        export default ProductDetail
