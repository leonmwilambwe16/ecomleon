import React from 'react'
import { PiDropboxLogoDuotone } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { GiSevenPointedStar } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import '../Component/Awardwinning.css'



function Awardwinning (){
  return (
    <div className='award-container'>
      <div className="up-bloc">
        <div className="hight-precision">
          <a href=""> <PiDropboxLogoDuotone className='logo-block-items' /></a>
       
        <h3>Lorem ipsum </h3>
        <p>Lorem ipsum dolor sit <br /> amet, consectetur adipiscing </p>
        </div>
        <div className="hight-precision">
          <a href=""><FaAward className='logo-block-items' /></a>
        <h3>Lorem ipsum </h3>
        <p>Lorem ipsum dolor sit <br /> amet, consectetur adipiscing </p>
          </div>
          <div className="hight-precision">
            <a href=""> <GiSevenPointedStar className='logo-block-items' /></a>
          <h3>Lorem ipsum </h3>
          <p>Lorem ipsum dolor sit <br /> amet, consectetur adipiscing </p>
          </div>
          <div className="hight-precision">
            <a href=""> <MdLocalShipping className='logo-block-items' /></a>
         
          <h3>Lorem ipsum </h3>
          <p>Lorem ipsum dolor sit <br /> amet, consectetur adipiscing </p>
          </div>
      </div>
      <div className="dow-bloc">
        <div className="block-left">
          <h2>Posuere Maecenas Tincidunt</h2>
          <p>exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />  Excepteur sint occaecat <br /> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <button>See Collection</button>
        </div>
        <div className="block-right">
          
        </div>
        </div>
    </div>
  )
}

export default Awardwinning