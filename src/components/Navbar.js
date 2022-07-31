import React , {useState} from 'react'
import Logo from '../images/logo.svg'
import './navbar.css'
import Fire from '../images/fire icon.svg'
import Profile from  '../images/profile avatar.jpg'
import {Link} from 'react-router-dom';


const Navbar = () => {


    const[click,  setClick] = useState(0)

    const[toggle , setToggle] = useState(0)

    const clicked = ()=>{
        
        if(click==2 || click==1){
            setClick(0);
        }else{
            setClick(1)
        }
       
       
    }
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
            <img src={Logo} alt="logo"/>
            <i className="fa fa-bars" aria-hidden="true" onClick={ clicked}></i>
        </div>

        
        <div className="list-images">
        
        <ul className={click ? "hide show":"hidee hide"}>
            <li>Nav text</li>
            <li>Nav text one</li>
            <li>Nav text two</li>
            <Link to="/contact" id="list-contact" >
            <li >Contact us</li>
            </Link>
        </ul>
         
        
          
        <div className='fire-avatar'>
           <span >
           <img src={Fire} alt='fire icon'/>
           </span>
           <img src={Profile} className="avatar" alt='profilePic'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
