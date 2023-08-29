import React, { useState } from "react";
import "./Admin.css";
import jQuery from "jquery";
import GiftCard1 from "../../Assets/frame1.svg";
import GiftCard2 from "../../Assets/frame2.svg";
import GiftCard3 from "../../Assets/amazon-gift-card-100-dollar-65311.png";
import { HandleLogoutFunction } from "../../GlobalFunctions/Helper";
// import Draggable from "react-draggable";

const Dashboard = () => {
  // ALL CRYPTOS WE SELLING
  const Cryptos = [
    {
      id: 1,
      name: "Bitcoin",
      initial_name: "BTC",
      rate: 890.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_btc_3916c95ff6.svg",
    },
    {
      id: 2,
      name: "Ethereum",
      initial_name: "ETH",
      rate: 830.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_eth_c61b11a5b1.svg",
    },
    {
      id: 3,
      name: "Ripple",
      initial_name: "XRP",
      rate: 730.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_xrp_a270560f66.svg",
    },
    {
      id: 4,
      name: "Litecoin",
      initial_name: "LTC",
      rate: 845.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_ltc_c5874b092a.svg",
    },
    {
      id: 5,
      name: "Cardano",
      initial_name: "ADA",
      rate: 832.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_ada_9d833938ad.svg",
    },
    {
      id: 6,
      name: "Polkadot",
      initial_name: "DOT",
      rate: 730.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_dot_379c6eb9d6.svg",
    },
    {
      id: 7,
      name: "Chainlink",
      initial_name: "LINK",
      rate: 790.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_link_041cc5d348.svg",
    },
    {
      id: 8,
      name: "Stellar",
      initial_name: "XLM",
      rate: 7790.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_xlm_90c919b745.svg",
    },
    {
      id: 9,
      name: "Dogecoin",
      initial_name: "DOGE",
      rate: 788.0,
      image:
        "https://nynm-quidax-strapi.s3.amazonaws.com/crypto_doge_0cbd52f330.svg",
    },
  ];

  // FILTER SEARCH ALL CRYPTOCURRENCIES
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCryptos = Cryptos.filter((crypto) => {
    return crypto.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //   const [openLogoutBtn, setOpenLogoutBtn] = useState(false);
  //   const handleOpenLogoutBtn = () => setOpenLogoutBtn((prevState) => !prevState);
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

  const [incNoti, setIncNoti] = useState(0);
  const incNotiHandler = () => {
    setIncNoti((prevState) => prevState + 1);
  };

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
  };
  // crypto handler
  const handleOpenCrypto = () => {
    setOpenCrypto(true);
    setOpenOverView(false);
    setOpenGiftCard(false);
    setOpenTransaction(false);
    setOpenSettings(false);
  };
  // giftcard handlers
  const handleOpenGiftCard = () => {
    setOpenGiftCard(true);
    setOpenOverView(false);
    setOpenCrypto(false);
    setOpenTransaction(false);
    setOpenSettings(false);
  };
  // transaction handlers
  const handleOpenTransaction = () => {
    setOpenTransaction(true);
    setOpenOverView(false);
    setOpenCrypto(false);
    setOpenGiftCard(false);
    setOpenSettings(false);
  };
  // settings handler
  const handleOpenSettings = () => {
    setOpenSettings(true);
    setOpenOverView(false);
    setOpenCrypto(false);
    setOpenGiftCard(false);
    setOpenTransaction(false);
  };
  const handleLogout = HandleLogoutFunction();

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="page-wrapper chiller-theme toggled">
        <b id="show-sidebar" className="btn btn-sm btn-dark">
          <i className="fas fa-bars"></i>
        </b>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand white">
              <b>FX-LIMITED</b>
              <div id="close-sidebar">
                <i className="fas fa-bars white togglerHideSideBar"></i>
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
              </div>
              <div className="user-info">
                <span className="user-name">
                  {" "}
                  <strong>Fergie Gbenga</strong>
                </span>
                <span className="user-status">
                  <i className="fa fa-circle"></i> <span>Active to trade</span>
                </span>
              </div>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <b>General</b>
                </li>
                <li className="">
                  <b>
                    <i className="fa fa-tachometer-alt cursor"></i>{" "}
                    <span onClick={handleOpenOverView} className="cursor">
                      overview
                    </span>
                  </b>
                </li>
                <li className="">
                  <b>
                    <i className="fab fa-bitcoin cursor"></i>{" "}
                    <span onClick={handleOpenCrypto} className="cursor">
                      Trade Crypto
                    </span>
                  </b>
                </li>
                <li className="">
                  <b>
                    <i className="fas fa-hand-holding-heart cursor"></i>{" "}
                    <span onClick={handleOpenGiftCard} className="cursor">
                      Trade Gift Cards
                    </span>
                  </b>
                </li>
                <li className="">
                  <b>
                    <i className="fas fa-hand-holding-dollar cursor"></i>{" "}
                    <span onClick={handleOpenTransaction} className="cursor">
                      Transactions
                    </span>
                  </b>
                </li>
                <li className="">
                  <b>
                    <i className="fa fa-cog cursor"></i>{" "}
                    <span onClick={handleOpenSettings} className="cursor">
                      Settings
                    </span>
                  </b>
                </li>
                <li className="">
                  <b>
                    <i className="fas fa-power-off"></i>{" "}
                    <span onClick={handleLogout} className="cursor">
                      Logout
                    </span>
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* page contents starats from here*/}
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
                    <i
                      onClick={incNotiHandler}
                      className="fa fa-bell fa-2x"
                    ></i>
                    <span className="badge badge-pill badge-warning notification">
                      {incNoti}
                    </span>
                  </b>
                  <section>
                    <div className="d-flex gap-3">
                      <i className="getBig">Welcome back </i>
                      <div className="">
                        <strong className="getBig">Gbenga Fergie</strong>{" "}
                        &nbsp;&nbsp;
                        <i className="fas cursor fa-chevron-down"></i>
                      </div>
                      {
                        // openLogoutBtn && (
                        // logout
                        // <div className="hidden-logout">
                        //   <strong
                        //     onClick={handleLogout}
                        //     className="getBig cursor"
                        //   >
                        //     Logout <i className="fa fa-power-off"></i>
                        //   </strong>
                        // </div>
                        //   )
                      }
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <hr />
            {openOverView && (
              // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
              <main>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div>
                      <img
                        width="70%"
                        src={GiftCard3}
                        alt="gift card iconics"
                      />
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
                      <img
                        className="scallerCoin"
                        width="100%"
                        src={GiftCard1}
                        alt="gift card iconics"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <img
                        className="scallerCoin"
                        width="95%"
                        src={GiftCard2}
                        alt="gift card iconics"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-1">
                    <div></div>
                  </div>
                  <div className="col-md-10">
                    <div className="wrapTransactions">
                      <div className="mt-5">
                        <span>Recent Transactions</span>
                        <p className="getBig">
                          Transactions you make will appear here
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div></div>
                  </div>
                </div>
              </main>
            )}

            {openCrypto && (
              // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
              <main>
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <div className="searchWrap">
                        <input
                          value={searchTerm}
                          onChange={handleSearch}
                          className="form-control w-50"
                          type="search"
                          placeholder="search by keyword"
                        />
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row mt-4">
                  {filteredCryptos.map((crypto) => (
                    <div key={crypto.id} className="col-md-4 mt-2">
                      <div className="boxes">
                        <div className="coinWrap d-flex">
                          <img
                            width="60"
                            className="mx-4 mt-4"
                            src={crypto.image}
                            alt={crypto.name}
                          />
                          <div className="mt-4">
                            <strong className="getBig">
                              {crypto.initial_name}
                            </strong>{" "}
                            <br />
                            <i>{crypto.name}</i>
                          </div>
                        </div>
                        <div className="mt-4 mx-5 pt-5">
                          <h6>
                            Rate: <del>N</del> {crypto.rate}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            )}

            {openGiftCard && (
              // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
              <main>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="black">Gift Cards</h2>
                      <p>You can buy gift cards for your friends and family.</p>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-7">
                          <div>
                            <fieldset>
                              <legend>Trade your gift cards here</legend>
                              <form>
                                <p>
                                  <select className="form-control">
                                    <option>Select Giftcard</option>
                                    <option value="Itunes">Itunes</option>
                                    <option>GooglePlay</option>
                                    <option>Amazon</option>
                                    <option>Steam</option>
                                  </select>
                                </p>
                                <p>
                                  <select className="form-control">
                                    <option>Select Region</option>
                                    <option value="Itunes">
                                      United States Of America
                                    </option>
                                  </select>
                                </p>
                                <p>
                                  <select className="form-control">
                                    <option>Select Value</option>
                                    <option value="Itunes">100</option>
                                    <option value="Itunes">200</option>
                                    <option value="Itunes">500</option>
                                  </select>
                                </p>
                                <div className="row">
                                  <span>Choose Number of card to sale</span>
                                  <div className="col-md-2">
                                    <div className="boxOne">X1</div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="boxOne">X2</div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="boxOne">X3</div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="boxOne">X4</div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="boxOne">X5</div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="boxOne">X6</div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="imageUploadPlace">
                                    {uploadedImage && (
                                      <img
                                        className="giftCardUploaded"
                                        src={uploadedImage}
                                        alt="Uploaded"
                                      />
                                    )}
                                  </div>
                                  <span className="red">
                                    Please take a picture of your physical card.
                                    Take multiple if there are more than one
                                    card
                                  </span>
                                  <input
                                    type="file"
                                    name=""
                                    id=""
                                    onChange={handleImageUpload}
                                  />
                                </div>
                                <button className="btn btn-warning btn-block mt-3 submit-btn">
                                  Submit
                                </button>
                              </form>
                            </fieldset>
                          </div>
                        </div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      
                        <div className="parentCalc">
                          <div className="row">
                            <div className="col-md-8">
                              <h3>Exchange Rate</h3>
                            </div>
                            <div className="col-md-4">
                              <h5>N849,949/$</h5>
                            </div>
                          </div>
                          <div className="row mt-5">
                            <div className="col-md-12">
                              <span>Amount you will receive</span>
                              <h3>N0.0034</h3>
                            </div>
                          </div>
                        </div>
                     
                    </div>
                  </div>
                </div>
              </main>
            )}

            {openTransaction && (
              // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
              <main>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h3 className="mt-5">Transactions you make will appear here</h3>
                    </div>
                  </div>
                </div>
              </main>
            )}

            {openSettings && (
              // OVERVIEW SCREEN BELOW....INITIAL SCREEN ON LOGIN TO DASHBOARD
              <main>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div>
                      <img
                        width="70%"
                        src={GiftCard3}
                        alt="gift card iconics"
                      />
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
                      <img
                        className="scallerCoin"
                        width="100%"
                        src={GiftCard1}
                        alt="gift card iconics"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <img
                        className="scallerCoin"
                        width="95%"
                        src={GiftCard2}
                        alt="gift card iconics"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-1">
                    <div></div>
                  </div>
                  <div className="col-md-10">
                    <div className="wrapTransactions">
                      <div className="mt-5">
                        <span>Recent Transactions</span>
                        <p className="getBig">
                          Transactions you make will appear here
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div></div>
                  </div>
                </div>
              </main>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
