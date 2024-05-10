import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const AboutSkillRatingComponent = (props) => {
    const [cardData, setcardData] = useState([]);
    useEffect(() => {
        if (props.cardData != null){
            setcardData(props.cardData);
        }
      });
    //returns a rating element with 0 or more full/empty/half dots
    const getElementByRating =(num) => { 
        let maxRating = 5, minRating = 0;
        if (num > maxRating) num = maxRating;
        if (num < minRating) num = minRating;

        let numRoundedDown = Math.floor(num);
        const arr = [];
        for (let i = 0; i < maxRating; i++) {
            if (i < numRoundedDown)
            arr.push(
                <div className='dot'></div>
            );
            else {
                if (num - numRoundedDown > 0){
                    arr.push(
                        <div className='half-dot'></div>
                    );
                }
                else{
                    arr.push(
                        <div className='empty-dot'></div>
                    );
                }
            }
        }     
        return arr;
    }
  return (
    <>
        <div id={props.cardID} className="about_card about_card_skill" card-order={props.cardOrder} onClick={(e) => props.cardClickedEvent(e)}>
            <div className="card_container">
                <h4><strong>SKILLS</strong></h4>
                <div className="flexRow aboutMeItem">
                        <div className='aboutMeQ'>
                            <label></label>
                        </div>
                        <div className='aboutMeTime'>
                            <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23,11a1,1,0,0,0-1,1,10.034,10.034,0,1,1-2.9-7.021A.862.862,0,0,1,19,5H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V1a1,1,0,0,0-2,0V3.065A11.994,11.994,0,1,0,24,12,1,1,0,0,0,23,11Z M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"/>
                            </svg>
                        </div>
                        <div className='aboutMeA'>
                            {getElementByRating(0)}
                        </div>
                </div>  
                <hr></hr>
                {cardData.length == 0 ?(
                    <span>Oops! Data could not be retrieved.</span>
                ):(   
                    cardData.map(item => 
                        <div className="flexRow aboutMeItem">
                            <div className='aboutMeQ'>
                                <label>{item.key}</label>
                            </div>
                            <div className='aboutMeTime'>
                                <label>{item.time}</label>
                            </div>
                            <div className='aboutMeA'>
                                {getElementByRating(item.value)}
                            </div>
                        </div>    
                    )
                )}     
            </div>
        </div>
    </>
  );
};

export default AboutSkillRatingComponent;
