import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Pages/About'
import Career from '../Pages/Career'
import FindAFFF from '../Pages/FindAFFF'
import HomePage from '../Pages/HomePage'
import Menu from '../Pages/Menu'
import PageNotFound from '../Pages/PageNotFound'
import Location from "../Pages/Location"
import SignInpage from '../Pages/SignInpage'
import SignUpPage from '../Pages/SignUpPage'
import AccountPage from '../Pages/AccountPage'
import CartPage from '../Pages/CartPage'




const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<HomePage />}> </Route>
        <Route path = "/menu" element={<Menu />}> </Route>
        <Route path = "/career" element={<Career />}> </Route>
        <Route path = "/about" element={<About />}> </Route>
        <Route path ="/findAFFF" element={<FindAFFF/>}></Route>
        <Route path ="/findAFFF" element={<FindAFFF/>}></Route>
        <Route path ="/location" element={<Location/>}></Route>
        <Route path ="/sigininpage" element={<SignInpage/>}></Route>
        <Route path ="/signuppage" element={<SignUpPage/>}></Route>
        <Route path='/accountpage' element={<AccountPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path ="*" element={<PageNotFound/>}></Route>
      </Routes>


    </div>
  )
}

export default AllRoutes