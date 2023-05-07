import React from "react";
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <main className="mt-5 pt-5 mb-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <i className="display-7">
                                FergieXchange Limited is an online platform where you can sell/trade your
                                bitcoins for cash. we sell in bulk and also in small quantity. Our website
                                also provide you with updates about all cryptocurrencies, this includes the
                                current price and official rate. also the rate at which we buy
                                cryptocurrencies from sellers is visible on our platfrom.
                            </i>
                            <hr />
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-2">
                            <strong>Quicklinks</strong>
                            <p>About</p>
                            <p>Service</p>
                            <p>Faq</p>
                        </div>
                        <div className="col-md-3">
                            <strong>Contact details</strong>
                            <p>info@fergieXchange.com</p>
                            <p>generankz@gmail.com</p>
                            <p>(+234) 909-030-3366</p>
                            <p>6a Abiodun street ifako, 100215, Lagos, Nigeria</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3"></div>
                        <div className="col-md-4">
                            <i>Copyrights 2022, The FergieXchange. All rights reserved.</i>
                        </div>
                        <div className="col-md-1">&nbsp;&nbsp;&nbsp;</div>
                        <div className="col-md-4">
                            <div className="d-flex gap-5">
                                <FaFacebook className="size-3" />
                                <BsTwitter className="size-3" />
                                <BsInstagram className="size-3" />
                                <FaLinkedin className="size-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <i className="sizesmall">Site developed by <span className="cursor hyperlinks"> CodeTECHS</span></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;