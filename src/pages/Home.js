import React, {useState, useContext, useEffect} from 'react'
import '../style/Home/home.css'
import { TabContext } from "../App"
import MenuWheelComponent from '../components/Common/MenuWheelComponent.js';
import WelcomeComponent from '../components/Home/WelcomeComponent.js';

export default function Home() {
  const {ActiveLink, setActiveLink} = useContext(TabContext)
  useEffect(() => {
    setActiveLink("Home");
  });
  return (
    <>
    <div id="home_area">
      <MenuWheelComponent></MenuWheelComponent>
      <WelcomeComponent></WelcomeComponent>
    </div>
    </>
  );
}
