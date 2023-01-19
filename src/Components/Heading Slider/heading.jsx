import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import { productData, responsive } from "./data";
import React from 'react'

import "./heading.css";

const Heading = () => {
    

    const product = productData.map((item) => (
      <Product
        name={item.name}
        url={item.imageurl}
        price={item.price}
        
      />
    ));


  return (
    <div className="App">
    
    <Carousel showDots={true} responsive={responsive}>
      {product}
    </Carousel>
  </div>
  )
}

export default Heading