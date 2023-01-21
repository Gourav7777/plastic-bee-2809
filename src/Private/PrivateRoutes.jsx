import React from "react";
 import { AuthContext } from "../Context/AuthContext";
 import { Navigate } from "react-router-dom";
 
 
 function PrivateRoutes({children}) {
  let {login,logout,isAuth} = React.useContext(AuthContext)
  if(!isAuth){
   return <Navigate to="/login" />
  }
 
  return children

}

export default PrivateRoutes;