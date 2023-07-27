import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
const SpaPage = () => {


const handleScroll = () => {
    window.scrollTo(0, 0);
  
  }
  return (
    <>

    <Navbar/>
      <section className="service">

<header>

<h2>Masaje</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >  Masaje</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre Masaje
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>En nuestro negocio, te invitamos a experimentar un relajante y rejuvenecedor día de spa diseñado especialmente para ti. Nuestro equipo de expertos terapeutas está dedicado a proporcionarte un ambiente tranquilo y acogedor, donde podrás desconectarte del estrés diario y disfrutar de un cuidado personalizado.</p>

<p>Ofrecemos una amplia gama de tratamientos de spa, desde masajes terapéuticos hasta faciales revitalizantes y exfoliaciones corporales indulgentes. Además, contamos con opciones de paquetes que combinan varios servicios para que puedas disfrutar de una experiencia completa de bienestar. Ven y sumérgete en un oasis de relajación, permitiendo que nuestros profesionales te mimen y te ayuden a sentirte renovado y rejuvenecido. ¡Esperamos que nos elijas para ser tu destino de spa preferido</p>


<article className="">

<h3>Nustros Masajes
</h3>

<h4>Que incluyen el Servicio
</h4>


<ul>

<li> Masajes
</li>

<li>  faciales
</li>

<li>exfoliaciones
</li>

<li> envolturas corporales

</li>

<li>baños de vapor</li>

<li>relajación</li>

</ul>

</article>

</div>




</div>

<aside>
<h6>Masaje</h6>

<div className="pic5"></div>

</aside>


</div>

<div className="gallery">

<h5>Nuestros Estilos</h5>

<ul className="masajeVideos">
<div className="videoChanging">

<video autoPlay loop playsInline controls>
        <source src="css/videos/spa.mp4" type="video/mp4" width="100%" height="100%"  />
        Your browser does not support the video tag.
      </video>

</div>     </ul>



</div>





</section>

</>  )
}

export default SpaPage