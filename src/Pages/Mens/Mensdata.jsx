import React from 'react'


// import { AuthContext } from "../Context/AuthContext";
// import React from "react";
// import ProductList from "../Components/ProductList";
// import Pagination from "../Components/Pagination";
import ProductList from './ProductList'


const Mensdata = (props) => {

    const [data,setData] = React.useState([])
    // let {login,logout,isAuth} = React.useContext(AuthContext)
   
    const [current,setCurrent] = React.useState(1)
    const [totalPage,settotalPage]= React.useState(0)
    
   
    
  
   const {sort,type} = props
    
    // const onchange=(val)=>{
    //   setCurrent(current+val)
  
    // }
  
    React.useEffect(()=>{
  
    fetchData(sort)
  
    },[sort])
  
   const fetchData=async(sort)=>{
       let url = `http://localhost:8000/men`
    if(sort){
      url=`http://localhost:8000/men?_sort=price&_order=${sort}`
    }
    if(type){
        url=`http://localhost:8000/men?title=${type}`
    }
    // let url = `http://localhost:8000/men?page=${current}&limit=10&order=${sort}&sort=price`
    try {
      
      let res = await fetch(url)
      
      res = await res.json()
    //   console.log(res)
      setData(res)
      
    } catch (error) {
      console.log(error)
    }
   }



console.log(sort,type)
  return (
    <div>



               <ProductList products={data}  />
     
      {/* add Pagination component  */}
  
  {/* <Pagination current={current} totalPage={totalPage} onchange={onchange} /> */}

    {/* //   <div style={{ display: "flex", justifyContent: "center" }}>
       
    //   </div> */}

     </div>

  )
}

export default Mensdata