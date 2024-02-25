import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider'
import SingleMyAd from './SingleMyAd';
import './MyAds.css'
function MyAds() {   
const [{user}] = useStateValue();
const [ads, setAds] = useState([]);

const getMyAds= async()=>{  
    try { 
    const myAds= await fetch(`http://localhost:5000/myads?username=${user.name}`);
    const jsonData = await myAds.json();
    setAds(jsonData);

    } catch (error) {
        console.error(error.message)
    }
}
useEffect(() => {
  getMyAds()
}, []);
  return (
<div className='myads'>
    <div className="space"></div>
    <div className="singlemyads">
    {  ads.map((ads) => {
        return <SingleMyAd key={ads.id} 
        id={ads.id}
        title={ads.title}
        description={ads.description}
        address={ads.address}
        price={ads.price}
        photopath={ads.photopath}
        postingDate={ads.posting_date}
        />; })}</div>
   <div className="space"></div>
</div>
  )
}

export default MyAds
