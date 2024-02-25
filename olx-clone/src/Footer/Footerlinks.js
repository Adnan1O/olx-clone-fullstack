import React from 'react'
import './Footerlinks.css'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';




function Footerlinks() {
  return (
    <div className='footerlinks'>
       
        <div className="space"></div>
        <div className="footer-container">
      <div className="popular">
        <h6>POPULAR LOCATIONS</h6>
        <p>Kolkata</p>
        <p>Mumbai</p>
        <p>Chennai</p>
        <p>Pune</p>
      </div>
      <div className="trending">
<h6>TRENDING LOCATIONS</h6>
        <p>Bhubaneshwar</p>
        <p>Hyderabad</p>
        <p>Chandigarh</p>
        <p>Nashik</p>
      </div>
      <div className="about">
    <h6>ABOUT US</h6>
    <p></p>
        <p>About OLX Group</p>
        <p>Careers</p>
        <p>Contact Us</p>
        <p>OLXPeople</p>
       <p>Waah Jobs</p>
         </div>
      <div className="olx">
<h6>OLX</h6>
<p></p>
        <p>Help</p>
        <p>Sitemap</p>
        <p>Legal & Privacy information</p>
        <p>Blog</p>
        <p>OLX Autos Sell Car</p>
        <p>Vulnerability Disclosure Program</p>
      </div>
      <div className="follow">
<h6>FOLLOW US</h6>
<div className='f-icons'> 
    <BsFacebook/>
    <AiOutlineInstagram/>
    <AiOutlineTwitter/>
    <BsPlayCircle/>
    </div>
   
      </div>
      
      </div>
      <div className="space"></div>
    </div>
  )
}

export default Footerlinks
