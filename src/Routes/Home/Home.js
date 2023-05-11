import React, { useState, useEffect } from "react";
import './Home.css'
import LandImage from '../../Assets/undraw_bitcoin_re_urgq.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Section1 from '../../Sections/Section1/Section1';
import Section2 from '../../Sections/Section2/Section2';
import Section3 from '../../Sections/Section3/Section3';
import Faq from '../../Sections/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
    const navigate = useNavigate()

    const handleCheck = () => {
        let timerInterval
        Swal.fire({

            html: 'checking login details <b></b>.',
            timer: 4000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'you have successfully logged in!',
                    showConfirmButton: true,
                    confirmButtonText: 'Continue to Dashboard!',
                    confirmButtonColor: '#336799',
                    preConfirm: () => {
                        navigate('/dashboard')
                    },
                }
                )
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'you have successfully logged in!',
                    showConfirmButton: true,
                    confirmButtonText: 'Continue to Dashboard!',
                    confirmButtonColor: '#336799',
                    preConfirm: () => {
                        navigate('/dashboard')
                    },
                }
                )
            }
        })
    }

    // initiating the aos animation
    useEffect(() => {
        AOS.init();
    }, [])
    const [openLogin, setOpenLogin] = useState(false);


    const [currentProfileTab, setCurrentProfileTab] = useState('mission');
    const [openLoginTabs, setOpenLoginTabs] = useState(false);
    const [openRegTab, setOpenRegTab] = useState(false);
    const [openGuestGo, setGuestGo] = useState(true);

    // for mission and vision statements
    const handleCurrentProfileTab = (value) => {
        setCurrentProfileTab(value);
    }

    // closing the entire login popup
    const handleCloseLogin = () => setOpenLogin(true);
    const closeLogin = () => {
        setOpenLogin(false);
    }

    // defaulst guest login screen
    const handleGuests = () => {
        setGuestGo(true);
        setOpenRegTab(false);
        setOpenLoginTabs(false);

    }
    // switching to register screen
    const handleRegisterNewUser = () => {
        setOpenRegTab(true);
        setGuestGo(false);
        setOpenLoginTabs(false);

    }
    // switching to loging existing user screen
    const handleLoginUsers = () => {
        setOpenLoginTabs(true);
        setOpenRegTab(false);
        setGuestGo(false);


    }




    return (
        <div className="ani-backgrd">
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5">
                        <div className="contentsHeader text-center">
                            <p className="heading1" data-aos="zoom-in" data-aos-delay="400">
                                <span className="very-black">Trade</span>
                                <span> gift cards & crypto</span> <br />
                                <span className="very-black">with ease</span>
                            </p>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <span className="txts very-black" data-aos="zoom-in" data-aos-delay="500">
                                        Enjoy a seamless and hassle free experience, trading your gift cards and cryptocurrencies with
                                        The Shawn Exchange.
                                    </span>
                                    <div><button data-aos="zoom-in" data-aos-delay="600" onClick={handleCloseLogin} className="getStartedBtn mt-3">Get Started</button></div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                        <img data-aos="zoom-in" data-aos-delay="700" className="text-center picsLanding mt-4 full-widths" src={LandImage} alt="lading page icon" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-md-5" data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine" data-aos-delay="300">
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
                                <div className="missionTab" data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" data-aos-delay="200">
                                    OpenSea is building the world's most trusted and
                                    inclusive peer-to-peer NFT marketplace. OpenSea
                                    makes minting, purchasing and selling NFTs frictionless,
                                    and offers multi-chain options for creators and collectors
                                    of all kinds to own and shape their relationships directly.
                                </div>
                            }
                            {
                                currentProfileTab === 'vision' &&
                                <div className="visionTab" data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
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
                                <div className="valuesTab" data-aos="fade-up"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine">
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
            {openLogin &&
                // CONTINUE AS GUEST MODAL
                <section id="popBg" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <section className="innerBackg">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            {openGuestGo &&
                                                // continues as guest
                                                <div>
                                                    <div className="mt-5 pt-5">
                                                        <h5>Continue as guest</h5>
                                                        <p><input type="text" className="form-control" placeholder="guest name e.g Makanaki" /></p>
                                                        <p><input type="email" className="form-control" placeholder="makanaki@aol.com" /></p>
                                                        <button onClick={handleCheck} className="btn btn-primary btn-block">Continue to Dashboard</button>
                                                        <div className="row mt-4">
                                                            <div className="col-md-4"><span onClick={handleRegisterNewUser} className="mt-3 cursor hyperlinks"> <i class="fas fa-user-group"></i> New account!</span></div>
                                                            <div className="col-md-4"><span onClick={handleLoginUsers} className="mt-3 cursor hyperlinks mx-4"> <i className="fas fa-user-tie"></i> Login</span></div>
                                                            <div className="col-md-4"><span onClick={handleGuests} className="mt-3 cursor hyperlinks mx-4"> <i class="fas fa-user-secret"></i> Guest</span></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            }

                                            {openRegTab &&
                                                // continues as guest
                                                <div>
                                                    <div className="mt-5 pt-1">
                                                        <h5>Register!</h5>
                                                        <p><input type="text" className="form-control" placeholder="create a username" required /></p>
                                                        <p><input type="text" className="form-control" placeholder="Full Name" required /></p>
                                                        <p><input type="email" className="form-control" placeholder="makanaki@aol.com" required /></p>
                                                        <p><input type="password" className="form-control" placeholder="create password" required /></p>
                                                        <p><input type="password" className="form-control" placeholder="confirm password" required /></p>
                                                        <button className="btn btn-primary btn-block">Register</button>
                                                        <div className="row mt-4">
                                                            <div className="col-md-4"><span onClick={handleRegisterNewUser} className="mt-3 cursor hyperlinks"> <i class="fas fa-user-group"></i> New account!</span></div>
                                                            <div className="col-md-4"><span onClick={handleLoginUsers} className="mt-3 cursor hyperlinks mx-4"> <i className="fas fa-user-tie"></i> Login</span></div>
                                                            <div className="col-md-4"><span onClick={handleGuests} className="mt-3 cursor hyperlinks mx-4"> <i class="fas fa-user-secret"></i> Guest</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                            {openLoginTabs &&
                                                // continues as guest
                                                <div>
                                                    <div className="mt-5 pt-5">
                                                        <h5>Login here</h5>
                                                        <p><input type="email" className="form-control" placeholder="email" /></p>
                                                        <p><input type="password" className="form-control" placeholder="password" /></p>
                                                        <button className="btn btn-primary btn-block">Login</button>
                                                        <div className="row mt-4">
                                                            <div className="col-md-4"><span onClick={handleRegisterNewUser} className="mt-3 cursor hyperlinks"> <i class="fas fa-user-group"></i> New account!</span></div>
                                                            <div className="col-md-4"><span onClick={handleLoginUsers} className="mt-3 cursor hyperlinks mx-4"> <i className="fas fa-user-tie"></i> Login</span></div>
                                                            <div className="col-md-4"><span onClick={handleGuests} className="mt-3 cursor hyperlinks mx-4"> <i class="fas fa-user-secret"></i> Guest</span></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            }

                                        </div>
                                        <div className="col-md-2">
                                            <p className="cursor mt-3" onClick={closeLogin}>X</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                    </div>
                </section>
            }
            {
                // ALL OTHER HOME PAGE SECTION
                <div>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Faq />
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Home