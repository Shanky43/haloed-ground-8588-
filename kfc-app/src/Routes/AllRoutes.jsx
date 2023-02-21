import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Pages/About'
import Career from '../Pages/Career'
import FindAFFF from '../Pages/FindAFFF'
import HomePage from '../Pages/HomePage'
import Menu from '../Pages/Menu'
import PageNotFound from '../Pages/PageNotFound'




const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<HomePage />}> </Route>
        <Route path = "/menu" element={<Menu />}> </Route>
        <Route path = "/career" element={<Career />}> </Route>
        <Route path = "/about" element={<About />}> </Route>
        <Route path ="/findAFFF" element={<FindAFFF/>}></Route>
        <Route path ="*" element={<PageNotFound/>}></Route>
      </Routes>


    </div>
  )
}

export default AllRoutes