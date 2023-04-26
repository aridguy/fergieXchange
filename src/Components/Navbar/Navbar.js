import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                <div className="container">

                    <a className="navbar-brand me-2" href="/">
                        <img
                            src="https://pps.whatsapp.net/v/t61.24694-24/268498010_3136025683288017_8236285941597212071_n.jpg?ccb=11-4&oh=01_AdTz7yiIzuhkVACBYtPY3mNykTg6B0O5TbaOcMTM5QWt3Q&oe=643FA9ED"
                            height="16"
                            alt="MDB Logo"
                        /> FERGIEXCHANGE LIMITED

                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarButtonsExample">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Faq</a>
                            </li>
                        </ul>


                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-primary me-3">
                                Login
                            </button>
                            <button type="button" className="btn btn-primary me-3">
                                Sign up for free
                            </button>
                            <a
                                className="btn btn-dark px-3"
                                href="/" role="button"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;