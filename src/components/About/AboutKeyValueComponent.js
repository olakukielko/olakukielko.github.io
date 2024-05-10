import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const AboutKeyValueComponent = (props) => {
    const [cardData, setcardData] = useState([]);
    useEffect(() => {
      if (props.cardData != null){
        setcardData(props.cardData);
      }
    });
  return (
    <>
        <div id={props.cardID} className="about_card about_card_key_val" card-order={props.cardOrder} onClick={(e) => props.cardClickedEvent(e)}>
          <div className="card_container">
            <h4><strong>{props.cardTitle}</strong></h4>
            {cardData.length == 0 ?(
              <span>Oops! Data could not be retrieved.</span>
            ):(             
              cardData.map(item => 
                <div className="flexRow aboutMeItem">
                  <div className='aboutMeQ'>
                    <label>{item.key}</label>
                  </div>
                  <div className='aboutMeA'>
                    <span className="about_item_value">{item.value}</span>
                  </div>
                </div>)
              )} 
            </div>
          </div>
    </>
  );
};

export default AboutKeyValueComponent;
