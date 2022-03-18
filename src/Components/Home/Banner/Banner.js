import React from 'react';

const Banner = () => {
    return (
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mt-5 mb-5">
                        <h2 class="text-capitalize">fullStack web developer</h2>
                        <h1 class="text-uppercase">roman sheikh</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, rerum? Eligendi assumenda obcaecati sint ut, expedita deleniti similique itaque quae?</p>
                        <button class="btn main-btn text-uppercase">download cv</button>
                        <button class="btn main-btn-1 text-uppercase">contact me</button>
                    </div>
                    <div class="col-lg-5 mt-5 mb-5">
                        <div class="my-img">
                            <img src="img/roman.jpg" alt="" />
                        </div>
                    </div>
                
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#000" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,192C480,192,600,128,720,128C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </section>
    );
};

export default Banner;