import React from "react";
import './Home.css'
import LandImage from '../../Assets/ambassadors_eafahi.png.png'

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
                                    <span className="txts very-black">
                                        Enjoy a seamless and hassle free experience, trading your gift cards and cryptocurrencies with
                                        The Shawn Exchange.
                                    </span> 
                                    <div><button className="getStartedBtn mt-3">Get Started</button></div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                        <img width='800' className="text-center picsLanding mt-4" src={LandImage} alt="lading page icon" />

                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="very-black">We pride ourselves in
                            giving the best rate for<br />
                            <span className="brand"> crypto and gift cards.</span>
                        </h1>
                        <p className="txts very-black">We pride ourselves in
                            giving the best rate for
                            crypto and gift cards.
                        </p>
                    </div>
                    <div className="col-md-7">/ljbs/bvlja'fjbag'lfjn'galnd'olakwfn'okbna'fkj'lf</div>
                </div>
            </div>
        </div>
    )
}

export default Home;