import React from "react";
import Logo from "../../Assets/Logo.jpg"
import Swal from 'sweetalert2'


const Navbar = () => {
   const handleCheck = () =>{
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
   }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand me-2" href="/">
                        <img
                            src={Logo}
                            height="16"
                            alt=" Logo"
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
                            <li onClick={handleCheck} className="nav-item">
                                <span className="nav-link" href="/">About Us</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="/">Services</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="/">Faq</span>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-primary me-3">
                                Continue as guest
                            </button>
                            <button type="button" className="btn btn-primary me-3">
                                Login/Register
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;