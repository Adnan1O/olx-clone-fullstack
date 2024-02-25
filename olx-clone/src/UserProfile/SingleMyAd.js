import React from 'react'
import "./SingleMyAd.css"
import { useNavigate } from 'react-router-dom'
function SingleMyAd(props) {

    const navigate = useNavigate();
    const singlepage=()=>{
        const id = props.id
        console.log(id)
        navigate(`/product/${id}`)
    }
// DELETE REQUEST >>>>>>>>>>
const removeProduct=async(id)=>{
    try {
        const response = await fetch(`http://localhost:5000/remove/${id}`,{
            method: "DELETE"
        });
        navigate('/')
        
    } catch (error) {
        console.log(error.message)
    }
}
  return (
    <div className='singlemyad' >
    <div className="date">
        <p>FROM: <strong>{props.postingDate}</strong> </p>
    </div>
    <div className="pro-detail">
        <div className="pro"  onClick={singlepage}>
            <img src={props.photopath} alt="" height={30}/>
            <h5>{props.title}</h5>
            <h5>₹{props.price}</h5>
            <span>LIVE</span>
            <p>This ad is live</p>
        </div>
        <div className="view">
            <div className="view-like">
                <p>View : 129</p> 
                <p>Likes : 8</p>
            </div>
            <div className="remove">
            <button>EDIT</button>
                <button onClick={()=>removeProduct(props.id)}>REMOVE</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleMyAd
