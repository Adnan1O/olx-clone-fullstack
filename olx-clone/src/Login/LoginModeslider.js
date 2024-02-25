import React from 'react'
import Slider from "react-slick";
import './LoginModeslider.css'
function LoginDemoslider() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
return (

  <Slider {...settings}  className='LoginModeslider'>
  <div>
  <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png"
  alt="" height={60} />
  <p>Help us become one of the safest places to buy and sell</p>
  </div>
  <div>
  <img src="	https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp"
  alt="" height={60} />
  <p>Close deals from the comfort of your home.</p>
  </div>  
  <div>
  <img src="	https://statics.olx.in/external/base/img/loginEntryPointChat.webp"
  alt="" height={60} />
  <p>Keep all your favourites in one place.</p>
  </div> 
  </Slider>

)
}

export default LoginDemoslider
