import React, {useState, useContext, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../../style/Common/header.css'
import {useNavigate} from "react-router-dom";
import { TabContext } from "../../App";
import {headerClickedToHomePage} from "../../common/js/animate.js"

const HeaderComponent = (props) => {
    const {ActiveLink, setActiveLink} = useContext(TabContext);
    const navigate = useNavigate();
    useEffect(() => { hideOrShowNavbar()});
    //Home page - hide name in navbar and run clouds
    //All other pages - show name in navbar and hide clouds
    const hideOrShowNavbar = () => {
        if (document.getElementById("welcomeComponent") != null){
            document.querySelector("#header_container>.mainName").style.display = "none";
            Array.prototype.forEach.call(document.querySelectorAll("#header_container>.faster_cloud"), (el)=>{
                el.style.position = "absolute";
                el.style.display = "block";
            });
            Array.prototype.forEach.call(document.querySelectorAll("#header_container>.slower_cloud"), (el)=>{
                el.style.position = "absolute";
                el.style.display = "block";
            });
        }
        else{
            document.querySelector("#header_container>.mainName").style.display = "flex";
            Array.prototype.forEach.call(document.querySelectorAll("#header_container>.faster_cloud"), (el)=>{
                el.style.display = "none";
            });
            Array.prototype.forEach.call(document.querySelectorAll("#header_container>.slower_cloud"), (el)=>{
                el.style.display = "none";
            });
        }
    }
  return (
    <>
        <div id="header_container">
            <svg className="faster_cloud cloud-float-left-to-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 184">
                <path fill="var(--neutral)" d=" M 79.72 49.60 C 86.00 37.29 98.57 29.01 111.96 26.42 C 124.27 24.11 137.53 26.15 148.18 32.90 C 158.08 38.78 165.39 48.87 167.65 60.20 C 176.20 57.90 185.14 56.01 194.00 57.73 C 206.08 59.59 217.92 66.01 224.37 76.66 C 227.51 81.54 228.85 87.33 229.23 93.06 C 237.59 93.33 246.22 95.10 253.04 100.19 C 256.69 103.13 259.87 107.67 258.91 112.59 C 257.95 118.43 252.78 122.38 247.78 124.82 C 235.27 130.43 220.23 130.09 207.98 123.93 C 199.33 127.88 189.76 129.43 180.30 128.57 C 173.70 139.92 161.70 147.65 148.86 149.93 C 133.10 153.26 116.06 148.15 104.42 137.08 C 92.98 143.04 78.96 143.87 66.97 139.04 C 57.75 135.41 49.70 128.00 46.60 118.43 C 43.87 109.95 45.81 100.29 51.30 93.32 C 57.38 85.18 67.10 80.44 76.99 78.89 C 74.38 69.20 74.87 58.52 79.72 49.60 Z"></path>
            </svg>
            <svg className="slower_cloud cloud-float-left-to-right-slower" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path fill-opacity=".65" fill="var(--neutral)" d="m-399.71 10.766c-5.256 0-9.776 3.064-11.77 7.453-1.067-.837-2.406-1.336-3.861-1.336-3.425 0-6.211 2.765-6.299 6.207-.912.346-1.753.834-2.504 1.434-4.168.921-7.599 3.728-9.289 7.449-1.113-.873-2.51-1.393-4.03-1.393-.73 0-1.43.126-2.086.348-1.68-2.164-4.339-3.568-7.344-3.568-3.762 0-6.999 2.192-8.426 5.334v.002c-.764-.599-1.722-.957-2.764-.957-2.452 0-4.447 1.979-4.51 4.443-2.531.96-4.332 3.428-4.332 6.322 0 3.419 2.513 6.246 5.773 6.691v.061h11.27c1.124 3.562 4.191 6.247 7.947 6.76v.088h33.658v-.016c3.479-.204 6.418-2.421 7.709-5.516h17.549v-.001c3.221-.189 5.773-2.889 5.773-6.193 0-2.759-1.783-5.096-4.246-5.902 1.361-1.534 2.195-3.556 2.195-5.779 0-4.451-3.318-8.119-7.59-8.611.018-.271.027-.544.027-.82 0-6.898-5.755-12.49-12.855-12.49" transform="matrix(.59524 0 0 .59524 282.38 18.608)"></path>
            </svg>
            <svg className="slower_cloud cloud-float-left-to-right-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path fill-opacity=".65" fill="var(--neutral)" d="m-399.71 10.766c-5.256 0-9.776 3.064-11.77 7.453-1.067-.837-2.406-1.336-3.861-1.336-3.425 0-6.211 2.765-6.299 6.207-.912.346-1.753.834-2.504 1.434-4.168.921-7.599 3.728-9.289 7.449-1.113-.873-2.51-1.393-4.03-1.393-.73 0-1.43.126-2.086.348-1.68-2.164-4.339-3.568-7.344-3.568-3.762 0-6.999 2.192-8.426 5.334v.002c-.764-.599-1.722-.957-2.764-.957-2.452 0-4.447 1.979-4.51 4.443-2.531.96-4.332 3.428-4.332 6.322 0 3.419 2.513 6.246 5.773 6.691v.061h11.27c1.124 3.562 4.191 6.247 7.947 6.76v.088h33.658v-.016c3.479-.204 6.418-2.421 7.709-5.516h17.549v-.001c3.221-.189 5.773-2.889 5.773-6.193 0-2.759-1.783-5.096-4.246-5.902 1.361-1.534 2.195-3.556 2.195-5.779 0-4.451-3.318-8.119-7.59-8.611.018-.271.027-.544.027-.82 0-6.898-5.755-12.49-12.855-12.49" transform="matrix(.59524 0 0 .59524 282.38 18.608)"></path>
            </svg>
            <div className='spacer'></div>
            <div className="flexCol mainName" onClick={(e) => headerClickedToHomePage(navigate)}>
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

export default HeaderComponent;
