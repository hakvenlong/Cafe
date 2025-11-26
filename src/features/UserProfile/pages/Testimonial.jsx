import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import './Testimonial.css';

const Testimonial = () => {
  const loaded = usePlaceholder(1200);

  const testimonials = [
    { name: "Sopheak", role: "Coffee Lover", rating: 5, text: "The best latte in town! Cozy atmosphere and super friendly staff. My daily go-to cafe!", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "David Kim", role: "Regular Customer", rating: 5, text: "Amazing croissants and perfect cappuccino. The interior is so warm and inviting. Highly recommend!", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Chantha", role: "Food Blogger", rating: 5, text: "Their iced caramel macchiato is to die for! Fresh ingredients and beautiful presentation every time.", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Ratanak", role: "Student", rating: 5, text: "Great place to study with fast Wi-Fi and delicious affordable drinks. Love the vibe here!", image: "https://randomuser.me/api/portraits/men/86.jpg" },
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold testimonial-title">
            {loaded ? "What Our Customers Say" : <span className="placeholder col-7 rounded"></span>}
          </h2>
          <p className="lead text-muted">Real stories from real coffee lovers</p>
        </div>

        <div className="row g-4 g-xl-5">
          {(loaded ? testimonials : [...Array(4)]).map((t, i) => (
            <div key={i} className="col-md-6 col-lg-6">
              <div className="testimonial-card hover-lift">
                <div className="card-body p-5">
                  <FaQuoteLeft className="quote-icon" size={42} />

                  {loaded ? (
                    <>
                      <div className="stars mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar key={i} className="text-warning" />
                        ))}
                      </div>
                      <p className="testimonial-text fst-italic">"{t.text}"</p>
                      <div className="d-flex align-items-center mt-4">
                        <img src={t.image} alt={t.name} className="testimonial-img me-3" />
                        <div>
                          <h6 className="mb-0 fw-bold">{t.name}</h6>
                          <small className="text-muted">{t.role}</small>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="placeholder col-12 mb-3" style={{height: 28}}></div>
                      <div className="placeholder col-11 mb-2" style={{height: 20}}></div>
                      <div className="placeholder col-10 mb-2" style={{height: 20}}></div>
                      <div className="placeholder col-9" style={{height: 20}}></div>
                      <div className="d-flex align-items-center mt-4">
                        <div className="placeholder rounded-circle me-3" style={{width: 60, height: 60}}></div>
                        <div>
                          <div className="placeholder col-8 mb-2" style={{height: 20}}></div>
                          <div className="placeholder col-6" style={{height: 16}}></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;