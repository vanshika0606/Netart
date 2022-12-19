import React, { useState } from "react";
import { FiShare } from "react-icons/fi";
import "./style.css";
import { RWebShare } from "react-web-share";

const ShareButton = () => {

  return (
    <div>

<RWebShare
        data={{
          text: "Web Share - GfG",
          url: "http://localhost:3000",
          title: "Pillar",
        }}
        onClick={() => console.log("shared successfully!")}
      >
         <div  
     className="share">
        <FiShare size="18" className="share-button" />
      </div>
      </RWebShare>    
    </div>
    
  );
};

export default ShareButton;
