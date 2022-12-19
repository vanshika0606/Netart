import React, { useState } from "react";
import ShareButton from "./ShareButton.js";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BiMap } from "react-icons/bi";
import SubscribeButton from "./SubscribeButton.js";
import Profile from "./profile.PNG";
import { BsFillBellFill } from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import {RxCross2} from "react-icons/rx"

const Image_part = (props) => {
  

  return (
    <div className="upper-part">
      <div className="share-subscribe">
        <ShareButton />
        <SubscribeButton
          setSubsButton={props.setSubsButton}
          subsButton={props.subsButton}
        />
      </div>
      <div className="image-part">
        <img src={Profile} width="90px" />
        <div>
          <h3>
            J Johnson Jr
            <span
              style={{
                borderRadius: "50%",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            >
              <HiOutlineCheckBadge size="20" className="tick-button" />
            </span>
          </h3>
        </div>
        <p>Created by different elements Athlete & CEO</p>
        <p>
          <BiMap /> Raleigh, NC
        </p>
      </div>

      {props.subsButton && (
        <div className="OuterBox-Modal">
        <div className="subsModal">
          <div className="outer-img-modal"></div>
          <div>
            <img src={Profile} className="small-img" />
            <div className="john">J Johnson Jr</div>
            <div className="dollar15">$15/mo</div>
            <div onClick={()=>{
              props.setSubsButton(false)
      }}className="SubsCross"><RxCross2/></div>
          </div>
          <div className="ready-box">
            <h2>Ready for exclusive content & products? Subscribe today.</h2>

            <div className="threeLine">
              <h4>
                <BsFillBellFill className="icons-three" />
                Access to all exclusive content
              </h4>

              <h4>
                <WiStars className="icons-three" /> Never miss a creator update
              </h4>
              <h4>
                <FaHeartBroken className="icons-three" />
                Cancel your subscription anytime
              </h4>
            </div>

            <div className="subscribeDollar"> Subscribe for $15</div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Image_part;
