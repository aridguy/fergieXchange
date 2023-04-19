import React, { useState } from "react";
import './Home.css'
import LandImage from '../../Assets/undraw_bitcoin_re_urgq.svg'


const Home = () => {
    const [currentProfileTab, setCurrentProfileTab] = useState('mission');
    const handleCurrentProfileTab = (value) => {
        setCurrentProfileTab(value)
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5">
                        <div className="contentsHeader text-center">
                            <p className="heading1">
                                <span className="very-black">Trade</span>
                                <span>gift cards & crypto</span> <br />
                                <span className="very-black">with ease</span>
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
                <div className="row mt-5 pt-5">
                    <div className="col-md-5">
                        <h1 className="very-black">We pride ourselves in
                            giving the best rate for<br />
                            <span className="brand"> crypto and gift cards.</span>
                        </h1>
                        <p className="txts very-black">A platform for the best trading experiences of
                            digital assets which includes; Gift cards and Cryptocurrencies.
                        </p>
                    </div>
                    <div className="col-md-7">
                        <section className="mv-cv">
                            <div className="tab-wrap d-flex gap-5 center">
                                <button onClick={() => handleCurrentProfileTab('mission')} className="tabs1">Our Mission</button>
                                <button onClick={() => handleCurrentProfileTab('vision')} className="tabs1">Our Vision</button>
                                <button onClick={() => handleCurrentProfileTab('values')} className="tabs1">Our Core Values</button>
                            </div>
                        </section>

                        <div className="row p-3">
                            {
                                currentProfileTab === 'mission' &&
                                <div className="missionTab">
                                    OpenSea is building the world's most trusted and
                                    inclusive peer-to-peer NFT marketplace. OpenSea
                                    makes minting, purchasing and selling NFTs frictionless,
                                    and offers multi-chain options for creators and collectors
                                    of all kinds to own and shape their relationships directly.
                                </div>
                            }
                            {
                                currentProfileTab === 'vision' &&
                                <div className="visionTab">
                                    OpenSea strives to be the most trustworthy and
                                    secure marketplace for NFTs. Finding and eliminating
                                    current vulnerabilities is a top priority. OpenSea
                                    highly values our partnership with the vulnerability
                                    hunting community and as such we ensure all reports
                                    are reviewed by security experts and acted upon appropriately.
                                </div>
                            }
                            {
                                currentProfileTab === 'values' &&
                                <div className="valuesTab">
                                    OpenSea strives to be the most trustworthy and secure
                                    marketplace for NFTs. Finding and eliminating current
                                    vulnerabilities is a top priority. OpenSea highly values
                                    our partnership with the vulnerability hunting community
                                    and as such we ensure all reports are reviewed by
                                    security experts and acted upon appropriately.
                                    <div className="row mt-5 pt-3">
                                        <div className="col-md-1">Trust</div>
                                        <div className="col-md-2">Reliability</div>
                                        <div className="col-md-2">Transparency</div>
                                        <div className="col-md-2">Accountability</div>
                                        <div className="col-md-2">Excellence</div>
                                        <div className="col-md-3"></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home