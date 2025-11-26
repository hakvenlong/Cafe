import { useState } from 'react';
import { usePlaceholder } from '../../../hooks/usePlaceholder';
import toast from 'react-hot-toast';
import '../css/reservation.css'

const Reservation = () => {
  const loaded = usePlaceholder(800);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Table reserved for ${formData.guests} on ${formData.date} at ${formData.time}!\nWe'll send confirmation to ${formData.email}`, {
      duration: 6000,
      icon: 'Table',
    });
    // Reset form
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' });
  };

  return (
    <section className="reservation-section py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left: Form */}
          <div className="col-lg-6">
            <div className="reservation-form-card p-5 rounded-4 shadow-lg">
              <h2 className="display-5 fw-bold mb-4 text-cafe">
                {loaded ? "Reserve Your Table" : <span className="placeholder col-8"></span>}
              </h2>
              <p className="lead text-muted mb-4">
                Book a cozy spot for your next coffee date or meeting
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control form-control-lg" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Email" required />
                  </div>
                  <div className="col-12">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control form-control-lg" placeholder="Phone Number" required />
                  </div>
                  <div className="col-md-6">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control form-control-lg" required />
                  </div>
                  <div className="col-md-6">
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control form-control-lg" required />
                  </div>
                  <div className="col-md-6">
                    <select name="guests" value={formData.guests} onChange={handleChange} className="form-select form-select-lg">
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="3" placeholder="Special requests (optional)"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-cafe w-100 py-3 fw-bold fs-5">
                      Book Table Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Info + Image */}
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <img src="https://lubd.com/wp-content/uploads/2025/08/0-2-1-1.jpg" alt="Cafe interior" className="reservation-img rounded-4 shadow-lg" />
              <div className="mt-4 p-4 bg-white rounded-4 shadow">
                <h4 className="fw-bold text-cafe">Opening Hours</h4>
                <ul className="list-unstyled mt-3">
                  <li className="d-flex justify-content-between py-2"><span>Monday - Friday</span> <strong>7:00 AM - 9:00 PM</strong></li>
                  <li className="d-flex justify-content-between py-2"><span>Saturday - Sunday</span> <strong>8:00 AM - 10:00 PM</strong></li>
                </ul>
                <p className="mt-4 text-muted">
                  We recommend booking in advance on weekends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;