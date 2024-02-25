import React from 'react'
import "./Loginmode.css"
import { GrClose } from 'react-icons/gr';
import { BiMobileAlt } from 'react-icons/bi';
import LoginDemoslider from './LoginModeslider';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Loginmode(props) {
    const closeAction=()=>{
        props.closeFormAtChild()
    }
  return (
<div className='loginmode '>
<div className="overlay" onClick={closeAction}></div>
<div className="form-area">
    <div className="close-btn">
    <GrClose onClick={closeAction}/>
    </div>
    <div className="tips">
        <LoginDemoslider/>  
    </div>
    <div className="login-options" onClick={closeAction}>
    <Link to="/login" style={{ textDecoration: 'none', color:'#002f34',width: '95%'}} >   <button><BiMobileAlt/><span>Continue With Phone</span></button></Link>
    <Link to="/login"  style={{ textDecoration: 'none', color:'#002f34',width: '95%'}}><button><AiOutlineMail/><span>Continue With Email</span></button></Link>
    </div>
    <div className="google">
        <p>OR</p>
    <h6 onClick={closeAction}><Link to="/createuser" style={{ textDecoration: 'none', color:'#002f34',}}>New user? Register</Link></h6>
    </div>
    <div className="policy">
   <p>All your personal details are safe with us.</p>
   <p>If you continue, you are accepting <span className='policy-link'>OLX Terms and Conditions and Privacy Policy</span> </p>
    </div>
</div>
</div>

  )
}

export default Loginmode
//