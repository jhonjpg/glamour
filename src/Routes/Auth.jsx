import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../pages/Home';
import About from '../pages/About';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';
import Services from '../components/Services';




const Auth = () => {
  return (
    <div>



      <BrowserRouter>
        <Routes>

        <Route index element={<Home />}></Route>
        <Route path="/glamour/" element={<Home />}></Route>
           <Route path="/glamour/servicios" element={<Services />}></Route> 
          <Route path="/glamour/nosotros" element={<About />}></Route>
          <Route path="/glamour/testimonios" element={<Testimonials />}></Route>
          <Route path="/glamour/contacto" element={<Contact />}></Route>

          {/* <Route path="*" element={<PageNotFound />}></Route>  */}


        </Routes>




      </BrowserRouter>



    </div>


  )
}

export default Auth