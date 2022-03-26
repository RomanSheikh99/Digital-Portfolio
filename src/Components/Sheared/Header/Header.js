import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {

    let activeStyle = {
        color: "#4086F4"
    };
    return (
        <header className="header navbar navbar-expand-lg navbar-light" id="home">
            <div className="container">
                <Link to='/' className='navbar-brand'>
                    <img className='logo' src="img/logo.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item text-uppercase">
                            <NavLink className='pages nav-link' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to="/home">home</NavLink>
                        </li>
                        <li className="nav-item text-uppercase ">
                            <NavLink className='pages nav-link' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to="/about">about</NavLink>
                        </li>
                        <li className="nav-item text-uppercase ">
                            <NavLink className='pages nav-link' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to="/blog">blog</NavLink>
                        </li>
                        <li className="nav-item text-uppercase ">
                            <NavLink className='pages nav-link' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to="/portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item text-uppercase ">
                            <NavLink className='pages nav-link' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } to="/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;