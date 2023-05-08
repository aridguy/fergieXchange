import React, { useEffect } from "react";
import './Section1.css';
// import planeImg from '../../Assets/plane.png'
import secImg from '../../Assets/sec.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="container-fluid fiona">
            <div className="row">
                <div className='col-md-6'>
                    <img className="full-widths" src={secImg} alt='sec' />
                </div>
                <div className="col-md-6">
                    <h1 className="fio" data-aos="fade-up" data-aos-delay="300">Enjoy the ease <br />
                        of technology and <br />
                        Next-level trading experience.</h1>
                    <p className="fioo" data-aos="fade-up" data-aos-delay="300">With accessible features and a user-friendly interface,
                        our app <br /> makes it easy for traders of all skill levels to navigate the markets and <br /> make informed decisions.
                        We offer real-time market data, powerful  <br />analysis tools,
                        and a range of customizable alerts to help You stay on <br /> top of your trades.</p>
                   {
                    // <img className="fii" width="150" src={planeImg} alt='plane' />
                   }

                </div>
            </div>
        </div>
    )
}

export default Section1;