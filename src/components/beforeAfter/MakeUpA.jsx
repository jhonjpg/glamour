import React, { useState, TouchEvent, useRef } from "react";

const MakeUpA = () => {


    const [imageReveal, setimageReveal] = useState(0.5);
    
    function dragImageClick(componentName) {
      setdragImage(componentName);
  
    }
  
      const imageContainer = useRef(undefined)
  
      const slide = (xPosition) => {
  
      
  
          const containterBounding = imageContainer.current.getBoundingClientRect()
  
          // console.log(containterBounding)
  
  
          setimageReveal(() => {
  
              if(xPosition < containterBounding.left){
  
  
                  return 0
              } else if(xPosition > containterBounding.right){
  
                  return 1
              }else{
  
                  
                  return ((xPosition - containterBounding.left) / containterBounding.width)
                  
                 }
  
  
          })
  
  
      }
  
  
      const handleMouseMove = (e) => {
  
          slide(e.clientX)
      }
  
      const handleMouseUp = () => {
  
          window.onmousemove = undefined
          window.onmouseup = undefined
  
      }
  
      const handleMouseDown = () => {
  
          window.onmousemove = handleMouseMove
          window.onmouseup = handleMouseUp
  
  
      }
  
  
  
     const handleTouchMove = (e) => {
  
      slide(e.touches.item(0).clientX)
  
     }
     
  

  return (



    <div ref={imageContainer} className="containerImage" >
                

    <img src="css/img/dMakeup2.jpg"
        alt="foto-1"
        className="w-100 h-100 object-fit-contain"
    />

    <img style={{ filter: "grayscale(0%)", clipPath: `polygon(0 0, ${imageReveal * 100}% 0,${imageReveal * 100}% 100%, 0 100%)` }}
src="css/img/dMakeup.jpg"
alt="foto-2"
        className="changeImage"
    />

    <div style={{ left: `${imageReveal * 97}% ` }} className="split-line ">

        <div className="position-absolute top-50 start-50 translate-middle   bg-white w-25 h-100 ">

            <div className="position-absolute translate-middle bg-danger "></div>

            <div style={{ touchAction:"none"}} onTouchMove={handleTouchMove} onMouseDown={handleMouseDown} className="split-ball "></div>

        </div>


    </div>





</div>  

)
}

export default MakeUpA