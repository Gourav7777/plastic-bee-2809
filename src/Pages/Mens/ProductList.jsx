import React from "react";
import ProductItem from "./ProductItem";


const ProductList = ({products=[]}) => {
  console.log(products)
  return (

    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",padding:"10px" }}>
    {products.map((el) => {
      
      return(
        
        <ProductItem {...el} />
        
        )
    })}
    </div>
    )
};


export default ProductList;