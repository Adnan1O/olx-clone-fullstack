import React, { useState } from 'react'
import './EditProfile.css'
import { HiOutlineLightBulb } from 'react-icons/hi';
import { useStateValue } from '../StateProvider/StateProvider'
import { useNavigate } from 'react-router-dom';
function EditProfile() {
  const navigate = useNavigate();
  const [{user}] = useStateValue();
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
const EditUser=async()=>{
  try {
    const body = {name, phoneNumber, email};
    const response = await fetch(`http://localhost:5000/editprofile/${user.user_id}`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
   
    })
    window.location.reload('/')
  } catch (error) {
    console.log(error.message)
  }
}
return (
  <div className='editprofile'>
    <div className="middle-area">
    <div className="title">
    <h4>Edit Profile</h4>
    </div>
    <div className="basic-info">
    <h6>Basic information</h6>
    <div className="input-tip">
      <div className="inputs">
      <input type="text" className='in-1'  defaultValue={user.name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" className='in-2' placeholder='About me (optional)' />
  </div>
  <div className="tip">
    <HiOutlineLightBulb/><strong>Why is it important?</strong><br />
    <span>OLX is built on trust. Help other
        people get to know you. Tell them about
        the things you like. Share your favorite
          brands, books, movies, shows, music,
          food. And you will see the results…</span>
  </div>
    </div>
    </div>
    <div className="basic-info">
    <h6>Contact information</h6>
    <div className="input-tip">
      <div className="inputs">
      <input type="text" className='in-1' defaultValue={user.phone_number} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <input type="text" className='in-1' defaultValue={user.email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="tip2">
    <span>Yay! Your number is verified.</span>
    <span>Your email is never shared with external
       parties nor do we use it to spam you in any way.</span>
  </div>
    </div>
    </div>
    <div className="additional-info">
      <div className="link-google">
    <h6>Additional information</h6>
    <p>Google</p>
    <span>Link your Google account to seamlessly
       use your contact list.</span>
       </div>
       <div className="unlink">
        <button>Unlink</button>
       </div>
    </div>
    <div className="last-btns">
      <h5 className='discard'>Discard</h5>
      <button className='save' onClick={EditUser} >Save changes</button>
    </div>
    </div>
  </div>
  )
}

export default EditProfile
