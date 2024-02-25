import React, { useState } from 'react'
import "./Ad.css"
import { useStateValue } from '../StateProvider/StateProvider'

function Ad() {
const [title, setTitle]= useState('')
const [description, setDescription]= useState('')
const [price, setPrice]= useState('')
const [photopath, setPhotopath]= useState('')
const [address, setAddress]= useState('')
const [category, setCategory] = useState('');
const [{user}] = useStateValue();
const handleChange=(event)=>{
  setCategory(event.target.value);

}
const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const requestBody = JSON.stringify({
        title: title,
        description: description,
        price: price,
        photopath: photopath,
        address: address,
        category: category,
        username: user.name
    });
      const response = await fetch('http://localhost:5000/ad', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },   
        body: requestBody,
      });
       console.log(title, description, price, photopath, address, category);
      console.log(response);
      setPhotopath('')
      setTitle('');
      setDescription('');
      setPrice('');
      setAddress('');
      
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='ad'>
<div className="space"></div>
    <div className="main-div">

<div className="reusable">
    <h6>SELECTED CATEGORY: {category}</h6>
      <select id="category-select" value={category} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="computer & laptop">computer & laptop</option>
        <option value="Bikes">Bikes</option>
        <option value="Mobiles">Mobiles</option>
      </select>
</div>

<div className="details">
    <div className="title reusable">
    <h6>INCLUDE SOME DETAILS</h6>
    <label >Ad title *</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
    </div>
    <div className="description reusable">
        <label>Description *</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <span>Include condition, features and reason for selling</span>
    </div>
        </div>

    <div className="price reusable ">
    <h6>SET A PRICE</h6>
    <label>Price*</label>
    <input type="number"  value={price} onChange={(e)=>setPrice(e.target.value)}/>
</div>

<div className='photo reusable'>
    <h6>UPLOAD UP TO 12 PHOTOS</h6>
      <input
        type="text"
        onChange={(e)=>setPhotopath(e.target.value)}  />  
    </div>

    <div className="location reusable">
        <h6>CONFIRM YOUR LOCATION</h6>
        <label>Ad address *</label>

        <input type="text" 
        value={address} onChange={(e)=>setAddress(e.target.value)}
        placeholder='State/City/Locality' />
    </div>
    
    <div className="name reusable">
        <label>Name</label>
        <input type="text" defaultValue={user.name} />
    <p>Your phone number : +91{user.phone_number}</p>
    </div>
    <div className="submit-btn reusable">
        <button onClick={submitHandler}>Post now</button>
    </div>
    </div>
<div className="space"></div>
    </div>
  )
}

export default Ad
