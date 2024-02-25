import React, { useEffect, useState } from 'react'
import "./Search.css"
import Card from "../Product/Card"
function Search({searchedWord}) {
  const [product, setProduct]= useState([]);
  const SearchProducts=async()=>{
    try {
      const response = await fetch(`http://localhost:5000/search?searchedWord=${searchedWord}`)
      const jsonData = await response.json()
     
      setProduct(jsonData)
      console.log(jsonData);
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    SearchProducts();
  }, [searchedWord]);
  return (

<div className='search-page'>
  <div className="space"></div>
  <div className="search-body">
    {
      product.length > 0 ?(
    product.map((product=>(
      <Card key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        photopath={product.photopath} 
        postingDate={product.posting_date}   
      />)
        ))
   ) : (
    <h2>NO RESULTS FOUND</h2>
   ) }
   </div>
    <div className="space"></div>
</div>
  )
}

export default Search
