import React from "react";
import Navbar from "../Navbar";
import './sidenav.css';
import dashboard from '../../images/dashboard.png';
import firm from '../../images/firm.png';
import impact from '../../images/impact.png';
import replish from '../../images/replish.png';
import sku from '../../images/sku.png';
import HomePage from "../HomePage";

const SideNav = () => {

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 back-color">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Stantech AI</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item flex">
                                <a href=" " className="nav-link align-middle px-0">
                                    <img alt="imgg" src={dashboard} height="15" width="15" />
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href=" " className="nav-link px-0 align-middle">
                                    <img src={firm} alt="imgg" height="15" width="15" />
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Firm</span></a>

                            </li>
                            <li>
                                <a href=" " className="nav-link px-0 align-middle">
                                    <img src={impact} alt="imgg" height="15" width="15" />
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Impact</span> </a>
                            </li>
                            <li>
                                <a href=" " className="nav-link px-0 align-middle">
                                    <img src={replish} height="15" alt="imgg" width="15" />
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Replenishment</span> </a>
                            </li>
                            <li>
                                <a href=" " className="nav-link px-0 align-middle">
                                    <img src={sku} height="15" alt="imgg" width="15" />
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">SKU</span> </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="col top-nav">
                    <Navbar />
                    <HomePage />
                </div>
            </div>
        </div>
    )
};

export default SideNav;