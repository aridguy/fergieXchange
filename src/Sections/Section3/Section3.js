import React from "react";
import './Section3.css';
import ituImg from '../../Assets/GiftCardIconics.svg'
import fraImg from '../../Assets/Frame.png'

const Section3 = () => {
    return (
        <div className="container">
            <div className="row mt-5 pt-4">
                <div className='col-md-6'>
                    <img className="pt-5 full-widths" src={ituImg} alt='itu' />
                </div>
                <div className="col-md-6">
                    <h3 className="f very-black">Sell Gift cards at <br /> Competitive rates.</h3>
                    <p className="g">Sell Gift cards from over 20 countries around <br /> the world.</p>
                    <section className="t">
                        <button className="it"><img width="20" src={fraImg} alt='Frame' />seamless trading   </button>
                        <br />
                        <button className="it"><img width="20" src={fraImg} alt='Frame' />Instant payments</button>
                        <br />
                        <button className="it"><img width="20" src={fraImg} alt='Frame' />Jaw dropping rates</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section3;