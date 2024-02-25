import React from 'react'
import "./Fbanner.css"
import phone from "../resources/phone.png"
import playstore from "../resources/playstore.png"
import appstore from "../resources/appstore.webp"
function Fbanner() {
  return (
    <div className='fbanner'>

      <div className="first">
<img className='phone-img' src={phone} alt=""  />
      </div>
      
      <div className="second">
        <h2>TRY THE OLX APP</h2>
        <p>Buy, sell and find just
           about anything using
           the app on your mobile.</p>
      </div>
      <div className="third">
        <h5>GET YOUR APP TODAY</h5>
        <div className="stores">
        <img src={appstore} alt=""  height={20}/>
        <img src={playstore} alt="" height={20} />
      </div>
      </div>
    </div>
  )
}


export default Fbanner
