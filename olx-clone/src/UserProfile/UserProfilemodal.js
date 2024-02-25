import React from 'react'
import "./UserProfilemodal.css"
import { FiHeart } from 'react-icons/fi';
import { BsBuilding } from 'react-icons/bs';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { BsGlobeCentralSouthAsia } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useStateValue } from '../StateProvider/StateProvider'
import { Link } from 'react-router-dom';
function UserProfilemodal(props) {
  const [{user}] = useStateValue();
  return (
    <div className='UserProfilemodal' onClick={props.onModuleClose}>
     <div className="edit-profile">
      <div className="img-name">
     <img src="https://statics.olx.in/external/base/img/avatar_4.png"  alt="" height={45}/>
      <h4>{user.name}</h4>
      </div>
    <Link to="/editprofile"><button>View and edit profile</button></Link>
     </div>
     <div className="section1">
  <Link to="/myads" style={{textDecoration:"none", color:"#002f34"}}> 
  <div className='s1'> <FiHeart/><span>My ADS</span></div>
  </Link>
   <div className='s1'> <BsBuilding/><span>Buy Business Packages</span></div>
   <div className='s1'> <AiOutlineCreditCard/><span>Bought Packages & Billing</span></div>
    
     <div className="section1 sec2">
   <div className='s1'> <BiHelpCircle/><span>Help</span></div>
   <div className='s1'> <BsGlobeCentralSouthAsia/><span>Select language / भाषा चुनें</span></div>
   <div className='s1'> <FiSettings/><span>Settings</span></div>
     </div>
     <div className="section1 sec3">
   <div className='s1'> <HiDownload/><span>install OLX Lite app</span></div>
   <div className='s1'> <RiLogoutBoxLine/><span>Logout</span></div>
     </div>
    </div> 
    </div>
  )
}

export default UserProfilemodal
