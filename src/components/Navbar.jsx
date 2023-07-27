import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';



const Navbar = () => {


  const [menu, setmenu] = useState(true);

const [serviceTg, setserviceTg] = useState(false)
  const [toggleOn, settoggleOn] = useState(false)


const toggleMenu = () => {

  settoggleOn(!toggleOn)

}


const serviceOn = () => {

  setserviceTg(!serviceTg)

}



const handleScroll = () => {
  window.scrollTo(0, 0);

}


const change = (e) => {
  if (window.scrollY >= 100) {

  setmenu(false)
} else {
  setmenu(true)

}

}

window.addEventListener("scroll", change)



const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`
const servToggle = `servicetgoff ${serviceTg ? "servicetg" : ""}`


  return (


    <>

    {/* phone Nav */}
    <nav className={menu ? "nav " : "nav active"}>
<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul className={toggle}>
    <li className="nav-item" onClick={handleScroll}> <Link exact="true" to="/glamour/" activeclassname="active" >  Inicio</Link></li>
 
 <li onClick={serviceOn} >   < ScrollLink
to="servicios"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"


> Servicios+
</ScrollLink>

<ol className={servToggle}>

<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/maquillaje" >  Maquillaje</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/cabello" >  Cabello</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/pies"  > Pies</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/manos" >  Manos</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/masaje" >  Masajes</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/masaje-rocas"  > Masaje de Rocas</Link></li>

</ol> </li>



         <li className="nav-item" onClick={handleScroll}> <Link to="/glamour/nosotros"  > Nosotros</Link></li>
         <li className="nav-item" onClick={handleScroll}> <Link to="/glamour/testimonios" >  Testimonios</Link></li>
         <li className="nav-item" onClick={handleScroll}> <Link to="/glamour/contacto" >  Contacto</Link></li>



       </ul>

     

       <div className="logo"></div>




     </nav>


{/* other device */}


<div className={menu ? "devices " : "devices activ"}>



<div className="logo"></div>



    <ul className="">
    <li className="nav-item" onClick={handleScroll}> <NavLink exact="true" to="/glamour/" activeclassname="active" >  INICIO</NavLink></li>
         <li className="serviceNav" onClick={handleScroll} >  < ScrollLink
to="servicios"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"


> SERVICIOS+
</ScrollLink>



<ol className="servicesMenu">

<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/maquillaje" >  Maquillaje</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/cabello" >  Cabello</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/pies"  > Pies</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/manos" >  Manos</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/masaje" >  Masajes</Link></li>
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/masaje-rocas"  > Masaje de Rocas</Link></li>

</ol>

</li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/glamour/nosotros"  > NOSOTROS</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/glamour/testimonios" >  TESTIMONIOS</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/glamour/contacto" >  CONTACTO</NavLink></li>


       </ul>



     </div>




    </>

    )
}

export default Navbar