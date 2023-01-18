import React from 'react'
import "./Mycard.css"


const Mycard = (props) => {
    return (
        <div className='mycard'>
           
            <img style={{width:"100%"}}  src={props.img} alt="err" ></img>
            <h6>{props.title}</h6>
            <h6>{props.desc}</h6>
            <h3 style={{fontWeight:"bold"}} >MRP:{props.price}</h3>
            
            </div>
    )
}

export default Mycard