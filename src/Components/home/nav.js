import React from 'react';
import "./css/nav.css";
import Logo from '../assets/Logo.png'


function Navbar() {
    return (
        <div>
          <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Become A Partner</a></li>
                <li><a href="#">SELECT LOCATION</a></li>
             
            </ul>
            <div class="logo">
            <img style={{height: "50px"}} src={Logo}/>
            </div>
        </div>
    </nav>
        </div>
    );
}

export default Navbar;



