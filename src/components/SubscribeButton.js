import React ,{useState} from 'react'
import {BsSuitHeartFill} from "react-icons/bs"

const SubscribeButton = (props) => {

  const[subsButton, setSubsButton] = useState(false);

  return (
   <div >
       <div className='subscribeButton' 
       onClick={()=>{
           props.setSubsButton(true);
       }}
       > 
      <BsSuitHeartFill style={{marginRight:'5'}}/> Subscribe
    </div>
   </div>
 
  
   
  )
}

export default SubscribeButton
