import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NailsPage = () => {




const handleScroll = () => {
  window.scrollTo(0, 0);

}

  return (
    <>

    <Navbar/>
      <section className="service">

<header>

<h2>Uña</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >Uña</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre Uña
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>En nuestro negocio, te ofrecemos un servicio de uñas excepcional para que luzcas manos impecables y elegantes. Nuestro equipo de especialistas en manicura y pedicura se dedica a crear diseños únicos y duraderos, utilizando productos de alta calidad para garantizar resultados sorprendentes.</p>

<p>Desde manicuras clásicas hasta arte de uñas personalizado, nos adaptamos a tus preferencias y estilo. Además, nuestro ambiente relajante te permitirá disfrutar de una experiencia de cuidado personalizada. Ven y déjanos consentirte con tratamientos de uñas que realcen tu belleza y te hagan sentir bien contigo misma. ¡Esperamos verte pronto para brindarte un servicio de uñas excepciona</p>


<article className="">

<h3>Nustras Uña
</h3>

<h4>Que incluyen el Servicio
</h4>


<ul>

<li> Limpieza
</li>

<li>  limado
</li>

<li>cutículas
</li>

<li> esmaltado

</li>


<li> uñas acrílicas

</li>

<li> arte de uñas

</li>


<li> brillo

</li>


<li> fijador

</li>

</ul>

</article>

</div>




</div>

<aside>
<h6>Uña</h6>

<div className="pic3">
</div>

</aside>


</div>

<div className="gallery">

<h5>Nuestros Estilos</h5>

<ul>
    <li><img src="https://cdn.pixabay.com/photo/2015/05/31/14/59/hand-792061_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2020/11/10/19/04/nails-5730756_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2018/09/21/19/17/hand-3693764_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2020/10/14/07/03/nail-art-5653458_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2015/05/31/14/46/cuffs-791991_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2015/12/06/09/28/feather-1079258_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2019/05/10/19/35/hand-4194282_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2021/01/06/09/12/feet-5893684_1280.jpg" alt="" /></li>
    </ul>



</div>





</section>

</>  )
}

export default NailsPage