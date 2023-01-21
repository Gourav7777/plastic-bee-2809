

import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Kid from "../Pages/Kid"
import PrivateRoutes from '../Private/PrivateRoutes'
import Login from '../Pages/Login'
const Allroutes = () => {
  return (
    
  <Routes>
 
 <Route path='/' element={<Home></Home>}  ></Route>
 <Route path='/men' element={  <PrivateRoutes>  <Men></Men> </PrivateRoutes>    }  ></Route>
 <Route path='/women' element={<PrivateRoutes>  <Women></Women> </PrivateRoutes> }  ></Route>
 <Route path='/kid' element={<PrivateRoutes>  <Kid></Kid> </PrivateRoutes>}  ></Route>
 <Route path='/login' element={<Login></Login>}  ></Route>




  </Routes>



  )
}

export default Allroutes