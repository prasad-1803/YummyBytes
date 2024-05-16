import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './Navbar.css';
const Navbar = () => {
    const [menu,setmenu]=useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
        <li className={menu==="home"?"active":""}>home</li>
        <li className={menu==="menu"?"active":""}>menu</li>
        <li className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
         <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon' alt="" />
                 <img src={assets.basket_icon} />
                 <div className='dot'></div>
            </div>
            <button>Sign in</button>
         </div>

  )
}

export default Navbar;