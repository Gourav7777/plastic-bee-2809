import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
const Login = () => {
  let valuee = React.useContext(AuthContext);

  const mynav=useNavigate()
  React.useEffect(()=>{
    if(valuee.isAuth){
      mynav('/')
    }
  },[])


  const [email, setemail] = React.useState("eve.holt@reqres.in");
  const [password, setPassword] = React.useState("cityslicka");
  const [buttonn, setButtonn] = React.useState(false);
  const toast = useToast()
  const onsubmitt = (e) => {
    e.preventDefault();
    logindetails();
    setButtonn(true);
  };

  

  const logindetails = async () => {
    const obj = {
      email,
      password,
    };

    console.log(password)
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      res = await res.json();
      console.log(res);
      valuee.login();
      // mynav("/")
    } catch (error) {
      console.log(error);


      // toast({
      //   title: `Wrong Credentials `,
      //   status: 'error',
      //   isClosable: true,
      // })



    }
   
     if(valuee.isAuth){
       mynav('/')
     }

     else{
      toast({
        title: `Wrong Credentials `,
        status: 'error',
        isClosable: true,
      })
     }

  };

     
  return (
    <>
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
        Hey there! Please Login.... to Buy Our Trending Products
      </h1>
      <div className="login-page">
        <form className="form" data-testid="login-form" onSubmit={onsubmitt}>
          <div>
            <label>
              <input
                data-testid="email-input"
                value={email}
                type="email"
                placeholder="email"
                onChange={(e) => setemail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                data-testid="password-input"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
          </div>
          <div>
            <button data-testid="form-submit" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        <div></div>
      </div>
    </>
  );
};

export default Login;
