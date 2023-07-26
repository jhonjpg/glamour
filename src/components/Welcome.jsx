import React, { useState } from 'react'

const Welcome = () => {

    const [articulo, serArticulo] = useState(false);


    const seeMore = () => {
  
  
  
      serArticulo(!articulo)
    }
  
    const hideClass = `hide ${articulo ? "show" : ""}`
  
  
  return (

    <>

    <pre>Bienvenidos a:</pre>


    <h1>D'Patterson Glamour</h1>
  
  <p>¡Bienvenidos al mundo del encanto y la transformación! En nuestro sitio web de belleza, te invitamos a descubrir un refugio donde la belleza se fusiona con el arte, y donde tus sueños de lucir radiante se hacen realidad.
  
  </p>
  
  
  <p>En nuestro estudio de maquillaje, nos enorgullecemos de realzar la belleza natural de cada individuo. Nuestros maquilladores expertos, con una habilidad incomparable, trabajan para crear looks personalizados que reflejen tu personalidad y estilo único. Desde looks suaves y naturales hasta audaces y glamorosos, cada detalle se perfecciona con precisión y dedicación para lograr resultados asombrosos.
  
  </p>
  
  {/* <p>Además, sumérgete en la experiencia relajante de nuestro spa, donde la tranquilidad y el bienestar se combinan para ofrecerte un escape rejuvenecedor. Nuestros tratamientos de spa exclusivos, diseñados para nutrir tanto tu cuerpo como tu mente, te transportarán a un estado de calma y equilibrio. Desde masajes terapéuticos que alivian el estrés hasta tratamientos faciales que revitalizan tu piel, cada servicio está diseñado para brindarte una experiencia inolvidable.
  
  </p> */}
  
  
  {/* 
  <p>Estamos comprometidos con utilizar productos de alta calidad y técnicas innovadoras que aseguren que cada cliente se sienta mimado y cuidado. Nuestro equipo altamente capacitado se esfuerza por brindar un servicio personalizado y atento, asegurándonos de que tu experiencia sea memorable y satisfactoria en cada visita.
  
  </p> */}
  
  <p className={hideClass}> Estamos comprometidos con utilizar productos de alta calidad y técnicas innovadoras que aseguren que cada cliente se sienta mimado y cuidado.
  </p>

{/* 
  <p className={hideClass}>   Nos complace acompañarte en tu viaje hacia la belleza interior y exterior, ofreciendo un lugar donde la elegancia se encuentra con la autenticidad. 
 </p> */}

  <button onClick={seeMore}>{articulo ? "Menos": "leer Mas"}</button>
    </>
    )

}

export default Welcome