import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../../style/Etc/splashscreen.css';

const SplashScreenComponent = (props) => {
    return (
    <>
    <div id="splashContainer">
        <div id="divLeaf" className="leaf-falling">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 600 600">
                <path d="M75,97 C131,277 352,476 497,503" fill="none" stroke="black" stroke-width="5" />
                <path d="M92,141 C75,488 279,494 497,503" fill="none" stroke="black" stroke-width="5" />
                <path d="M92,142 C212,226 356,309 497,503" fill="none" stroke="black" stroke-width="5" />
            </svg>
        </div> 
       
     </div>
    </>
  );
};

export default SplashScreenComponent;
