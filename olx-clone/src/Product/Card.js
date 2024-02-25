import React from 'react'
import "./Card.css"
import { FaRegHeart } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
//import { useState, useEffect,useRef } from 'react';

function Card(props) {
 const navigate = useNavigate();
 const details=()=>{
  const id = props.id
  navigate(`/product/${id}`)
 }
  return (
    <div className='card' onClick={details}>
        <div className="card-component">
    <FaRegHeart className='heart'/> 
     <img className='img' src={props.photopath} alt="" height={110}/>
     <div className="text">
     <h5>{`₹${props.price}`}</h5>
     <p>{props.title}</p>
     <span className='postingdate'>{props.postingDate}</span>
     </div>
     </div>
    </div>
  )
}

export default Card

// const [imageUrl, setImageUrl] = useState('');
// const imageUrlRef = useRef('');
// useEffect(() => {
//   // Create a Blob object from the provided blob URL
//   fetch(props.photo)
//     .then((response) => response.blob())
//     .then((blob) => {
//       // Create an object URL for the Blob object
//       const objectUrl = URL.createObjectURL(blob);
//       setImageUrl(objectUrl);
//       imageUrlRef.current = objectUrl;
//     });

//   // Clean up the object URL when the component is unmounted
//   return () => URL.revokeObjectURL(imageUrlRef.current);
// }, [props.photo]);
// console.log(imageUrl)