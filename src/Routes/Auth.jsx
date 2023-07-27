import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../pages/Home';
import About from '../pages/About';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import MakeupPage from '../componentsPages/MakeupPage';
import HairPage from '../componentsPages/HairPage';
import ToesNails from '../componentsPages/ToesNails';
import NailsPage from '../componentsPages/NailsPage';
import SpaPage from '../componentsPages/SpaPage';
import RockSpa from '../componentsPages/RockSpa';




const Auth = () => {
  return (
    <div>


      <BrowserRouter>
        <Routes>

        <Route index element={<Home />}></Route>
        <Route path="/glamour/" element={<Home />}></Route>
           <Route path="/glamour/maquillaje" element={<MakeupPage />}></Route> 
           <Route path="/glamour/cabello" element={<HairPage />}></Route> 
           <Route path="/glamour/pies" element={<ToesNails />}></Route> 
           <Route path="/glamour/manos" element={<NailsPage />}></Route> 
           <Route path="/glamour/masaje" element={<SpaPage />}></Route> 
           <Route path="/glamour/masaje-rocas" element={<RockSpa />}></Route> 



           


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