import React from "react";
import './Footer.css';

const Footer = () =>{
    return(
        <div>
                 
    <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5 ">
    <div className="col-lg-6 col-md-6 mb-5 siii">
                 <p>Shawn Exchange is a company duly registered with RC <br /> Number: 1877341 under the Laws of the Federal Republic <br /> of Nigeria</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 sii">
                <h4 className="text-primary mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    
                    <a className="text-white mb-2" href="about.js"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                    <a className="text-white mb-2" href="service.js"><i className="fa fa-angle-right mr-2"></i> Services</a>
                    <a className="text-white mb-2" href="Faq.js"><i className="fa fa-angle-right mr-2"></i>Faq</a>
                    
                </div>
            </div>

            <div className="row pt-5 si">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Contact details</h4>
                <p><i className="fa fa-envelope mr-2"></i>info@shawnexchange.com</p>
                <p><i className="fa fa-phone-alt mr-2"></i>(234) 7036 6407 28</p>
                <p><i className="fa fa-phone-alt mr-2"></i>(234) 9160 0003 57</p>
                
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0 sip"  href="index.html"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0 sip "  href="index.html"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0 sip"  href="index.html"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0 sip"  href="index.html"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            
           
        </div>
        <div className="container border-top border-secondary pt-5">
            <p className="m-0 text-center text-white">
                &copy; <a className="text-white font-weight-bold" href="index.html">Copyrights 2022, The Shawn Exchange.</a>. All Rights Reserved. 
				
			
				
            </p>
        </div>
    </div>
    
        </div>
    )
}

export default Footer;