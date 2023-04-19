import React from "react";
import './Section2.css';
import vec5Img from '../../Assets/vec5.png'
import vecImg from '../../Assets/vec.png'
import vec1Img from '../../Assets/vec1.png'
import vec2Img from '../../Assets/vec2.png'
import vec4Img from '../../Assets/vec4.png'
import vec3Img from '../../Assets/vec3.png'
import vec8Img from '../../Assets/vec8.png'
import vec7Img from '../../Assets/vec7.png'
import vec6Img from '../../Assets/vec6.png'
import deeImg from '../../Assets/dee.png'

const Section2 = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-5 pt-5">
                            <h2 className="bigger mx-5">
                                <span className="very-black">Trade</span>
                                <br /> <span className="gradients">Cryptocurrencies</span>
                                <br /> <span className="very-black">Effortlessly</span>
                            </h2>
                            <p className="bigTxt mx-5">
                                With a few taps on your smartphone, you can <br />
                                securely and efficiently trade a variety of <br />
                                digital assets.
                            </p>
                        </div>
                        <div className="crypticon mx-5">
                            <strong>We buy</strong> <br />
                            <img src={vecImg} alt="vec" /> &nbsp;
                            <img src={vec1Img} alt="vec" /> &nbsp;
                            <img src={vec2Img} alt="vec" /> &nbsp;
                            <img src={vec3Img} alt="vec" /> &nbsp;
                            <img src={vec4Img} alt="vec" /> &nbsp;
                            <img src={vec5Img} alt="vec" /> &nbsp;
                            <img src={vec6Img} alt="vec" /> &nbsp;
                            <img src={vec7Img} alt="vec" /> &nbsp;
                            <img src={vec8Img} alt="vec" /> &nbsp;
                            <span>+100 more</span>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img className="float-end mt-5" width='400' src={deeImg} alt="dee sectioon iconic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2