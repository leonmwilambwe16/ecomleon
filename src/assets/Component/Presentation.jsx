
import { useEffect, useState } from 'react';
import '../Component/Presentation.css'
import slider1 from '../Image/Bagslider1.jpg'
import slider2 from '../Image/Bagslider2.jpg'
import slider3 from '../Image/Bagslider3.jpg'
import slider4 from '../Image/Bagslider4.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Presentation () {

  const dataimage = [
    {
      id:1, title:'new line',
    },
    {
      id:1, title:'new wave',
    }
    ];  



    const [indexslider ,setindexslider]= useState(1);

    const nexthandler=()=>{
      setindexslider((previndex)=>(previndex+1)% dataimage.length)
    }

    const prevhandler =()=>{
      setindexslider((previndex)=>(previndex-1)% dataimage.length)
    }
    console.log(indexslider);
    
    
    
    useEffect(()=>{
     const intervalid= setInterval(() => {
         nexthandler()
       }, 6000);
       return ()=> clearInterval(intervalid)
      },[])
    


    
  return (
       <div className='slide-container'>
        
          <div className='item-slide' >
          
              
              <h2>Getting ready 30% Off</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br />  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <button>Get product</button>
             
            </div>
            
            
     
            </div>
   
  )
}

export default Presentation


