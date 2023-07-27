import React, { useState, TouchEvent, useRef } from "react";
import MakeUpA from './beforeAfter/MakeUpA';
import UnasA from './beforeAfter/UnasA';




const DragImage = () => {

    
    const [dragImage, setdragImage] = useState("maquillaje")
    

    function handleComponentClick(componentName) {
        setdragImage(componentName);
    
      }
    
   
    return (


        <article className="">

<ul className="">

  <li onClick={() => handleComponentClick('maquillaje')}>   MAQUILLAJE</li>
  <li onClick={() => handleComponentClick('unas')}>  UNAS</li>


</ul>

<aside className="">
<strong>Antes </strong>

<strong>Despues</strong>
</aside>


{dragImage === 'maquillaje' && <MakeUpA />}
{dragImage === 'unas' && <UnasA />}

        </article>)
}

export default DragImage
