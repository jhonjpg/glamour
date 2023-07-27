import React from 'react'
import { Link } from 'react-router-dom';

export const Spa = () => {
  


const handleScroll = () => {
    window.scrollTo(0, 0);
  
  }
  
    return (



    <ol className="">
  
    <div className="">
    <li className="nav-item" onClick={handleScroll}> <Link to="/glamour/masaje"  >
        <img src="https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-100 h-100 object-fit-cover"/>MASAJE
        </Link></li>

    
        <li className="nav-item" onClick={handleScroll}> <Link to="/glamour/masaje-rocas"  >
        <img src="https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="w-100 h-100 object-fit-cover"/>MASAJE CON ROCAS
        
        </Link></li>
            </div>
       
    





    
        </ol>  
        
        
        
        )
}
