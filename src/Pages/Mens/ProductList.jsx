
import React from "react";
import ProductItem from "./ProductItem";
import axios from "axios"

const ProductList = ({products=[]}) => {
  console.log(products)
  
 
   const AddtoCart=  async (obj)=>{

     let res = await     axios({
        method:"post",
        url:`https://misty-tie-boa.cyclic.app/shoppingCart`,
        data: obj
     })
   
      
   }


  return (

    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",padding:"10px" }}>
    {products.map((el) => {
      
      return(
        
        <ProductItem  AddtoCart={AddtoCart} el={el}  />
        
        )
    })}
    </div>
    )
};


export default ProductList;