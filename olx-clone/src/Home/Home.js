import React from 'react'
import "./Home.css"
import Products from '../Product/Products'
import Adbanner from './Adbanner'
import Fbanner from './Fbanner'
import AllProducts from '../Product/AllProducts'

function Home() {
  
  return (
<div className='home'>
  <Adbanner/>
  <div className="page-body">
    <div className="space"></div>
    <div className="main-body">
      <div className="your-search"> 
      <p className='based'>Based on your last search</p>
      <Products/>
      </div>
      <div className="allproducts">
      <p className='based'>Fresh recommendations</p>
      <AllProducts/>
      </div>
        </div>
    <div className="space"></div>
  </div>
  <div className="fbanner">
      <Fbanner/>
      </div>
   
</div>
  )
}

export default Home
