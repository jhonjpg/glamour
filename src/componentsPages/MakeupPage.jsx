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



<p>Experiencia profesional: En tu negocio, puedes ofrecer servicios de maquillaje realizados por maquilladores profesionales con experiencia y habilidades. La destreza de los expertos en maquillaje garantizará un resultado impecable y personalizado para cada cliente, brindándoles un aspecto que se adapte perfectamente a sus características faciales y estilo personal.

</p>

<p>Para muchos clientes, hacerse el maquillaje en tu negocio les permite ahorrar tiempo y esfuerzo. Al confiar en profesionales capacitados, pueden obtener un maquillaje impecable sin tener que preocuparse por aplicarlo ellos mismos, lo que les permite disfrutar de su tiempo y relajarse.

</p>


<article className="">

<h3>Nustros Maquillajes
</h3>

<h4>Que incluyen el Servicio
</h4>


<ul>

<li> Aplicación de maquillaje,
</li>

<li>  impieza facial,
</li>

<li>preparación de la piel
</li>

<li> correcciones

</li>



<li> sombreado

</li>


<li> resaltado

</li>

<li>delineado</li>


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