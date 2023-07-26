import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';


const Testimonials = () => {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };


        const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


      const testimonial = [
        
        { 
            




          resenas: ["¡Simplemente increíble! Fui a hacerme un maquillaje para una ocasión especial y quedé impresionada con el resultado. La maquilladora fue profesional y amable, escuchó mis preferencias y me asesoró con gran habilidad.","¡Me sentí como una estrella de cine! Además, el spa fue una experiencia relajante que me dejó renovada y con la piel radiante. Sin duda, volveré pronto. ¡Gracias por hacerme sentir tan especial!" ,
          "Siempre pensé que el maquillaje era solo para mujeres, pero decidí probarlo para un evento y no podría estar más satisfecho."," El equipo del salón me hizo sentir cómodo desde el principio y lograron un maquillaje natural que resaltó mis mejores rasgos."," Fue una experiencia rejuvenecedora y me sorprendió lo bien que me sentí después. ¡Recomendaré este lugar a todos mis amigos!"

          , "¡Este lugar es mi oasis de belleza y bienestar! Cada vez que necesito un maquillaje espectacular para una fiesta o evento, acudo a ellos sin dudarlo."," Sus maquilladores tienen un talento excepcional y siempre logran el aspecto que tengo en mente. También he disfrutado de varios tratamientos de spa, desde masajes relajantes hasta faciales rejuvenecedores."," ¡Son magos! Recomiendo encarecidamente este lugar a todas las personas que deseen sentirse y lucir hermosas por dentro y por fuera."

          , "¡Qué descubrimiento tan maravilloso! Mi esposa me sorprendió con una visita a este salón de maquillaje y spa para mi cumpleaños, y debo decir que fue un regalo increíble."," El maquillaje que me hicieron para la cena fue sofisticado y elegante, y el trato en el spa fue relajante y rejuvenecedor."," El personal es amable y profesional, y el ambiente del lugar es simplemente encantador. Gracias por hacer de mi día especial una experiencia inolvidable.", 
],
 
         nombres:   ["Pedro Perez" , "Luisa Montano", "Maria belnin", "Juana Fanci", "Trevo Bell", "Taisha Talor","Mandy Mazon", "Luisa Almonte"," Janet Perty", "Blanca Mendez", "Neisha Meltown" ],

          

        }


    ]

   
  
  return (
<>

<Navbar/>
<section className="testimonials">

<h3>Testimonios</h3>

<h4>Que dicen Nuestros Clientes</h4>

<Slider {...settings}>

{testimonial[0].resenas.map((resena, index) => (
      <div key={index} className="card">
        


            <i className="bi bi-align-top"></i>

        <div className="">
          <p>{resena}</p>
        </div>
        <div className="name">
          {testimonial[0].nombres[index]}
          <pre>client</pre>
        </div>
      </div>
    ))}


   




    </Slider>






</section>



</>


)
}

export default Testimonials