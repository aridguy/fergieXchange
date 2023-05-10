import React, { useState } from "react";
import './Admin.css';
import jQuery from "jquery";



const Dashboard = () => {
    const [openLogoutBtn, setOpenLogoutBtn] = useState(false);
    const handleOpenLogoutBtn = () => setOpenLogoutBtn((prevState) => !prevState)



    // all navigation bar toggler functions goes here
    jQuery(function ($) {
        $(".sidebar-dropdown > a").click(function () {
            $(".sidebar-submenu").slideUp(200);
            if ($(this).parent().hasClass("active")) {
                $(".sidebar-dropdown").removeClass("active");
                $(this).parent().removeClass("active");
            } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this).next(".sidebar-submenu").slideDown(200);
                $(this).parent().addClass("active");
            }
        });

        $("#close-sidebar").click(function () {
            $(".page-wrapper").removeClass("toggled");
        });

        $("#show-sidebar").click(function () {
            $(".page-wrapper").addClass("toggled");
        });
    });

    return (
        <div>

            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="/dashboard">
                    <i className="fas fa-bars"></i>
                </a>

                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a href="/dashboard">FX-LIMITED</a>
                            <div id="close-sidebar"><i className="fas fa-times"></i></div>
                        </div>

                        <div className="sidebar-header">
                            <div className="user-pic" >
                                <i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="user-info">
                                <span className="user-name"> <strong>Fergie Gbenga</strong></span>
                                <span className="user-status"><i className="fa fa-circle"></i> <span>Active</span></span>
                            </div>
                        </div>

                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu"><span>General</span></li>
                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-tachometer-alt"></i><span>overview</span></a>

                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-shopping-cart"></i><span>Crypto</span></a>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="far fa-gem"></i><span>Gift Cards</span></a>

                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-chart-line"></i><span>Transactions</span></a>

                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-cog"></i><span>Settings</span></a>

                                </li>


                                <li className="header-menu"><span>Extra</span></li>
                                <li><a href="/dashboard"><i className="fa fa-book"></i><span>Documentation</span><span className="badge badge-pill badge-primary">Beta</span></a></li>
                                <li><a href="/dashboard"><i className="fa fa-calendar"></i><span>Calendar</span></a></li>
                                <li><a href="/dashboard"><i className="fa fa-folder"></i><span>Examples</span></a></li>
                            </ul>
                        </div>

                    </div>



                </nav>


                <main className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7">
                                {
                                    // all dashboard contents here overview here
                                    <h2 className="orange">FERGIEXCHANGE</h2>
                                }
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex gap-5">
                                    <b className="text-dark">
                                        <i className="fa fa-bell fa-2x"></i>
                                        <span className="badge badge-pill badge-warning notification">3</span>
                                    </b>
                                    <section>
                                        <div className="d-flex gap-3">
                                            <i className="getBig">Welcome back </i>
                                            <div className=""><strong className="getBig">Gbenga Fergie</strong> &nbsp;&nbsp;
                                                <i onClick={handleOpenLogoutBtn} className="fas cursor fa-chevron-down"></i>
                                            </div>
                                            { openLogoutBtn &&
                                                // logout
                                                <div className="hidden-logout">
                                                    <strong className="getBig cursor">
                                                        Logout <i className="fa fa-power-off"></i>
                                                    </strong>
                                                </div>
                                            }
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </main>

            </div>

        </div>

    )
}

export default Dashboard;