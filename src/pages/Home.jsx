import React, { useEffect, useState } from 'react'
import DragImage from '../components/DragImage';
import Navbar from '../components/Navbar';

import SelectorVideos from '../components/SelectorVideos';
import Services from '../components/Services';
import SlideComp from '../components/SlideComp';
import Welcome from '../components/Welcome';


const Home = () => {

    const [letra, setLetra] = useState("Descubre el Arte de la Belleza y el Glamour");

    const beautiful = ""
  
    useEffect(() => {
     
      const interval = setInterval(() => {
        setLetra(letra => {
          const letras = ["Encuentra tu Belleza Única y Deslumbra al Mundo", "Ponte cómoda", "Disfruta de la sesión "]; // arreglo con letras
          const letraIndex = letras.indexOf(letra); // obtiene el indice de la letra actual
          return letras[(letraIndex + 1) % letras.length]; // retorna la siguiente letra en el arreglo
        });
  
      }, 4000); // cambia cada 4 segundos
  
      return () => clearInterval(interval); // limpiar el intervalo
    }, []);
    return (

<>
<Navbar/>
<section className="frontP">



  <h1>D'Patterson Glamour</h1>



  <p> Te invitamos a explorar el mundo de la belleza y estilos que tenemos para ti.</p>


  <button> <a href="#vidSecctionA">Comienza Ya  <i className="bi bi-arrow-right"></i></a></button>

{/* <h3 > {letra} <p>{beautiful}</p> </h3> */}




<div className="slindeImg">


  <SlideComp/>


</div>


</section>



<section id="vidSecctionA" className=" vidSecction">

<SelectorVideos/>


</section>




<section className="welcome">

<Welcome/>

</section>

<section className="kindOfService">

<Services/>

</section>



<section className="dragImg">

<strong>Observa la diferencia </strong>

<h5>antes y despues del proceso</h5>

<p>Tus resultados importan. Es por eso que D'Patterson Glamour se esfuerza por brindar resultados de la más alta calidad. Nuestro objetivo es mejorar su apariencia general y ¡devuélvele la confianza!

</p>


<DragImage/>


</section>
</>

)
}

export default Home