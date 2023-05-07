import React from "react";
import FaqIcon from "../../Assets/undraw_ether_re_y7ft.svg"


const Faq = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5 pt-4">
                        <h2 className="very-black">You've got questions!</h2>
                        <h2 className="very-black">We've got answers</h2>
                        <strong className="very-black">Didn’t see the answers you were looking for?</strong> <br />
                        <span className="orange">Talk to one of our reps</span>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-7 mt-5 pt-5">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        How do I receive my payment?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p>To get started on the website, please do the following</p>
                                        <ol>
                                            <li>Kindly visit the website and click on “Sign up” </li>
                                            <li>Input your details and click on ‘sign up’.</li>
                                            <li>A verification email will be sent to your email.</li>
                                            <li>Proceed to verify your email.</li>
                                        </ol>
                                        <strong> Once verified, you can log in to our website or download the app and start using our platform</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Why was my Gift Card Declined?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            It may have been declined if the card has been used or it's value
                                            is Null
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Are all Gift Cards and Crypto accepted?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p>We accept all Gift Cards and Crypto listed on our website.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour"
                                    >
                                        Why has my transaction not been confirmed?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p>It takes between 30 mins to some hours to get confirmed in the blockchain, after confirmation your account will be credited.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#flush-collapseFive"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFive"
                                    >
                                        Can transactions be reversed?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFive"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFive"
                                    data-mdb-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <p>A transaction can be reversed if there was an error with the attached image or value of said transaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="" width='400' src={FaqIcon} alt="faq iconics" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;