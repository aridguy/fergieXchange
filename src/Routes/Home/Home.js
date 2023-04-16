import React from "react";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5">
                        <div className="contentsHeader text-center">
                            <p className="heading1">
                                Trade <span>gift cards & crypto</span> <br /> with ease
                            </p>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <span>
                                        Enjoy a seamless and hassle free experience, trading your gift cards and cryptocurrencies with
                                        The Shawn Exchange.
                                    </span>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;