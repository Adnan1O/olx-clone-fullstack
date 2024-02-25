import React from 'react'
import "./Login.css"
import "./Createuser.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
function Login() {
  const [{user}, dispatch] = useStateValue();
const navigate = useNavigate(); 
  const [showpassword, setShowpassword]= useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers]= useState([]);

const userData = async ()=>{
  try {
  const response = await fetch("http://localhost:5000/login")
  const jsonData = await response.json()
  setUsers(jsonData)
  //console.log(users[0].email, "users are here")
  } catch (error) {
    console.error(error.message)
    
  }
}
useEffect(()=>{
  userData();

},[])
const Togglepassword=()=>{
  setShowpassword(!showpassword);
}
   
const handleLogin=(e)=>{
e.preventDefault();
let isLoggedin =false;
let user = null;
    for (let i=0; i < users.length; i++){
    const currentUser=users[i];
    
    if (currentUser.email === email  && currentUser.password === password) {
      user = currentUser
    isLoggedin = true;
    break;
    }
  //  console.log(isLoggedin)
}  
if(isLoggedin){
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({
    type: "SET_USER",
    item: user
  });
  navigate("/")
  window.location.reload();
  } else{
    alert("wrong user id or password")
  }

};
 
  return (
    <div className='createuser'>
          <h2 className='marginbottomclass'>Login</h2>
   <input onChange={(e)=>setEmail(e.target.value)} className='marginbottomclass' type="text" name='email' placeholder="your Email" value={email}/>
    <input onChange={(e)=>setPassword(e.target.value)} type={ showpassword ? "text" : "password"} name="password" placeholder="your password" value={password} />
    <div className="checkbox">
    <input  type='checkbox' onChange={Togglepassword}/>
    <label className='marginbottomclass'>see password</label>
      </div>
      <button onClick={handleLogin} >Submit</button>
    </div>
  )
}

export default Login
