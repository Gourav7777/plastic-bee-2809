import React from "react";
import WomenItem from "./Womenitem";
import axios from "axios"

const WomenList = ({products=[]}) => {
  console.log(products)
  
 
   const AddtoCart=  async (obj)=>{

     let res = await     axios({
        method:"post",
        url:`http://localhost:8000/shoppingCart`,
        data: obj
     })
   
      
   }


  return (

    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",padding:"10px" }}>
    {products.map((el) => {
      
      return(
        
        <WomenItem  AddtoCart={AddtoCart} el={el}  />
        
        )
    })}
    </div>
    )
};


export default WomenList;