import React, { useState } from 'react'
import Nailsvideos from '../components/videosComp/Nailsvideos';
import Makeupvideos from '../components/videosComp/Makeupvideos';
import Spavideos from '../components/videosComp/Spavideos';




const SelectorVideos = () => {


  const [activeComponent, setActiveComponent] = useState("nails");

  const [videosComponent, setvideosComponent] = useState("makeupVideo");

  function handleComponentClick(componentName) {
    setActiveComponent(componentName);

  }

  


  function videoComponentClick(componentName) {
    setvideosComponent(componentName);

  }
  return (

    <>
<div className="beautySelector">

<div className="text-area">
  
 <p>Servicios que tenemos para ti</p> 
 </div>

<div  className="services">

  <a onClick={() => videoComponentClick('makeupVideo')} className="selection-1" >

<div  className="">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMYprCYuzs0uqSPJRHtv_KxfJQEHe9IZ1iw&usqp=CAU" alt="" className="rounded-circle" />
</div>

<p>Maquillaje</p>

  </a>


  <a onClick={() => videoComponentClick('nailsvideo')} className="selection-1">
<div className="">
<img className="rounded-circle" src="https://media.istockphoto.com/id/1397565854/es/foto/extensi%C3%B3n-de-u%C3%B1a-alargada-rosa.webp?b=1&s=612x612&w=0&k=20&c=YIvurpEyQvB5jxEBozaOwRhQndhRjY_OBv3OPj3mk2Q=" alt="" />

</div>

<p>Una</p>

  </a>

  <a onClick={() => videoComponentClick('spavideo')} className="selection-1">
<div className="">
<img className="rounded-circle" src="https://cdn.pixabay.com/photo/2014/12/13/18/27/woman-567021_1280.jpg" alt="" />

</div>

<p>Spa</p>

  </a>

  
</div>
</div>



<div className="ContainerVideo">

{videosComponent === 'makeupVideo' && <Makeupvideos />}
{videosComponent === 'nailsvideo' && <Nailsvideos />}
{videosComponent === 'spavideo' && <Spavideos />}


</div>



    </>
  )
}

export default SelectorVideos