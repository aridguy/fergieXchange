import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer container-fluid position-relative bg-dark py-5 ha">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-5 mb-5">
                            
                            <p className="text-light"> Shawn Exchange is a company duly registered with RC <br /> Number: 1877341 under the Laws of the Federal Republic of <br /> Nigeria.</p>
                            
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-lg btn-light btn-lg-square mr-2" href="about.html"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-lg btn-light btn-lg-square mr-2" href="about.html"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg btn-light btn-lg-square mr-2" href="about.html"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg btn-light btn-lg-square" href="about.html"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-lg-5">
                            <div className="row">


                                <div className="col-sm-6 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Quick Links</h5>
                                    <div className="d-flex flex-column justify-content-start">
                                        
                                        <a className="text-white-50 mb-2" href="about.js"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                                        <a className="text-white-50 mb-2" href="section1.js"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                                        <a className="text-white-50 mb-2" href="Faq.js"><i className="fa fa-angle-right mr-2"></i>Faq</a>
                                      
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-5">
                                    <h5 className="text-white text-uppercase mb-4">Contact details</h5>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white-50 mb-2" href="about.js"><i className="fa fa-envelope mr-2"></i>info@shawnexchange.com</a>
                                        <a className="text-white-50 mb-2" href="about.js"><i className="fa fa-phone-alt mr-2"></i>(234) 7036 6407 28</a>
                                        <a className="text-white-50 mb-2" href="about.js"><i className="fa fa-phone-alt mr-2"></i>(234) 9160 0003 57</a>
                                    
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-light border-top py-4 chii">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p className="m-0 text-white">&copy; <a href="about.html">Your Site Name</a>. All Rights Reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;