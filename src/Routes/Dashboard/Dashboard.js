import React, { useState } from "react";
import './Admin.css';
import jQuery from "jquery";
import GiftCard1 from '../../Assets/frame1.svg'
import GiftCard2 from '../../Assets/frame2.svg'
import GiftCard3 from '../../Assets/amazon-gift-card-100-dollar-65311.png'

const Dashboard = () => {

    // ALL CRYPTOS WE SELLING
    const Cryptos = [
        {
            "id": 1,
            "name": "Bitcoin",
            "initial_name": "BTC",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_btc_3916c95ff6.svg"
        },
        {
            "id": 2,
            "name": "Ethereum",
            "initial_name": "ETH",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_eth_c61b11a5b1.svg"
        },
        {
            "id": 3,
            "name": "Ripple",
            "initial_name": "XRP",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_xrp_a270560f66.svg"
        },
        {
            "id": 4,
            "name": "Litecoin",
            "initial_name": "LTC",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_ltc_c5874b092a.svg"
        },
        {
            "id": 5,
            "name": "Cardano",
            "initial_name": "ADA",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_ada_9d833938ad.svg"
        },
        {
            "id": 6,
            "name": "Polkadot",
            "initial_name": "DOT",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_dot_379c6eb9d6.svg"
        },
        {
            "id": 7,
            "name": "Chainlink",
            "initial_name": "LINK",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_link_041cc5d348.svg"
        },
        {
            "id": 8,
            "name": "Stellar",
            "initial_name": "XLM",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_xlm_90c919b745.svg"
        },
        {
            "id": 9,
            "name": "Dogecoin",
            "initial_name": "DOGE",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_doge_0cbd52f330.svg"
        },
        {
            "id": 10,
            "name": "Dogecoin",
            "initial_name": "DOGE",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_doge_0cbd52f330.svg"
        },
        {
            "id": 11,
            "name": "Binance",
            "initial_name": "BNB",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_doge_0cbd52f330.svg"
        },
        {
            "id": 12,
            "name": "Tron",
            "initial_name": "TRX",
            "rate": 730.00,
            "image": "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_doge_0cbd52f330.svg"
        }

    ]

    // FILTER SEARCH ALL CRYPTOCURRENCIES
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCryptos = Cryptos.filter((crypto) => {
        return crypto.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

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

    // all scrreen navigations
    const [openOverView, setOpenOverView] = useState(true);
    const [openCrypto, setOpenCrypto] = useState(false);
    const [openGiftCard, setOpenGiftCard] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    // overview handler
    const handleOpenOverView = () => {
        setOpenOverView(true);
        setOpenCrypto(false);
        setOpenGiftCard(false);
        setOpenTransaction(false);
        setOpenSettings(false);
    }
    // crypto handler
    const handleOpenCrypto = () => {
        setOpenCrypto(true);
        setOpenOverView(false);
        setOpenGiftCard(false);
        setOpenTransaction(false);
        setOpenSettings(false);

    }
    // giftcard handlers
    const handleOpenGiftCard = () => {
        setOpenGiftCard(true);
        setOpenOverView(false);
        setOpenCrypto(false);
        setOpenTransaction(false);
        setOpenSettings(false);
    }
    // transaction handlers
    const handleOpenTransaction = () => {
        setOpenTransaction(true);
        setOpenOverView(false);
        setOpenCrypto(false);
        setOpenGiftCard(false);
        setOpenSettings(false);
    }
    // settings handler
    const handleOpenSettings = () => {
        setOpenSettings(true);
        setOpenOverView(false);
        setOpenCrypto(false);
        setOpenGiftCard(false);
        setOpenTransaction(false);
    }

    return (
        <div>

            <div className="page-wrapper chiller-theme toggled">
                <a href="/" id="show-sidebar" className="btn btn-sm btn-dark">
                    <i className="fas fa-bars"></i>
                </a>

              
                <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="/dashboard">FX-LIMITED</a>
                        <div id="close-sidebar"></div>
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
                            <li className="header-menu"><b>General</b></li>
                            <li className="sidebar-dropdown">
                                <b><i className="fa fa-tachometer-alt cursor"></i> <span onClick={handleOpenOverView} className="cursor">overview</span></b>
                            </li>
                            <li className="sidebar-dropdown">
                                <b><i className="fab fa-bitcoin cursor"></i> <span onClick={handleOpenCrypto} className="cursor">Trade Crypto</span></b>
                            </li>
                            <li className="sidebar-dropdown">
                                <b><i className="fas fa-hand-holding-heart cursor"></i> <span onClick={handleOpenGiftCard} className="cursor">Trade Gift Cards</span></b>
                            </li>
                            <li className="sidebar-dropdown">
                                <b><i className="fas fa-hand-holding-dollar cursor"></i> <span onClick={handleOpenTransaction} className="cursor">Transactions</span></b>
                            </li>
                            <li className="sidebar-dropdown">
                                <b><i className="fa fa-cog cursor"></i> <span onClick={handleOpenSettings} className="cursor">Settings</span></b>
                            </li>
                            
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
                        {openOverView &&
                            // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
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

                        {openCrypto &&
                            // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
                            <main>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <div className="searchWrap">
                                                <input value={searchTerm} onChange={handleSearch} className="form-control w-50" type="search" placeholder="search by keyword" />
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                </div>
                                <div className="row mt-4">
                                    {
                                        filteredCryptos.map(crypto => (
                                            <div key={crypto.id} className="col-md-4 mt-2">
                                                <div className="boxes">
                                                    <div className="coinWrap d-flex">
                                                        <img width='60' className="mx-4 mt-4" src={crypto.image} alt={crypto.name} />
                                                        <div className="mt-4">
                                                            <strong className="getBig">{crypto.initial_name}</strong> <br />
                                                            <i>{crypto.name}</i>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 mx-5 pt-5">
                                                        <h6>Rate: <del>N</del> {crypto.rate}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </main>
                        }

                        {openGiftCard &&
                            // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
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

                        {openTransaction &&
                            // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
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

                        {openSettings &&
                            // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
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