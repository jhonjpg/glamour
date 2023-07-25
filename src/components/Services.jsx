import React, { useState } from 'react'
import { MakeUp } from '../components/makeup/MakeUp';
import { Nails } from '../components/makeup/Nails';
import { Spa } from '../components/makeup/Spa';

const Services = () => {

    

    const [activeComponent, setActiveComponent] = useState("nails");


  function handleComponentClick(componentName) {
    setActiveComponent(componentName);

  }

  return (


<>



<div  className="typeOfServices">

<h6 className="">Servicios</h6>
<ul>

  <li onClick={() => handleComponentClick('nails')}>  una</li>
  <li onClick={() => handleComponentClick('spa')}>  Spa</li>
  <li onClick={() => handleComponentClick('makeUp')}>   Maquillaje</li>


</ul>

<div className="OptionService">

{activeComponent === 'makeUp' && <MakeUp />}
{activeComponent === 'nails' && <Nails />}
{activeComponent === 'spa' && <Spa />}

</div>

</div>

  </>
  )
}

export default Services