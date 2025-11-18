import React, { useState, useEffect } from 'react'
import image from '../../assets/images/contact.svg'
import { IoLocationOutline ,IoCallSharp  } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";

const Contact = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-5 placeholder-glow">
            <center>
                <h2 className="mb-4">
                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                        Contact Us
                    </span>
                </h2>
            </center>

            <div className="container">
                <div className="row align-items-center">

                    {/* Image Side */}
                    <div className="col-lg-6">

                        {/* Placeholder */}
                        {!loaded && (
                            <div
                                className="placeholder shadow-sm rounded mb-3"
                                style={{
                                    width: "100%",
                                    height: "350px",
                                    borderRadius: "12px"
                                }}
                            ></div>
                        )}

                        {/* Real Image */}
                        <img
                            src={image}
                            className={`img-fluid rounded ${loaded ? "" : "d-none"}`}
                            alt="Contact illustration"
                            style={{
                                width: "100%",
                                height: "350px",
                                objectFit: "cover"
                            }}
                        />
                    </div>

                    {/* Content Side */}
                    <div className="col-lg-6">
                        <div className="p-4 bg-coffee-cream text-coffee-brown rounded placeholder-glow">

                            {/* Address */}
                            <div className="mb-4">
                                <p className="fw-bold mb-2 d-flex align-items-center gap-2">
                                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                        <IoLocationOutline size={30} />
                                    </span>
                                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                        Address
                                    </span>
                                </p>

                                <ul className="list-unstyled ms-3">
                                    <li>
                                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                            Cambodia Sen Sok
                                        </span>
                                    </li>
                                    <li>
                                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                            W Speed
                                        </span>
                                    </li>
                                    <li>
                                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                            123 Main Street, Cityville, Countryland
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="mb-4">
                                <p className="fw-bold mb-2 d-flex align-items-center gap-2">
                                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                        <IoMdContact size={30} />
                                    </span>
                                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                        Contact
                                    </span>
                                </p>

                                <ul className="list-unstyled ms-3">
                                    <li>
                                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                            <HiOutlineMail size={20}/> Email : shop@cafesne.com
                                        </span>
                                    </li>
                                    <li>
                                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                            <IoCallSharp size={20}/> Call us : +885 123 456 789
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
