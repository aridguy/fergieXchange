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
        <div className="container-fluid  bg-dark  ">

            <div className="row">
                <div className='col-md-6'>
                    <h3 className="blue">Trade <br />
                        <b className="blu">Cryptocurrency</b> <br />
                        Effortlessly</h3>
                    <p className="bl">With a few taps on your smartphone, you can <br />
                     securely and efficiently trade a variety of <br />
                     digital assets.</p>
                     <b className="b">We buy</b>
                     <div className="bluee"> 
                     <img width="50" src={vec5Img} alt='vec5' />
                     <img width="50" src={vecImg} alt='vec' />
                     <img width="50" src={vec1Img} alt='vec1' />
                     <img width="50" src={vec2Img} alt='vec2' />
                     <img width="50" src={vec4Img} alt='vec4' />
                     <img width="50" src={vec3Img} alt='vec3' />
                     <img width="50" src={vec8Img} alt='vec8' />
                     <img width="50" src={vec7Img} alt='vec7' />
                     <img width="50" src={vec6Img} alt='vec6' />
                    
                     <a className="">+100 more</a>
                
                     
                     </div>
                </div>
                <div className="col-md-6">
                <img className="pt-5" width="450" src={deeImg} alt='dee' />


                </div>
            </div>
        </div>
    )
}

export default Section2;