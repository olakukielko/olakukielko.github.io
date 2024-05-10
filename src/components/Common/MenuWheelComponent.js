import React, {useContext, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../../style/Common/menu.css'
import { TabContext } from "../../App.js"
import {Link} from "react-router-dom";

const MenuWheelComponent = (props) => {
  const {ActiveLink, setActiveLink} = useContext(TabContext)
  return (
    <>
     <div id="menuWheelComponent" className="centerContent">
        <div className="menuWheel">
            <div className='stick'></div>
            <div className="menuItem">
              <svg className="menuBolt" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" fill="var(--accent)"></polygon>
              </svg> 
              <Link to={"/about"} >ABOUT</Link>
            </div>   
            <div className="menuItem">
              <svg className="menuBolt" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" fill="var(--accent)"></polygon>
              </svg> 
              <Link to={"/experience"}>PROJECTS</Link>
            </div>
            <div className="menuItem">
              <svg className="menuBolt" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" fill="var(--accent)"></polygon>
              </svg> 
              <Link to={"/contact"} >CONTACT</Link>
            </div>
        </div>
     </div>
    </>
  );
};

export default MenuWheelComponent;
