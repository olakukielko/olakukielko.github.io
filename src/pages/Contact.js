import React, {useState, useContext, useEffect} from 'react'
import { TabContext } from "../App"
import ContactFormComponent from '../components/Contact/ContactFormComponent';
import MenuWheelComponent from '../components/Common/MenuWheelComponent';
import '../style/Contact/contact.css'

export default function Contact() {
  const {ActiveLink, setActiveLink} = useContext(TabContext)
  useEffect(() => {
    setActiveLink("Contact")
}, []);
  return (
    <div id="contactFormComponent">   
        <MenuWheelComponent></MenuWheelComponent>   
        <ContactFormComponent></ContactFormComponent>
     </div>
  )
}
