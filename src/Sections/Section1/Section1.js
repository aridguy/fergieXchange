import React from "react";
import './Section1.css';
import planeImg from '../../Assets/plane.png'
import secImg from '../../Assets/sec.png'

const Section1 = () => {
    return (
        <div className="container-fluid fiona">

            <div className="row">
                <div className='col-md-6'>
                    <img width="650" src={secImg} alt='sec' />
                </div>
                <div className="col-md-6">
                    <h3 className="fio">Enjoy the ease <br />
                        of technology and <br />
                        Next-level trading experience.</h3>
                    <p className="fioo">With accessible features and a user-friendly interface,
                        our app <br /> makes it easy for traders of all skill levels to navigate the markets and <br /> make informed decisions.
                        We offer real-time market data, powerful  <br />analysis tools,
                        and a range of customizable alerts to help You stay on <br /> top of your trades.</p>
                    <img className="fii" width="150" src={planeImg} alt='plane' />

                </div>
            </div>
        </div>
    )
}

export default Section1;