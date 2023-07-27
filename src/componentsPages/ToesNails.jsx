import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ToesNails = () => {


const handleScroll = () => {
  window.scrollTo(0, 0);

}

  return (


    <>

    <Navbar/>
      <section className="service">

<header>

<h2>Unas de los Pies</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >Unas de los Pies</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre cabello
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>Bienvenido a D'Patterson Glamour, su fuente de los tratamientos médicos de spa más avanzados disponibles. Nuestro equipo de profesionales médicos experimentados y altamente capacitados brinda una amplia gama de tratamientos de vanguardia diseñados para ayudarlo a verse y sentirse mejor.
</p>

<p>Ofrecemos una variedad de servicios como Botox, rellenos dérmicos, plasma rico en plaquetas, terapia de goteo intravenoso para pestañas, maquillaje permanente (PMU), blanqueamiento dental, sistema de cavitación Solift, modelado corporal, EMS moderno, depilación láser, Endosphere Full Body & Face, sauna médica y muchos más.
</p>


<article className="">

<h3>Nustros cabello
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
<h6>Unas de los Pies</h6>

<div className="pic4">
</div>

</aside>


</div>

<div className="gallery">

<h5>Nuestros Estilos</h5>

<ul>
    <li><img src="https://cdn.pixabay.com/photo/2017/07/29/16/17/feet-2551966_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2021/01/06/09/13/feet-5893686_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2020/08/08/07/01/legs-5472307_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2015/01/02/20/38/feet-586957_1280.jpg" alt="" /></li>
   
    </ul>



</div>





</section>

</>    )
}

export default ToesNails