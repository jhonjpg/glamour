import React from 'react'
import { Link } from 'react-router-dom';


export const MakeUp = () => {
  


const handleScroll = () => {
    window.scrollTo(0, 0);
  
  }
 
    return (

    <ol className="">

<div className="">
    

<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/maquillaje"  >
    
    <img src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1200" 
alt="" className="w-100 h-100 object-fit-cover"/>

Maquillaje
</Link></li>


<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/cabello"  >
    
    <img src="https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628_1280.jpg" 
alt="" className="w-100 h-100 object-fit-cover"/>

Cabello

</Link></li>
        </div>
   
    
        </ol>  
        
        
        
        )
}
