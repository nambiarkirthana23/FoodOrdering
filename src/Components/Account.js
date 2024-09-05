import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Account() {
  return (
    <div className="userAccount">
      <div><label ><p>We are so excited to see you again!</p><span>*</span></label></div>
      <div> <label >EMAIL OR PHONE NUMBER <span>*</span></label></div>
      <div> <input></input></div>
      <div> <label  >PASSWORD <span>*</span></label></div>
      <div> <input></input></div>
      <div>Forgot your password?</div>
      <div><button>Log In</button></div>
      <div> <Link to="/createAccount"> Need an account?Register</Link></div>
      <div></div>
   
    </div>
  )
}
