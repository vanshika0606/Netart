import React, { useEffect, useState } from "react";
import Card from "./Card";
import sideImage from "./sideImage.jpg";
import { BsYoutube } from "react-icons/bs";
import { RiArrowDownSLine ,RiArrowUpSLine} from "react-icons/ri";
import YoutubeEmbed from "./YoutubeVideo";

const Cards = () => {
 const [arrowTapOne , setArrowTapOne]= useState(false)
 const [arrowTapTwo , setArrowTapTwo]= useState(false)

 const ArrowClickOne=()=>{
    setArrowTapOne(!arrowTapOne)
 }
 const ArrowClickTwo=()=>{
    setArrowTapTwo(!arrowTapTwo)
 }


  return (
    <div>
      <Card
        heading="Weekly Training"
        description="Get the inside view of what I did for training every week! FULL BREAKDOWN"
      />

      <Card
        heading="Weekly Meals"
        description="Get the inside view of what I did for training every week! FULL BREAKDOWN"
      />
      <Card
        heading="Weekly Training"
        description="Get the inside view of what I did for training every week! FULL BREAKDOWN"
      />

      <div className="card img_buy">
        <img src={sideImage} />
        <div style={{ margin: "auto" }}>
          <div className="subscribeButton unlockSubscribe buy">
            Buy for $4.99
          </div>
        </div>
      </div>

      <div className="card speed">
        <BsYoutube size={20} />
        <div>
          <h4>Speed Training Playlist</h4>
          <h5>Get faster for any sport with these speed tips</h5>
        </div>
      </div>

      

      <div onClick={ArrowClickOne} className="card arrow card_arrow_video">
        <div className="speed card_video">
        <BsYoutube size={20} />
        <div>
          <h4>Workout Vlog With Batman!</h4>
        </div>
       
        <RiArrowDownSLine  color="white" size={35} className={arrowTapOne==false?'arrowup':'arrowdown'}   />
        </div>
        {arrowTapOne && <div style={{margin:'10px'}}>

        <YoutubeEmbed embedId="fJGDnvoLKFA" />
        </div>}
      </div>



      <div className="card form">
        <h4>Join the Squad</h4>
        <h5>know when I drop merch & speed vlogs</h5>

        <form>
          <div>
            <input placeholder="Email" type="email" id="email" />
          </div>
          <div>
            <input placeholder="Phone #" type="tel" id="phone" />
          </div>
          <div className="radioButton">
            <div>
              <input
                type="radio"
                id="Fan"
                name="im"
                className="custom-radio box-shadow"
                value="I'm a Fan"
                checked
              />

              <label for="Fan">I'm a Fan</label>
            </div>

            <div>
              <input
                type="radio"
                id="Brand"
                name="im"
                value="I'm a Brand"
                className="custom-radio box-shadow"
              />
              <label for="Brand">I'm a Brand</label>
            </div>

            <div>
              <input
                type="radio"
                id="Creater"
                name="im"
                value="I'm a Creater"
                className="custom-radio"
              />
              <label for="Creater">I'm a Creater</label>
            </div>
          </div>
          <div className="subscribeButton unlockSubscribe buy submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div onClick={ArrowClickTwo} className="card arrow card_arrow_video">
        <div className="speed card_video">
        <BsYoutube size={20} />
        <div>
          <h4>Racing people for $$$</h4>
        </div>
       
        <RiArrowDownSLine  color="white" size={35} className={arrowTapTwo==false?'arrowup':'arrowdown'}   />
        </div>
        {arrowTapTwo && <div style={{margin:'10px'}}>

        <YoutubeEmbed embedId="RGj5K54dd58" />
        </div>}
      </div>
    </div>
  );
};

export default Cards;
