import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Navbar = () => {



  const [toggleOn, settoggleOn] = useState(false)


const toggleMenu = () => {

  settoggleOn(!toggleOn)

}

const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

  return (


    <>

    {/* phone Nav */}
<nav>

<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul className={toggle}>
    <li className="nav-item"> <Link exact="true" to="/glamour/" activeclassname="active" >  Inicio</Link></li>
         <li className="nav-item"> <Link to="/glamour/servicios"  >  Servicios</Link></li>
         <li className="nav-item"> <Link to="/glamour/nosotros"  > Nosotros</Link></li>
         <li className="nav-item"> <Link to="/glamour/testimonios" >  Testimonios</Link></li>
         <li className="nav-item"> <Link to="/glamour/contacto" >  Contacto</Link></li>


       </ul>

     

       <div className="logo"></div>




     </nav>



{/* other device */}


<div className="devices">



<div className="logo"></div>



    <ul className="">
    <li className="nav-item"> <NavLink exact="true" to="/glamour/" activeclassname="active" >  INICIO</NavLink></li>
         <li className="nav-item"> <NavLink to="/glamour/servicios"  >  SERVICIOS</NavLink></li>
         <li className="nav-item"> <NavLink to="/glamour/nosotros"  > NOSOTROS</NavLink></li>
         <li className="nav-item"> <NavLink to="/glamour/testimonios" >  Testimonios</NavLink></li>
         <li className="nav-item"> <NavLink to="/glamour/contacto" >  Contacto</NavLink></li>


       </ul>



     </div>




    </>

    )
}

export default Navbar