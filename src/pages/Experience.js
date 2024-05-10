import React, {useState, useContext, useEffect} from 'react'
import { TabContext } from "../App"
import ExperienceComponent from '../components/Experience/ExperienceComponent';
import MenuWheelComponent from '../components/Common/MenuWheelComponent';

export default function Experience() {
  const {ActiveLink, setActiveLink} = useContext(TabContext)
  useEffect(() => {
    setActiveLink("Experience");
  });
  return (
    <div id="experienceComponent">  
        <MenuWheelComponent></MenuWheelComponent>    
        <ExperienceComponent></ExperienceComponent>
     </div>
  )
}
