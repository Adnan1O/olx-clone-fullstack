import React, { useState } from 'react'
import "./Createuser.css"
import { useNavigate } from 'react-router-dom';

function Createuser() {
const  navigate = useNavigate();
    const [showpassword, setShowpassword] = useState(false);
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
   const RegisterUser= async()=>{
   try {
    const body = {email, phoneNumber, name,  password};
   const response = await fetch("http://localhost:5000/register",{
    method: "POST",
    headers:{"Content-Type": "application/json"},
        body: JSON.stringify(body)
       });
       if (response.ok){
        navigate("/login")
         
       }else{
        const errorData = await response.json();
        const errorMessage = errorData.error;
        // Display the error message to the user
        alert(errorMessage);
       }
   console.log(response)
  
   } catch (error) {
    
    console.error(error.message) 
   }
}
  const  Togglepassword=()=>{
        setShowpassword(!showpassword);
    }
  return (
    <div className='createuser'>
    <h2 className='marginbottomclass'>Register</h2>
    <input onChange={(e)=>setEmail(e.target.value)} className='marginbottomclass' type="text" name='email' placeholder="your phone Email" value={email} />
    <input onChange={(e)=>setPhoneNumber(e.target.value)} className='marginbottomclass' type="tel" name="phoneNumber" placeholder="your phone number" value={phoneNumber} />
    <input onChange={(e)=>setName(e.target.value)} className='marginbottomclass' type="text" name='name' placeholder='your name' value={name}/>
    <input onChange={(e)=>setPassword(e.target.value)} type={ showpassword ? "text" : "password"} name="password" placeholder="your password" value={password} />
    <div className="checkbox">
    <input  type='checkbox' onChange={Togglepassword}/>
    <label className='marginbottomclass'>see password</label>
      </div>
      <button onClick={RegisterUser}>Submit</button>
    </div>
  )
}

export default Createuser
