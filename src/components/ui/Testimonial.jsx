import React from 'react'
import '../../styles/globals.css'

const Testimonial = () => {

    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold">What Our Customers Say</h2>
                    <p className="lead text-muted">Real stories from coffee lovers like you</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="testimonial-card text-center">
                            <div className="quote-icon mb-3">“</div>
                            <p className="lead fst-italic">"Best latte art in town! The baristas are true artists and the ambiance is perfect for working or catching up with friends. Their seasonal pumpkin spice latte is to die for!"</p>
                            <div className="stars mb-3">
                                ★★★★★
                            </div>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Sarah" className="rounded-circle client-img mb-3" />
                            <h5 className="mb-0">Sarah M.</h5>
                            <small className="text-muted">Regular since 2023</small>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="testimonial-card text-center">
                            <div className="quote-icon mb-3">“</div>
                            <p className="lead fst-italic">"Cozy little gem! I love their pour-over coffee and the homemade banana bread is incredible. The staff always remembers my order — feels like home."</p>
                            <div className="stars mb-3">
                                ★★★★★
                            </div>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Michael" className="rounded-circle client-img mb-3" />
                            <h5 className="mb-0">Michael R.</h5>
                            <small className="text-muted">Coffee Enthusiast</small>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="testimonial-card text-center">
                            <div className="quote-icon mb-3">“</div>
                            <p className="lead fst-italic">"The avocado toast and iced mocha combo is my weekend ritual. Great vibe, friendly service, and they have the comfiest chairs for reading!"</p>
                            <div className="stars mb-3">
                                ★★★★★
                            </div>
                            <img src="https://images.unsplash.com/photo-158048994092c-3d2c5b9c9e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Emma" className="rounded-circle client-img mb-3" />
                            <h5 className="mb-0">Emma L.</h5>
                            <small className="text-muted">Food & Lifestyle Blogger</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
