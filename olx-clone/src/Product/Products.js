import React, { useEffect, useState } from 'react'
import './Product.css'
import Card from './Card'
//import Slider from "react-slick";
function Porducts() {
  const [product, setProduct] = useState([]);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 4
  // };
  const getProducts=async()=>{
  try {
    const response = await fetch("http://localhost:5000/computer&laptop");
    const jsonData = await response.json() 
    setProduct(jsonData)
  } catch (error) {
    console.error(error.message)
  }  
  };
  useEffect(()=>{  
    //console.log(product)
    getProducts();
  },[])
  return (
    <div className='product'>
      {/* <Slider {...settings}  className='LoginModeslider'> */}
      { 
        product.map((product=>(
      <Card key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        photopath={product.photopath} 
        postingDate={product.posting_date}   
      />)
        ))
        }
      {/* // </Slider> */}
      
    </div>
  )
}

export default Porducts
