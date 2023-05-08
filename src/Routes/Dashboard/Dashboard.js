import React from "react";
import './Admin.css';
import jQuery from "jquery";

// 
// import { ProSidebarProvider } from 'react-pro-sidebar';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Dashboard = () => {

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
                            <a href="/dashboard">pro sidebar</a>
                            <div id="close-sidebar"><i className="fas fa-times"></i></div>
                        </div>

                        <div className="sidebar-header">
                            <div className="user-pic" >
                                <i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
                            </div>
                            <div className="user-info">
                                <span className="user-name"> <strong>Joe Chien</strong></span>
                                <span className="user-role">Administrator</span>
                                <span className="user-status"><i className="fa fa-circle"></i> <span>Online</span></span>
                            </div>
                        </div>

                        <div className="sidebar-search">
                            <div>
                                <div className="input-group">
                                    <input type="text" className="form-control search-menu" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-menu">
                            <ul>
                                <li className="header-menu"><span>General</span></li>
                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-tachometer-alt"></i><span>Dashboard</span><span className="badge badge-pill badge-warning">New</span></a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><a href="/dashboard">Dashboard 1 <span className="badge badge-pill badge-success">Pro</span></a></li>
                                            <li><a href="/dashboard">Dashboard 2</a></li>
                                            <li><a href="/dashboard">Dashboard 3</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-shopping-cart"></i><span>E-commerce</span><span className="badge badge-pill badge-danger">3</span></a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><a href="/dashboard">Products <span>Pro</span></a></li>
                                            <li><a href="/dashboard">Orders</a></li>
                                            <li><a href="/dashboard">Credit cart</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="far fa-gem"></i><span>Components</span></a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><a href="/dashboard">General</a></li>
                                            <li><a href="/dashboard">Panels</a></li>
                                            <li><a href="/dashboard">Tables</a></li>
                                            <li><a href="/dashboard">Icons</a></li>
                                            <li><a href="/dashboard">Forms</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-chart-line"></i><span>Charts</span></a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><a href="/dashboard">Pie chart</a></li>
                                            <li><a href="/dashboard">Line chart</a></li>
                                            <li><a href="/dashboard">Bar chart</a></li>
                                            <li><a href="/dashboard">Histogram</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="sidebar-dropdown">
                                    <a href="/dashboard"><i className="fa fa-globe"></i><span>Maps</span></a>
                                    <div className="sidebar-submenu">
                                        <ul>
                                            <li><a href="/dashboard">Google maps</a></li>
                                            <li><a href="/dashboard">Open street map</a></li>
                                        </ul>
                                    </div>
                                </li>


                                <li className="header-menu"><span>Extra</span></li>
                                <li><a href="/dashboard"><i className="fa fa-book"></i><span>Documentation</span><span className="badge badge-pill badge-primary">Beta</span></a></li>
                                <li><a href="/dashboard"><i className="fa fa-calendar"></i><span>Calendar</span></a></li>
                                <li><a href="/dashboard"><i className="fa fa-folder"></i><span>Examples</span></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="sidebar-footer">
                        <a href="/dashboard">
                            <i className="fa fa-bell"></i>
                            <span className="badge badge-pill badge-warning notification">3</span>
                        </a>
                        <a href="/dashboard">
                            <i className="fa fa-envelope"></i>
                            <span className="badge badge-pill badge-success notification">7</span>
                        </a>
                        <a href="/dashboard">
                            <i className="fa fa-cog"></i>
                            <span className="badge-sonar"></span>
                        </a>
                        <a href="/dashboard">
                            <i className="fa fa-power-off"></i>
                        </a>
                    </div>

                </nav>


                <main className="page-content">
                    <div className="container-fluid">

                       {
                        // all dashboard contents here
                        <h2>FERGIEXCHANGE</h2>
                       }

                        <hr />
                    </div>
                </main>

            </div>

        </div>

    )
}

export default Dashboard;