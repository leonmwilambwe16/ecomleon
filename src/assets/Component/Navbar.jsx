import '../Component/Navbar.css'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { GiSchoolBag } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";

function Navbar(){


  const [menuBurger,setmenuburger] =useState(false);
  const toggleNavbar=()=>{
    setmenuburger(!menuBurger);
  }

  return (
    
    <nav>
      <div className="head-nav">
        <div className="first-nav">
        <div className="social-icone">
        <a href=""><FaFacebook /></a>
        <a href=""><FaXTwitter /></a>
        <a href=""><AiFillInstagram /></a>
        </div>
        <div className="logo-head">
        <GiSchoolBag />
        <h4>Chief</h4>
        </div>
        <div className="search-user-cart">
        <IoSearchOutline />
        <FaUser />
        <IoCart />
        </div>
        </div>

        <div className="seconde-nav">
          <ul className={`navigation-bar ${menuBurger?"open":""}`}>
            <li>Home</li>
            <li>Shop <MdKeyboardArrowDown /> </li>
            <Link to='/Items'>  <li>Products <MdKeyboardArrowDown /></li></Link>
          
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div className={`huberger-menue-btn ${menuBurger?"open":""}`} onClick={toggleNavbar}   >
          <FaBars />
          </div>
        
        </div>
       
      </div>
    </nav>
  )
}

export default Navbar

