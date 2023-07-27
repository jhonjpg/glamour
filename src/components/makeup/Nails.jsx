import React from 'react'
import { Link } from 'react-router-dom';

export const Nails = () => {
  

const handleScroll = () => {
  window.scrollTo(50, 50);

}
  
    return (

    <ol className="">
  
<div className="">
<li className="nav-item" onClick={handleScroll}> <Link to="/glamour/pies"  >
  
  <img src=" https://images.pexels.com/photos/8945996/pexels-photo-8945996.jpeg?auto=compress&cs=tinysrgb&w=1200"
  alt="" className=""/>  PIES
  
  
  </Link></li>

  <li className="nav-item" onClick={handleScroll}> <Link to="/glamour/manos"  >
          
          <img src=" https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="w-100 h-100 object-fit-cover"/> Manos
          
          </Link></li>
        </div>
   

    
        </ol>  
        
        
        
        )
}
