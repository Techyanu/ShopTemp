import React from 'react';
import { AiFillHome, AiFillMail, AiFillPhone, AiFillPrinter } from "react-icons/ai";
import FooteStyle from "../Style/FooteStyle.css"


const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-#f6f6f8 text-muted">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: '30px', fontWeight: '900' }}>SHOP. </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p><a href="#!" className="text-reset">Angular</a></p>
                            <p><a href="#!" className="text-reset">React</a></p>
                            <p><a href="#!" className="text-reset">Vue</a></p>
                            <p><a href="#!" className="text-reset">Laravel</a></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p><a href="#!" class="text-reset">Pricing</a></p>
                            <p><a href="#!" class="text-reset">Settings</a></p>
                            <p><a href="#!" class="text-reset">Orders</a></p>
                            <p><a href="#!" class="text-reset">Help</a></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><AiFillHome /> New York, NY 10012, US</p>
                            <p><AiFillMail /> info@example.com</p>
                            <p><AiFillPhone /> + 01 234 567 89</p>
                            <p><AiFillPrinter /> + 01 234 567 88</p>
                        </div>
                    </div>
                </div>

                <div className="text-center p-4" style={{ backgroundcolor: "rgba(0, 0, 0, 0.025)" }}>
                    © Develop By:
                    <a className="text-reset fw-bold" href='https://www.linkedin.com/in/anubhavsingh26/y'>  Anubhav Singh</a>
                </div>

            </footer>
        </>
    )
}

export default Footer;