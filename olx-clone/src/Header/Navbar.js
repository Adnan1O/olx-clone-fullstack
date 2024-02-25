//import React, { useEffect } from 'react'
import "./Navbar.css"
import  blackLogo from "../resources/blackLogo.png"
import { BsSearch } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loginmode from '../Login/Loginmode';
import { useStateValue } from '../StateProvider/StateProvider';
import UserProfilemodal from '../UserProfile/UserProfilemodal';


function Navbar(props) {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [profileModal , setProfileModal]= useState(false);
  const [{user}, dispatch] = useStateValue();
  const [ searchProduct,setSearchProduct] = useState('');
 const sendingSearch=()=>{
    props.sendSearchInput(searchProduct)
    navigate('/search')
  }
  const ToggleLogin=()=>{
    setLogin(!login);
  }
  const ToggleProfileModal=()=>{
    setProfileModal(!profileModal);
  }
const logOuthandler=()=>{
  dispatch({
  type:"REMOVE_USER",
    user: null
  })
  localStorage.setItem("user", JSON.stringify(null));
}
  return (
    <header className='navbar'>
     <div className="space"></div>
     <div className="logo"> 
     <Link to="/">
    <img src={blackLogo} alt="" height={35} width={35} />
    </Link>
      </div>
     <div className="search">
    
      <input className='location_input'
       type="text" placeholder='Search city, area or location'
       defaultValue={"Hyderabad, Telangana"} />

{/* SEARCH START */}
      <input className='search_input' 
       type='text'
       placeholder='Find Cars, Mobile Phones and more... '
       onChange={(e)=>setSearchProduct(e.target.value)}
       />
       <span className='search_icon' onClick={sendingSearch}><BsSearch /></span> 
     </div>

     <div className="last">  
      <h6 className='english'>ENGLISH <span><AiOutlineDown/></span></h6>
   { !user &&( <div className="in">
      <h6 className='login' onClick={ToggleLogin}>Login</h6>
      {login &&(
        <Loginmode closeFormAtChild={ToggleLogin} />
      )} </div>)}
      {user &&(
      <div className="out">
      <h6 className='login' onClick={logOuthandler}>Logout</h6>
      <img src="https://statics.olx.in/external/base/img/avatar_4.png" 
      alt="" height={20}
      onClick={ToggleProfileModal}
      />
      {
        profileModal &&(
          <UserProfilemodal onModuleClose={ToggleProfileModal} />
        )
      }
      </div>)}
     </div>
     <div className="sell-btn">
    <Link to={user? "/ad" :"" } style={{ textDecoration: 'none' }}><button onClick={!user? ToggleLogin : undefined }><span><TiPlus/></span> SELL</button></Link>
     </div>
     <div className="space"></div>

    </header>
  )
}

export default Navbar
