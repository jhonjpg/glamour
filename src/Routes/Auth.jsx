import React, { Suspense, useState, useEffect } from 'react';
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
const LazyHome = React.lazy(() => import('../pages/Home'));





const Auth = () => {

  const [isComponentReady, setIsComponentReady] = useState(false);

  useEffect(() => {
    // Simular un retraso de 2 segundos antes de mostrar el componente
    const delay = 5000;
    const timer = setTimeout(() => {
      setIsComponentReady(true);
    }, delay);
  
    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>



      <BrowserRouter>
        <Routes>

        <Route path="/glamour/" element={    <Suspense fallback={<div className="pantalla"> <div className="logito"></div></div>}>
    {isComponentReady ? <LazyHome /> : null}
  </Suspense>}></Route>
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