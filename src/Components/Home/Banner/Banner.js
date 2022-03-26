import React from 'react';
import { NavLink } from 'react-router-dom';
import Waves from '../../Sheared/Waves/Waves';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 mt-5">
                        <h2 className="text-capitalize">fullStack web developer</h2>
                        <h1 className="text-uppercase">roman sheikh</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum? Eligendi assumenda obcaecati sint ut, expedita deleniti similique itaque quae?</p>
                        <a className='btn cv-btn'>Download CV</a>
                        <NavLink className='btn contact-btn' to='/contact'>Contact Me</NavLink>
                    </div>
                    <div className="col-lg-5 mt-5">
                        <div className="my-img">
                            <img src="img/roman.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Waves></Waves>
        </section>
    );
};

export default Banner;