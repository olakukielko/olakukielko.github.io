import React, {useState, useEffect} from 'react'
import MeImg from "../../assets/img/me.png";
import AboutKeyValueComponent from './AboutKeyValueComponent';
import AboutSkillRatingComponent from './AboutSkillRatingComponent';
import {aboutPageInitAnimation} from "../../common/js/animate.js"
import { api_get } from '../../common/js/webservice.js';

export default function AboutComponent() {  
  const [aboutCardData, setAboutCardData] = useState({});
  useEffect(() => { setUpCards(); fetchCardData();}, []);
  useEffect(() => { aboutPageInitAnimation();});
  const getCardData = (idx) => {  
    if (idx == 1){
      return aboutCardData["card_one"];
    }
    else if (idx == 2){
      return aboutCardData["card_two"];
    }
    else {
      return null;
    }
  }
  //bring the clicked card to the front by moving down the other cards
  const cardClicked = (e) => {
    if (e != null){
      // all cards & total count
      let allCards = document.querySelectorAll(".about_card");
      let cardCount = allCards.length;
      // get card clicked
      let cardClicked = e.target.closest(".about_card");
      let cardClickedOrder = cardClicked.getAttribute("card-order");
      // 1 card height
      let cardHeightOffsetREM = 30;
      // how much to offset cards by 
      let cardTitleOffsetREM = 4;
      Array.prototype.forEach.call(allCards, (card, i) =>{ 
        let thisCardOrder = card.getAttribute("card-order");
        if (thisCardOrder <= cardClickedOrder){
          //expand clicked card and any cards with lower order
          let calculatedYOffsetExpand = 4 * i;
          card.style.transform = "translateY(" +calculatedYOffsetExpand.toString() +  "rem)";
        }
        else{    
            //hide any carrd with higher order
            let calculatedYOffset = cardHeightOffsetREM - ((cardCount - i) * cardTitleOffsetREM);
            card.style.transform = "translateY(" +calculatedYOffset.toString() +  "rem)";
        }
      });
    }


  }
  //set up cards on first load, offset in order
  const setUpCards = (e) => {
    let cardHeightOffsetREM = 30;
    let cardTitleOffsetREM = 4;
    let allCards = document.querySelectorAll(".about_card");
    let cardCount = allCards.length;
    Array.prototype.forEach.call(allCards, (card, i) => {
        //z index increments by 10 in order
        card.style.zIndex = (i+1) * 10;
        //first card always has a Y offset of 0
        if (i==0) {
          card.style.transform = "translateY(0rem)";
        }
        else{
          //all consecutive cards should calculate a Y offset starting from the bottom
          //ex. bottommost card has offset of 20 MINUS (1 * TITLE OFFSET)
          let calculatedYOffset = cardHeightOffsetREM - ((cardCount - i) * cardTitleOffsetREM);
          card.style.transform = "translateY(" +calculatedYOffset.toString() +  "rem)";
        }
    })
  }
  const fetchCardData = () => {
    api_get('bb/getAboutCards/0').then(data => { 
      if (data){
        setAboutCardData(data);
      }
    });
  }
  return (
      <div id="about_container" className="flexCol">
        <div id="about_header">
          <img src={MeImg}></img>
          <div className="about_paragraph left">
            <p>
              <strong>My first exposure to code  </strong> was while playing Neopets in middle school.
              The website provides <a href="https://www.neopets.com/help/html1.phtml" target="_blank">an HTML guide</a> for its users to learn and implement throughout their profile.
            </p> 
          </div>
          <div className="about_paragraph right">
            <p>
              <strong>In high school,  </strong>  my interests gravitated towards the creative arts.
              I drew portraits of my favorite subjects on pen and paper and a Wacom tablet.  I cut together music videos on YouTube centered around my favorite TV shows.
            </p> 
          </div>
          <div className="about_paragraph left">
            <p>
              <strong>Today, I'm a full-stack developer with a solid foundation in the .NET and Mobile stacks. </strong> 
              I have a keen eye for UI Design and the User Experience, and I pour my heart and creativity into all aspects of my work.
            </p> 
          </div>
        </div>
        <div id="about_main">
          <AboutKeyValueComponent cardID="about_card_one" cardClickedEvent={cardClicked} cardData={getCardData(1)} cardTitle="ABOUT" cardOrder="0"></AboutKeyValueComponent>
          <AboutSkillRatingComponent cardID="about_card_two" cardClickedEvent={cardClicked} cardData={getCardData(2)} cardOrder="1"></AboutSkillRatingComponent>
          <AboutKeyValueComponent cardID="about_card_three" cardClickedEvent={cardClicked} cardTitle="THIRD CARD" cardOrder="2"></AboutKeyValueComponent>
        </div>
      </div>
    )
}
