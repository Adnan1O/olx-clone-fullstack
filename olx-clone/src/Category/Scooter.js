import React, { useEffect, useState } from 'react'
import Card from '../Product/Card'
import './Scooter.css'
function Scooter() {
    const [scooter, setScooter] = useState([])

useEffect(()=>{
const getScooter=async()=>{
try {
    const response = await fetch("http://localhost:5000/scooter")
    const jsonData = await response.json()
    setScooter(jsonData);

} catch (error) {
    console.log(error.message)
}
}
getScooter()
},[])
return (
<div className="all-divs">

<div className="space"></div>

<div className='scooter'>
{ 
scooter.map((scooter=>(
    <Card key={scooter.id}
        id={scooter.id}
        title={scooter.title}
        price={scooter.price}
        photopath={scooter.photopath}    
    />)
        ))        
}
</div>
<div className="space"></div>
</div>
)
}

export default Scooter
