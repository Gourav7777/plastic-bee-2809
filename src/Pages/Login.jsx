




import React from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from "react-router-dom";

const Login = () => {

  let valuee = React.useContext(AuthContext)
  const [email,setemail] = React.useState("eve.holt@reqres.in")
  const [password,setPassword] = React.useState("cityslicka")
  const[buttonn,setButtonn] = React.useState(false)
  const onsubmitt=(e)=>{
  
    e.preventDefault()
     logindetails()
     setButtonn(true)
  }
 
  const logindetails= async ()=>{
  
    const obj={
      email,
      password
    }
    try {
      
      
      let res = await fetch (`https://reqres.in/api/login`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          "Content-Type":"application/json"
        }
      })
        
        res = await res.json()
        console.log(res)
        valuee.login(res.token)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  if(valuee.isAuth){
    return <Navigate to="/" />
  }

  return (
      <>
    
      <h1 style={{fontSize:"20px",fontWeight:"bold"}} >Hey there! Please Login.... to Buy Our Trending Products</h1>
    <div className="login-page">
    <form className="form" data-testid="login-form" onSubmit={onsubmitt}>
      <div>
        <label>
          <input data-testid="email-input" value={email} type="email" placeholder="email" onChange={(e)=> setemail(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          <input
            data-testid="password-input"
            type="password"
            placeholder="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
          />
        </label>
      </div>
      <div>
        <button  disabled={buttonn} data-testid="form-submit" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
    <div>
      
    </div>
  </div>

</>


    
  )


}

export default Login