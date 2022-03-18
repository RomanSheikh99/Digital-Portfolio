import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="logo">
                            <a to="index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 text-right">
                        <div className="text-right our-nav">
                            <ul className="list-inline mt-3 text-right">
                                <li className="list-inline-item text-uppercase ">
                                    <Link className="active" to="/home">home</Link>
                                </li>
                                <li className="list-inline-item text-uppercase ">
                                    <Link className="" to="/about">about</Link>
                                </li>
                                <li className="list-inline-item text-uppercase ">
                                    <Link className="" to="/blog">blog</Link>
                                </li>
                                <li className="list-inline-item text-uppercase ">
                                    <Link className="" to="/portfolio">portfolio</Link>
                                </li>
                                <li className="list-inline-item text-uppercase ">
                                    <Link className="" to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;