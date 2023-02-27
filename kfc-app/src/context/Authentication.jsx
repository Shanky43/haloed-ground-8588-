import React, { createContext, useState } from 'react'


export  const Authenticator= createContext()

const  Authentication = (props) => {

    const [isAuth,setIsAuth] =useState(false)
  
  return (
   <Authenticator.Provider value={{isAuth,setIsAuth}}>
    {props.children} 
   </Authenticator.Provider>
  )
}

export default Authentication