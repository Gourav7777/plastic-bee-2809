import React from 'react'
import "./Card.css"
const Card = ({id,obj}) => {
  return (
    <div className='myycard'>

     <img style={{width:"100%"}}  src={obj.img} alt="err" ></img>
            <h6>{obj.title}</h6>
            <h6>{obj.desc}</h6>
            <h3 style={{fontWeight:"bold"}} >MRP:{obj.price}</h3>


    </div>
  )
}

export default Card