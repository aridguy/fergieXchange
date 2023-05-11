import React, { useState } from "react";
import './Admin.css';
import jQuery from "jquery";
import GiftCard1 from '../../Assets/frame1.svg'
import GiftCard2 from '../../Assets/frame2.svg'
import GiftCard3 from '../../Assets/amazon-gift-card-100-dollar-65311.png'



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

    const [incNoti, setIncNoti] = useState(0)
    const incNotiHandler = () => {
        setIncNoti((prevState) => prevState + 1)
    }

    return (
        <div>

            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark">
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
                                    <a><i className="fa fa-tachometer-alt cursor"></i><span className="cursor">overview</span></a>

                                </li>

                                <li className="sidebar-dropdown">
                                    <a><i className="fab fa-bitcoin cursor"></i><span className="cursor">Crypto</span></a>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a><i className="fas fa-hand-holding-heart cursor"></i><span className="cursor">Gift Cards</span></a>

                                </li>

                                <li className="sidebar-dropdown">
                                    <a><i className="fas fa-hand-holding-dollar cursor"></i><span className="cursor">Transactions</span></a>

                                </li>

                                <li className="sidebar-dropdown">
                                    <a><i className="fa fa-cog cursor"></i><span className="cursor">Settings</span></a>

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
                                        <i onClick={incNotiHandler} className="fa fa-bell fa-2x"></i>
                                        <span className="badge badge-pill badge-warning notification">{incNoti}</span>
                                    </b>
                                    <section>
                                        <div className="d-flex gap-3">
                                            <i className="getBig">Welcome back </i>
                                            <div className=""><strong className="getBig">Gbenga Fergie</strong> &nbsp;&nbsp;
                                                <i onClick={handleOpenLogoutBtn} className="fas cursor fa-chevron-down"></i>
                                            </div>
                                            {openLogoutBtn &&
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
                        {
                            <main>
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <div>
                                            <img width="70%" src={GiftCard3} alt="gift card iconics" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="sellingRate p-5 getBig">
                                            <small>Crypto buying rate</small> <br />
                                            <h4>N720.00</h4> <br />
                                            <small>per dollar</small>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <img className="scallerCoin" width="100%" src={GiftCard1} alt="gift card iconics" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <img className="scallerCoin" width="95%" src={GiftCard2} alt="gift card iconics" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-1">
                                        <div>

                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="wrapTransactions">
                                            <div className="mt-5">
                                                <span>Recent Transactions</span>
                                                <p className="getBig">Transactions you make will appear here</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </main>
                        }
                    </div>
                </main>

            </div>

        </div>

    )
}

export default Dashboard;