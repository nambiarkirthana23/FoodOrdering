
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import account from "../Images/user.png"
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="main">

    <div className="icon">
      <FontAwesomeIcon icon={faBowlFood} />
      </div>

      <div className="heading"> 
     <ul >
        {/* <li>Home</li> */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
         <li><Link to="Service">Services</Link></li>
        <li><Link to="contactUs">Contact Us</Link></li>
        <li><Link to="/orderFood">Order Food</Link></li>
        <div className='account'> <Link to="/loginPage"><img className="account1" src={account} alt="account"></img></Link></div>
      
     </ul>
     
    </div>
    </div>
    
  );
}
