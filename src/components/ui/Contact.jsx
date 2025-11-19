import React from 'react'
import { IoLogoGoogle, IoLogoGithub, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { IoLocationOutline, IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { usePlaceholder } from '../../hooks/usePlaceholder';

const Contact = () => {
    const image = 'https://wallpapers.com/images/hd/cafe-background-8cfto5lu1pyga5vm.jpg'
    const loaded = usePlaceholder();

    return (
        <section>
            <div className="container">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <h2>
                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                            Contact Us
                        </span>
                    </h2>
                    {/* Image Side */}
                    <div className="col-lg-6">

                        {/* Placeholder */}
                        {!loaded && (
                            <div
                                className="placeholder shadow-sm rounded mb-3"
                                style={{
                                    width: "100%",
                                    height: "500px",
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
                                height: "500px",
                                objectFit: "cover"
                            }}
                        />
                    </div>

                    {/* Content Side */}
                    <div className="col-lg-6">
                        <div className="p-4 align-content-center m-auto d-flex flex-column placeholder-glow">

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
                                            <HiOutlineMail size={20} /> Email : shop@cafesne.com
                                        </span>
                                    </li>
                                    <li>
                                        <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                            <IoCallSharp size={20} /> Call us : +885 123 456 789
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div className="mb-4">
                                <p className="fw-bold mb-2 d-flex align-items-center gap-2">
                                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                        <i className="bi bi-share-fill" size={30}></i>
                                    </span>
                                    <span className={!loaded ? "placeholder shadow-sm" : ""}>
                                        Follow Us
                                    </span>
                                </p>
                                <div className={`d-flex gap-3 ms-3 ${!loaded ? 'placeholder-glow' : ''}`}>
                                    <a href="#" className="text-coffee-brown">
                                        <span className={!loaded ? 'placeholder rounded-circle' : ''} style={{ width: '40px', height: '40px', display: 'inline-block' }}>
                                            {loaded && <IoLogoGithub size={40}/>}
                                        </span>
                                    </a>
                                    <a href="#" className="text-coffee-brown">
                                        <span className={!loaded ? 'placeholder rounded-circle' : ''} style={{ width: '40px', height: '40px', display: 'inline-block' }}>
                                            {loaded && <IoLogoInstagram size={40} />}
                                        </span>
                                    </a>
                                    <a href="#" className="text-coffee-brown">
                                        <span className={!loaded ? 'placeholder rounded-circle' : ''} style={{ width: '40px', height: '40px', display: 'inline-block' }}>
                                            {loaded && <IoLogoFacebook size={40} />}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
