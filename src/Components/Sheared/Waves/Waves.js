import React from 'react';
import './Waves.css'

const Waves = () => {
    return (
        <div className='wave-container'>
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out width-100 delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 176.53333333333336,182.26666666666665 353.0666666666667,164.53333333333333 525,156 C 696.9333333333333,147.46666666666667 864.2666666666667,148.13333333333335 1016,157 C 1167.7333333333333,165.86666666666665 1303.8666666666668,182.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff" width="100%" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
        </div>
    );
};

export default Waves;