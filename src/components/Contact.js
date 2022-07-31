import React from 'react'
import Navbar from './Navbar'
import './contact.css'
import GoogleMapReact from 'google-map-react'
import Map from './Map.js'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='map-contact'>
        <div className='contact_box'>
              <p>Contact Us</p>
              <div className='contact-info'>
            <input placeholder='Name' type="text" />
            <input placeholder='Phone' type="text" />
            <input placeholder='Email' type="text" />
            <textarea rows="4" cols="20" placeholder='message'></textarea>
            <button>Send</button>
            </div>
        </div>
        <div>
            <Map/>
        </div>
      </div>
    </div>
  )
}

export default Contact
