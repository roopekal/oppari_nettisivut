import React from "react";
import logo from "../assets/images/laanilan_kievari_logo_no_bg.png";

const Navbar = () => (
   <nav className="app__navbar">
      <div className="app__navbar-logo">
         <img src={logo} alt="restaurant logo" />
      </div>
      <ul className="app__navbar-links">
         <li className="p__raleway">
            <a href="#aboutus">Kievari</a>
         </li>
         <li className="p__raleway">
            <a href="#">|</a>
         </li>
         <li className="p__raleway">
            <a href="#events">Tapahtumat</a>
         </li>
         <li className="p__raleway">
            <a href="#">|</a>
         </li>
         <li className="p__raleway">
            <a href="#menu">A la carte</a>
         </li>
         <li className="p__raleway">
            <a href="#">|</a>
         </li>
         <li className="p__raleway">
            <a href="#wines">Viinit</a>
         </li>
         <li className="p__raleway">
            <a href="#">|</a>
         </li>
         <li className="p__raleway">
            <a href="#sauna">Sauna</a>
         </li>
         <li className="p__raleway">
            <a href="#">|</a>
         </li>
         <li className="p__raleway">
            <a href="#contact">Yhteystiedot</a>
         </li>
      </ul>
   </nav>
);

export default Navbar;
