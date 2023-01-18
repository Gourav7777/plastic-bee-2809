

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Kid from "../Pages/Kid"
import Sports from '../Pages/Sports'
const Allroutes = () => {
  return (
    
  <Routes>
 
 <Route path='/' element={<Home></Home>}  ></Route>
 <Route path='/men' element={<Men></Men>}  ></Route>
 <Route path='/women' element={<Women></Women>}  ></Route>
 <Route path='/kid' element={<Kid></Kid>}  ></Route>
 <Route path='/sports' element={<Sports></Sports>}  ></Route>




  </Routes>



  )
}

export default Allroutes