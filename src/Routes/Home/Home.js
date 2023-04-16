import React from "react";
import './Home.css'
import LandImage from '../../Assets/ambassadors_eafahi.png.svg'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5">
                        <div className="contentsHeader text-center">
                            <p className="heading1">
                                <span className="very-black">Trade</span> <span>gift cards & crypto</span> <br /> <span className="very-black">with ease</span>
                            </p>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <span>
                                        Enjoy a seamless and hassle free experience, trading your gift cards and cryptocurrencies with
                                        The Shawn Exchange.
                                    </span>
                                    <button className="getStartedBtn mt-3">Get Started</button>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <div className="potoLanding text-center">
                                    <img src={LandImage} alt="lading page icon" />
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;