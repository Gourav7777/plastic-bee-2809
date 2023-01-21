import React from 'react'
import Mensdata from './Mensdata'

import { AuthContext } from '../../Context/AuthContext'
import Loader from './Loader'
const Sidebar = () => {

   const [sort,setSort] = React.useState("")
   const [type,setType] = React.useState("")
   let {login,logout,isAuth} = React.useContext(AuthContext)


  return (

  <>
    <div    style={{display:"flex", textAlign:"center", justifyContent:"space-around",  border:"0px solid black",gap:"20px",fontFamily:"sans-serif",fontSize:"18px",fontWeight:"bold"}}>
    
     
     
    

     
    
    

     

     

     <select style={{backgroundColor:"#38a169",color:"white",fontSize:"18px",padding:"10px",borderRadius:"10px"}} onChange={(e)=> setType(e.target.value) }   >
     <option   >Filter By Category</option>
     <option value="jeans" >Pants</option>
     <option value="accessories">Accessories</option>
     <option value="tshirt">Shirts</option>
     <option value="shoes">Shoes</option>
      </select>

      <select style={{backgroundColor:"#3182ce",color:"white",fontSize:"18px",padding:"10px",borderRadius:"10px"}}  onChange={(e)=> setSort(e.target.value) } >
     <option value="" >Sorting By Price</option>
     <option value="asc">Low to high</option>
     <option value="desc">High to low</option>
      </select>



    
     <select style={{backgroundColor:"#e53e3e",color:"white",fontSize:"18px",padding:"10px",borderRadius:"10px"}}>
      <option value="all">Sorting by Rating</option>
     <option value="low to high">Low to high</option>
     <option value="high to low">High to low</option>
     
    </select>
    
    
    <select style={{backgroundColor:"#ecc94b",color:"white",fontSize:"18px",padding:"10px",borderRadius:"10px"}}>
      <option value="all">Sorting by Gender</option>
     <option value="low to high">Men</option>
     <option value="high to low">Women</option>
     
    </select>
      



   </div>


      <br>
      </br>
      <br>
      </br>
    
   { !isAuth? <Loader /> :  <Mensdata  sort={sort} type={type}  />}
   
    

    </>
    
   


    
   
  )
}

export default Sidebar