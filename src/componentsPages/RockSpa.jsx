import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RockSpa = () => {




const handleScroll = () => {
    window.scrollTo(0, 0);
  
  }
  return (
    <>

    <Navbar/>
      <section className="service">

<header>

<h2>Masaje con Rocas</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >  Masaje con Rocas</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre Masaje con Rocas
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>Bienvenido a D'Patterson Glamour, su fuente de los tratamientos médicos de spa más avanzados disponibles. Nuestro equipo de profesionales médicos experimentados y altamente capacitados brinda una amplia gama de tratamientos de vanguardia diseñados para ayudarlo a verse y sentirse mejor.
</p>

<p>Ofrecemos una variedad de servicios como Botox, rellenos dérmicos, plasma rico en plaquetas, terapia de goteo intravenoso para pestañas, maquillaje permanente (PMU), blanqueamiento dental, sistema de cavitación Solift, modelado corporal, EMS moderno, depilación láser, Endosphere Full Body & Face, sauna médica y muchos más.
</p>


<article className="">

<h3>Nustros Masaje con Rocas
</h3>

<h4>Que incluyen el Servicio
</h4>


<ul>

<li> Brindamos tratamientos de primer nivel
</li>

<li>  ¡Adelgaza tu cuerpo, siéntete increíble!
</li>

<li>Fortalece tu corazón y tu mente
</li>

<li> Mejorar la apariencia general

</li>

</ul>

</article>

</div>




</div>

<aside>
<h6>Masaje con Rocas</h6>

<div className="pic6"></div>

</aside>


</div>

<div className="gallery">

<h5>Nuestros Estilos</h5>

<ul className="masajeVideos">
<div className="videoChanging">

<video autoPlay loop playsInline controls>
        <source src="css/videos/rock.mp4" type="video/mp4" width="100%" height="100%"  />
        Your browser does not support the video tag.
      </video>

</div>     </ul>



</div>





</section>

</>   )
}

export default RockSpa