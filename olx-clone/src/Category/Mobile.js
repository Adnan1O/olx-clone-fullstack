import React, { useEffect, useState } from 'react'
import Card from '../Product/Card'
import './Scooter.css'
function Mobile() {
    const [mobile, setMobile] = useState([])

useEffect(()=>{
const getMobile=async()=>{
try {
    const response = await fetch("http://localhost:5000/mobile")
    const jsonData = await response.json()
    setMobile(jsonData);
    // console.log(mobile)

} catch (error) {
    console.log(error.message)
}
}
getMobile()
},[])
return (
<div className="all-divs">

<div className="space"></div>

<div className='scooter'>
{ 
mobile.map((mobile=>(
    <Card key={mobile.id}
        id={mobile.id}
        title={mobile.title}
        price={mobile.price}
        photopath={mobile.photopath}    
    />)
        ))        
}
</div>
<div className="space"></div>
</div>
)
}

export default Mobile
