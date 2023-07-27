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

<h2>Uña de los Pies</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >Uña de los Pies</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre Uñas de Pies
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>En nuestro negocio, te ofrecemos un servicio de uñas de pies excepcional para mantener tus pies hermosos y bien cuidados. Nuestro equipo de expertos en pedicura se enfoca en brindar una limpieza minuciosa, cortes precisos y un limado perfecto para lograr un acabado impecable. Además, te consentimos con una exfoliación revitalizante y una hidratación profunda que dejará tu piel suave y radiante.</p>

<p>Disfruta de un relajante masaje que te hará sentir renovada y lista para lucir tus uñas con el esmaltado de tu elección. Ven y déjanos cuidar de tus pies en un ambiente cómodo y acogedor. ¡Tu comodidad y satisfacción son nuestra prioridad! Esperamos recibirte para brindarte una experiencia de pedicura excepcional."






</p>


<article className="">

<h3>Nustros Uñas de Pies
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
<h6>Uña de los Pies</h6>

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