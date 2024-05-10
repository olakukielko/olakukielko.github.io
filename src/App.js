import './style/Common/global.css';
import {BrowserRouter as Router, Route, Routes, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Help from './pages/Help';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import FooterComponent from './components/Common/FooterComponent';
import React, {useState, useEffect} from 'react'
import $ from "jquery"
import HeaderComponent from './components/Common/HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/Common/vars.css"
import "./style/Common/animation.css"
import "./style/common.css"
import "./style/fonts.css"
import {getCookie} from "./common/js/common.js"

const apiUrl = process.env.REACT_APP_API_URL;
export const TabContext = React.createContext(null);

function App() {
  const [ActiveLink, setActiveLink] = useState("Home");
  const IsHomePage = () => {
    return ActiveLink.toLowerCase().trim() == "home";
  }
  const getToken = async () => {
    try {
      let url = `${apiUrl}bb/token/`;
      let data = {
          username: '{username}',
          password: '{password}'
        };
      const token = await fetch(url,{
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors',
      credentials:'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
        response.json()
      })
      .then(
        (result) => {
        },
        (error) => {

        }
      )
    } catch (err) {
    }
  };
  //hide overflow-y on Home Page
  const addStylingForHomePageOnly = () => {
    if (IsHomePage()){
       document.getElementsByClassName("app")[0].style.overflowY = "hidden";
    }
    else{
       document.getElementsByClassName("app")[0].style.overflowY = "unset";
    }
  }
  useEffect(() => {
      addStylingForHomePageOnly();
      //getToken();
  });
  return (
    <TabContext.Provider value={{ ActiveLink: ActiveLink, setActiveLink: setActiveLink}}>          
      <div className="app">
        <Router>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home"element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="/help" element={<Help/>} /> */}
            <Route path="/experience" element={<Experience/>} />
          </Routes>
        </Router>
        <FooterComponent></FooterComponent>
      </div>
    </TabContext.Provider>
  );
}

export default App;
