import React, { useState, useEffect } from 'react'
import { usePlaceholder } from '../../hooks/usePlaceholder'
import { MdDelete } from "react-icons/md";
import '../../styles/checkout.css'


const Checkout = () => {

    const loaded = usePlaceholder(1000); 

    // Form
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Quantity
    const [qty, setQty] = useState(1);

    useEffect(() => {
        setQty(1);
    }, []);

    return (
        <section>
            <div className="container mt-4 p-3 placeholder-glow">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="col">
                            <h2 className="pb-2 fw-bold">
                                <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                                    Shopping cart
                                </span>
                            </h2>
                            <div className="card">
                                <div>
                                    <div className="table-responsive px-md-4 px-2 pt-3">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr className="border-bottom">
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img 
                                                                    className={`pic rounded ${loaded ? "" : "d-none"}`}
                                                                    src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                                                    alt="" 
                                                                    />
                                                            </div>
                                                            <div className="ps-3 d-flex flex-column j   ustify-content">
                                                                <p className="fw-bold">
                                                                    <span className={`ps-1 ${!loaded ? 'placeholder shadow-sm' : ''}`}>Red</span>
                                                                </p> 
                                                                <small className=" d-flex"> 
                                                                    <span className={`ps-1 fw-bold text-muted ${!loaded ? 'placeholder shadow-sm' : ''}`}>Color:</span> 
                                                                    <span className={`ps-1 ${!loaded ? 'placeholder shadow-sm' : ''}`}>Red</span>
                                                                </small> 
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <p className="pe-3 align-items-center my-auto">
                                                                <span className={!loaded ? 'placeholder shadow-sm' : ''}>$ 10</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center g-3">
                                                            <span className={`${!loaded ? 'placeholder shadow-sm' : ''} me-3`}>Quantity</span>
                                                            <div className="d-flex align-items-center gap-2">
                                                                {/* Minus */}
                                                                <button
                                                                    type="button"
                                                                    className={`round ${!loaded ? 'placeholder shadow-sm' : ''}`}
                                                                    onClick={() => qty > 1 && setQty(qty - 1)}
                                                                >
                                                                    –
                                                                </button>

                                                                {/* Qty Display */}
                                                                <div className={`round ${!loaded ? 'placeholder shadow-md' : ''}`}>
                                                                    <span>{qty}</span>
                                                                </div>

                                                                {/* Plus */}
                                                                <button
                                                                    type="button"
                                                                    className={`round ${!loaded ? 'placeholder shadow-md' : ''}`}
                                                                    onClick={() => setQty(qty + 1)}
                                                                >
                                                                    +
                                                                </button>

                                                                {/* Delete */}
                                                                <button
                                                                    type="button"
                                                                    className="round btn btn-danger d-flex justify-content-center align-items-center"
                                                                >
                                                                    <MdDelete size={18} />
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card px-md-3 px-2 pt-4">
                                        <div className="unregistered mb-4"> <span className="py-1">unregistered account</span> </div>
                                        <div className="d-flex justify-content-between pb-3"> <small className="text-muted">Transaction code</small>
                                            <p className="">Wspeed</p>
                                        </div>
                                        <div className="d-flex justify-content-between b-bottom">
                                            <input type="text" className="ps-2" placeholder="COUPON CODE" />
                                            <div className="btn btn-primary">Apply</div>
                                        </div>
                                        <div className="d-flex flex-column b-bottom">
                                            <div className="d-flex justify-content-between py-3"> <small className="text-muted">Order Summary</small>
                                                <p>$122</p>
                                            </div>
                                            <div className="d-flex justify-content-between pb-3"> <small className="text-muted">Additional Service</small>
                                                <p>$22</p>
                                            </div>
                                            <div className="d-flex justify-content-between"> <small className="text-muted">Total Amount</small>
                                                <p>$132</p>
                                            </div>
                                        </div>
                                        <div className="sale my-3"> <span>sale<span className="px-1">expiring</span><span>in</span>:</span><span className="red">21<span className="ps-1">hours</span>,31<span className="ps-1 ">minutes</span></span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex flex-column justify-content-between">
                        <h2 className="pb-2 fw-bold">Payment info</h2>
                        <div className="col">
                            <div className="payment-summary">
                                <h2>Payment Summary</h2>
                                <div className="payment-options">
                                    <label className="payment-option">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="option1"
                                            checked={selectedOption === "option1"}
                                            onChange={handleChange}
                                        />
                                        <span className="custom-radio"></span>
                                        KHQR
                                    </label>

                                    <label className="payment-option">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="option2"
                                            checked={selectedOption === "option2"}
                                            onChange={handleChange}
                                        />
                                        <span className="custom-radio"></span>
                                        Credit Card
                                    </label>

                                    <label className="payment-option">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="option3"
                                            checked={selectedOption === "option3"}
                                            onChange={handleChange}
                                        />
                                        <span className="custom-radio"></span>
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <p className="pt-4 fw-bold pb-3">Additional Service</p>
                            <div className="card p-3 mb-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-bold">Care + package</p> <small className="text-muted">One year of additional Care</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="pe-3">$10.00</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="SwitchCheck" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3 mb-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-bold">Environment Friendly</p> <small className="text-muted">Add some tip for earth care</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="pe-3">$2.00</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="SwitchCheck" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3 mb-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="fw-bold">Golden Guard</p> <small className="text-muted">30 days more for return</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="pe-3">$5.00</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="SwitchCheck" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout