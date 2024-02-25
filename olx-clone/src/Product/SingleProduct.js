import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./SingleProduct.css"
import { useStateValue } from '../StateProvider/StateProvider';

function SingleProduct() {
const [{user}]= useStateValue();
  const {id} = useParams();
  //console.log(id)
  const [product, setProduct] = useState({});
  
  const getSingleProduct= async ()=>{

    try {
     const response = await fetch(`http://localhost:5000/product/${id}`)
     const jsonData = await response.json()
     setProduct(jsonData)

    } catch (error) {
      console.error(error.message)
    }
  }
  useEffect(()=>{
    getSingleProduct();
  },[])
  return (
    <div className='singleproduct'>
      <div className="space"></div>
      <div className="content">
      <div className="imgdes-area">
        <div className="big-img">
          <img src={product.photopath} alt="" 
           />
        </div>
        <div className="des">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>
      </div>

      <div className="address-area">
        {/* {price and address area start} */}
        <div className="price-title">
          <h1>₹{product.price}</h1>
          <p>{product.title}</p>
          <div className="address">
            <p>{product.address}</p>
            <p>{product.posting_date}</p>
          </div>
        </div>
        {/* user div start */}
        <div className="seller-details">
          <div className="seller-profile">
            <img src="https://statics.olx.in/external/base/img/avatar_4.png" alt="" height={60} />
            <h4>{product.username}</h4>
          </div>
          <button>{user.name===product.username ? "Your Ad" : "Chat with seller"}</button>
        </div>
        <div className="map">
          <h3>Posted in</h3>
          <p>{product.address}</p>
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=22.56%2C88.353&amp;language=en-IN&amp;size=640x256&amp;zoom=15&amp;scale=1&amp;lang=en-IN&amp;channel=olx-latam-ar-web-dev&amp;key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&amp;signature=urptY3ciLcCAZClQZEzbxiyoe_g=" alt="google map"
           height={120}></img>
        </div>
        <h4>Ad Id:{product.id}</h4>
      </div>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default SingleProduct
