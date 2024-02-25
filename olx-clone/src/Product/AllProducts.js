import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./AllProducts.css"
function AllProducts() {
const [allproduct, setAllproduct] = useState([])

const fetchAll= async()=>{
    try {
        const response = await fetch("http://localhost:5000/allproducts")
        const jsonData = await response.json()
        setAllproduct(jsonData)

    } catch (error) {
        console.error(error.message)
    }
}
useEffect(()=>{
    fetchAll();
    console.log(allproduct)
},[])

return (
<div className='Allproducts'>
  {
  allproduct.map((allproduct=>(
  <Card key={allproduct.id}
    id={allproduct.id}
    title={allproduct.title}
    description={allproduct.description}
    price={allproduct.price}
    address={allproduct.address}
    photopath={allproduct.photopath}
    postingDate={allproduct.posting_date}  
  />
  )))
  }
</div>
)
}

export default AllProducts
