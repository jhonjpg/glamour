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



<p>En nuestro negocio, te ofrecemos una experiencia de masaje única y revitalizante con el toque especial de masaje con rocas calientes. Nuestros terapeutas expertos utilizan piedras volcánicas cuidadosamente calentadas para liberar tensiones y proporcionar un profundo alivio muscular. Este masaje combina la terapia tradicional con el calor reconfortante de las rocas, lo que aumenta la relajación y mejora la circulación sanguínea</p>

<p>Ven y sumérgete en una experiencia terapéutica y rejuvenecedora, donde nuestras habilidosas manos y las rocas calientes trabajan juntas para aliviar tu cuerpo y mente del estrés acumulado. ¡Déjanos consentirte y disfrutarás de un masaje con rocas que te dejará sintiéndote renovado y revitalizado</p>


<article className="">

<h3>Nustros Masaje con Rocas
</h3>

<h4>Que incluyen el Servicio
</h4>


<ul>

<li> Aceites esenciales
</li>

<li>  piedras volcánicas calentadas
</li>

<li>técnicas de masaje
</li>

<li> experiencia rejuvenecedora

</li>

<li>alivio muscular</li>

<li>relajación</li>

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