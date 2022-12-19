import React from 'react'
import {IoMdHeart} from "react-icons/io"
import sideImage from "./sideImage.jpg"
import {useEffect, useState} from 'react';

const Card = (props) => {


      const [windowSize, setWindowSize] = useState(getWindowSize());
    
      useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
        
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);



  return (
    <div className='card'>
      <img src={sideImage} width="160" />
      <div style={{marginTop:"25px", marginLeft:"20px", marginRight:"30px"}}>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <div className='subscribeButton unlockSubscribe'>
          <IoMdHeart 
          style={{marginRight:'10'}}/> { windowSize.innerWidth>750? "Subscribe to Unlock" : "Subscribe" }
        </div>
       
      </div>
    </div>
  )
}


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

export default Card
