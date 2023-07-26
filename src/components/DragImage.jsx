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

{/* 
            <div ref={imageContainer} className="containerImage" >
                

                <img src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="foto-1"
                    className="w-100 h-100 object-fit-contain"
                />

                <img style={{ filter: "grayscale(100%)", clipPath: `polygon(0 0, ${imageReveal * 100}% 0,${imageReveal * 100}% 100%, 0 100%)` }}
 src="https://images.pexels.com/photos/3762663/pexels-photo-3762663.jpeg?auto=compress&cs=tinysrgb&w=1200"
 alt="foto-2"
                    className="changeImage"
                />

                <div style={{ left: `${imageReveal * 97}% ` }} className="split-line ">

                    <div className="position-absolute top-50 start-50 translate-middle   bg-white w-25 h-100 ">

                        <div className="position-absolute translate-middle bg-danger "></div>

                        <div style={{ touchAction:"none"}} onTouchMove={handleTouchMove} onMouseDown={handleMouseDown} className="split-ball "></div>

                    </div>


                </div>





            </div> */}

        </article>)
}

export default DragImage
