import '../Component/Items.css'
import { productdata } from '../../productdata'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filterproduct from '../../Pages/Filterproduct';
import Navbar from './Navbar';




function Items () {
 
  const [rating,setrating]= useState(null);


 
  return (
    <div className="">


    <div className='big-container'>
      <h3>Products</h3>
    <div className='items-container'> 
      { productdata.map((produit)=>{
       return(
      <div className="item-content-product" key={produit.id}  >
        <div className="details-zone">
         <img src={produit.img} alt="" />
        </div>
        
        <div className='button-items-box'>
          <div className="stars-items">
        {[...Array(5)].map((star) =>{
         
         return(
           
             
             <FaStar className='star-review' />
 
         )
       }

       )}
       </div>
        <h4>{produit.items}</h4>
        <p>{produit.details}</p>
        <span>${produit.price}</span>
        <div className="btn-cart">
     
          <button>Add to cart</button>
          </div>
        
        </div>
       
        
      </div>
    
  )})}
    </div>
    </div>
    </div>
  )
}

export default Items  






