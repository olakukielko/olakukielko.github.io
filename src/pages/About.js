import React, {useState, useContext, useEffect} from 'react'
import { TabContext } from "../App"
import AboutComponent from "../components/About/AboutComponent"
import MenuWheelComponent from '../components/Common/MenuWheelComponent'
import "../style/About/about.css"

export default function About() {
  const {ActiveLink, setActiveLink} = useContext(TabContext)
  useEffect(() => {
    setActiveLink("About")
  });
  return (
    <>
    <div id="about_area">
      <MenuWheelComponent></MenuWheelComponent>
      <AboutComponent></AboutComponent>
    </div>
    </>
  )
}