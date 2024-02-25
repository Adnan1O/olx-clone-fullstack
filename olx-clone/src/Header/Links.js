import React, { useState } from 'react'
import "./Links.css"
import { AiOutlineDown } from 'react-icons/ai';
//import Catogories from './Catogories';
import { Link } from 'react-router-dom';

function Links() {
  const [opencatogory, setOpencatogory] = useState(false)
  const opencat = ()=>{
    setOpencatogory(!opencatogory)
    console.log(opencatogory)
  }
  return (
    <div className='Links'>
     <ul>
        <li className='all-catogories'>All CATEGORIES <span className='cat-icon' onClick={opencat}><AiOutlineDown/></span></li><br/>
      <Link to='/computer&laptop'><li> Computer & Laptops</li></Link> 
       <Link to='/scooter'><li> Scooter</li></Link>
       <Link to="/mobile"><li>Mobile Phones</li></Link>
        <li> For Sale:Houses & Apartments</li>
        <li>Motorcycles</li>
        <li>Commercial & other Vahicles</li>
        <li>For Rent: Houses & Apartments</li>
     </ul>
     {/* {
      opencatogory &&(
        <Catogories/>
      )} */}
     
    </div>
  )
}

export default Links
