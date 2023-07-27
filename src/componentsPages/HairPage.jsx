import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';


const HairPage = () => {



const handleScroll = () => {
    window.scrollTo(0, 0);
  
  }
  return (
    <>

    <Navbar/>
      <section className="service">

<header>

<h2>cabello</h2>

<li className="nav-item" onClick={handleScroll} > <NavLink to="/glamour/"  >Inicio  </NavLink></li>

<strong>&gt;</strong>
         <li >  cabello</li>



</header>

<div className="divColumn">
<div className="recomended">
    

    <div className="divRecomended">
    <h3>Sobre cabello
</h3>

<h4>Por Que lo Recomendamos
</h4>



<p>En nuestro negocio, te garantizamos una experiencia de cuidado capilar excepcional. Nuestro equipo de estilistas altamente capacitados está listo para brindarte cortes y peinados personalizados que realzarán tu belleza única</p>

<p>ofrecemos una amplia gama de tratamientos capilares de primera calidad para nutrir y revitalizar tu cabello. Ven y déjanos consentirte en un ambiente relajado y acogedor. ¡Tu satisfacción es nuestra prioridad! Confía en nosotros para lucir un cabello radiante y saludable. Te esperamos para transformar tu estilo en algo extraordinario.</p>


<article className="">

<h3>Nustros cabello
</h3>

<h4>Que incluyen el Servicio
</h4>


<ul>

<li> Corte
</li>

<li>  peinado
</li>

<li>lavado
</li>

<li> secado

</li>


<li> coloración

</li>


<li> tratamientos

</li>


<li> estilizado

</li>

</ul>

</article>

</div>




</div>

<aside>
<h6>Cabello</h6>

<div className="pic2">
</div>

</aside>


</div>

<div className="gallery">

<h5>Nuestros Estilos</h5>

<ul>
    <li><img src="https://cdn.pixabay.com/photo/2020/06/08/09/01/hair-5273705_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2018/04/07/19/39/woman-3299379_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2017/03/27/13/59/adult-2178904_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2017/09/21/07/47/girl-2771001_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2016/10/07/08/56/woman-1721065_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2016/07/28/10/45/woman-1547507_1280.jpg" alt="" /></li>
    <li><img src="https://cdn.pixabay.com/photo/2018/01/01/19/25/woman-3054812_1280.jpg" alt="" /></li>
    </ul>



</div>





</section>

</>  )
}

export default HairPage