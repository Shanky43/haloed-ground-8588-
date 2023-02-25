import React, { createContext, useState } from 'react'


export  const Authenticator= createContext()

const  Authentication = (props) => {

    const [isAuth,setIsAuth] =useState(false)
    const login = () => {
        setIsAuth(true);
      };



  return (
   <Authenticator.Provider value={{isAuth,login}}>
    {props.children} 
   </Authenticator.Provider>
  )
}

export default Authentication