import React from 'react'
import Icon from './Icon'
import {HiEnvelope} from "react-icons/hi2"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsTwitch , BsTwitter, BsYoutube, BsLinkedin , BsSpotify} from "react-icons/bs"
import {FaDiscord, FaTiktok} from "react-icons/fa"
import {CgArrowLongDown} from "react-icons/cg"

const All_icons = () => {
  return (
    <div>
    <div className='all-icons'>
        <Icon icon={<HiEnvelope/>} />
        <Icon icon={<AiOutlineInstagram/>} />
        <Icon icon={<BsTwitch/>} />
        <Icon icon={<BsTwitter/>} />
        <Icon icon={<BsYoutube/>} />
        <Icon icon={<FaDiscord/>} />
        <Icon icon={<FaTiktok/>} />
        <Icon icon={<BsLinkedin/>} />
        <Icon icon={<BsSpotify/>} />
        <Icon icon={<BsSpotify/>} />
    </div>
    <h4 style={{color:'white', textAlign:'center'}}>
        Exclusive Content
    </h4>
    <h4 style={{color:'white', textAlign:'center', marginTop:'40px'}}>
        Get access to all the following content 
        <span style={{backgroundColor:'#0779ffe8', marginLeft:'5px', display:'inline'}}>
        <CgArrowLongDown />
        </span>
    </h4>
    
    </div>
  )
}

export default All_icons
