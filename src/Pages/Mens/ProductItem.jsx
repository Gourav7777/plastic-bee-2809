
import React from "react";
import "./ProductItem.css"
const ProductItem = ({el,AddtoCart}) => {
  const{  img,color,desc,price} = el
  return (
   <div  className="cardd" style={{height:"450px",  border:"0px solid black", display:"flex", justifyContent:"center",alignItems:'center', flexDirection:"column", fontWeight:"bold",fontSize:"16px",padding:"3px" ,boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",lineHeight:"30px" }   }  >
    
    <img  style={{width:"200px"}}    src={img} alt={color} />
    <h1>{color}</h1>
    <h3>{desc}</h3>
    <h3>{price}</h3>
       <p>
   <button onClick={()=>AddtoCart(el)}  >Add to Cart</button>
      </p>
   </div>
  );
};
export default ProductItem;