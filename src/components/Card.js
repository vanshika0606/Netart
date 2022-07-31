import React from 'react';
import img1 from '../images/container image 2.jpg';
import data from './data.js'
import './card.css';

const Card = () => {
  return (

    <div className='cards'>
  { 
    data.map((d)=>{
    
      return <div
      key={d.id}
      >
      <div className='card' >

        <div>
        <img src={d.img}className="img" alt='container image1'/>
        </div>
        <div className='card-body'>
            <p>{d.first}</p>
            <div  className="mid">
                {d.mid}
            </div>
            <div className='last'>
                {d.last}

            </div>
            <div className='button-link'>
            <button>Button Text</button>
            <p>Link</p>
            </div>

        </div>

      </div>
        </div>
      
      })
}
    </div>
  )
}

export default Card
