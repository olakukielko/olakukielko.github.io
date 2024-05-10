import React, {useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {useNavigate} from "react-router-dom";
import {homePageToAboutPage, homePageInitAnimation} from "../../common/js/animate.js"

const WelcomeComponent = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    homePageInitAnimation();
  });
  return (
    <>
     <div id="welcomeComponent" className="centerContent">
        <div className="mainName flexCol" onClick={(e) => homePageToAboutPage(navigate)}>
                    <span className='nameTitle'>ALEKSANDRA KUKIELKO</span>
                    <span className='nameSubtitle'>Full Stack Developer</span>
                <svg id="logoLeaf" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600">
                    <path d="M75,97 C131,277 352,476 497,503" fill="none" stroke="#be5a38" stroke-width="15" />
                    <path d="M92,141 C75,488 279,494 497,503" fill="none" stroke="#be5a38" stroke-width="15" />
                    <path d="M92,142 C212,226 356,309 497,503" fill="none" stroke="#be5a38" stroke-width="15" />
                </svg>
            </div>
     </div>
    </>
  );
};

export default WelcomeComponent;
