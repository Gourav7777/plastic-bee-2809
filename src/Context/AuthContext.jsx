import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = React.useState(false);

  const login = () => {
    setisAuth(true);
  };
  const logout = () => {
    setisAuth(false);
  };
  return (
    <AuthContext.Provider value={{ login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
