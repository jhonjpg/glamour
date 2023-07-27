import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';



const MakeupPage = () => {




const handleScroll = () => {
    window.scrollTo(0, 0);
  
  }
  
  return (

    <>

    <Navbar/>
      <section className="service">

<header>

<h2>Maquillaje</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >  Maquillaje</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre Maquillaje
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>Bienvenido a D'Patterson Glamour, su fuente de los tratamientos médicos de spa más avanzados disponibles. Nuestro equipo de profesionales médicos experimentados y altamente capacitados brinda una amplia gama de tratamientos de vanguardia diseñados para ayudarlo a verse y sentirse mejor.
</p>

<p>Ofrecemos una variedad de servicios como Botox, rellenos dérmicos, plasma rico en plaquetas, terapia de goteo intravenoso para pestañas, maquillaje permanente (PMU), blanqueamiento dental, sistema de cavitación Solift, modelado corporal, EMS moderno, depilación láser, Endosphere Full Body & Face, sauna médica y muchos más.
</p>


<article className="">

<h3>Nustros Maquillajes
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
<h6>Maquillaje</h6>

<div className="pic"></div>

</aside>


</div>

<div className="gallery">

<h5>Nuestros Estilos</h5>

<ul>
    <li><img src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2016/04/09/23/10/girl-1319114_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2017/09/21/07/47/girl-2771001_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2017/06/01/16/08/woman-2363819_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2017/08/16/12/43/woman-2647691_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2014/10/13/18/10/woman-487067_1280.jpg" alt="" /></li>
    </ul>



</div>





</section>

</>
  )
}

export default MakeupPage