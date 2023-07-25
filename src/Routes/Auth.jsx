import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../pages/Home';
import About from '../pages/About';
import Testimonials from '../pages/Testimonials';




const Auth = () => {
  return (
    <div>



      <BrowserRouter>

        <Routes>


        <Route index element={<Home />}></Route>
        <Route path="/glamour/" element={<Home />}></Route>
          {/* {/* <Route path="/glamour/supermarket" element={<FirtsFloor />}></Route> */}
          <Route path="/glamour/nosotros" element={<About />}></Route>
          <Route path="/glamour/testimonios" element={<Testimonials />}></Route>
          {/* <Route path="*" element={<PageNotFound />}></Route>  */}


        </Routes>




      </BrowserRouter>



    </div>


  )
}

export default Auth