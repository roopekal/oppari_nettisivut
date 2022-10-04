import React, { useState } from "react";
import logo from "../../assets/images/laanilan_kievari_logo_no_bg.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);
   return (
      <nav className="app__navbar">
         <div className="app__navbar-logo">
            <img src={logo} alt="restaurant logo" />
         </div>
         <ul className="app__navbar-links">
            <li className="p__raleway">
               <a href="#aboutus">Kievari</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="#events">Tapahtumat</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="#menu">A la carte</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="#wines">Viinit</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="#sauna">Sauna</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="#contact">Yhteystiedot</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="https://v2.tableonline.fi/instabook/bookings/qc3IEJ4">
                  Varaa pöytä
               </a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="https://www.tableonline.fi/fi/saariselka/laanilan-kievari/818/giftcard">
                  Lahjakortti
               </a>
            </li>
         </ul>
         <div className="app__navbar-lang">
            <a href="#" className="app__navbar-lang--flag">
               🇬🇧 | 🇫🇮
            </a>
         </div>
         <div className="app__navbar-smallscreen">
            <GiHamburgerMenu
               color="#fff"
               fontSize={27}
               onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
               <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                  <MdOutlineRestaurantMenu
                     fontSize={27}
                     className="overlay_close"
                     onClick={() => setToggleMenu(false)}
                  />
                  <ul className="app__navbar-smallscreen_links">
                     <li className="p__raleway">
                        <a href="#aboutus">Kievari</a>
                     </li>

                     <li className="p__raleway">
                        <a href="#events">Tapahtumat</a>
                     </li>

                     <li className="p__raleway">
                        <a href="#menu">A la carte</a>
                     </li>

                     <li className="p__raleway">
                        <a href="#wines">Viinit</a>
                     </li>

                     <li className="p__raleway">
                        <a href="#sauna">Sauna</a>
                     </li>

                     <li className="p__raleway">
                        <a href="#contact">Yhteystiedot</a>
                     </li>

                     <li className="p__raleway">
                        <a href="https://v2.tableonline.fi/instabook/bookings/qc3IEJ4">
                           Varaa pöytä
                        </a>
                     </li>

                     <li className="p__raleway">
                        <a href="https://www.tableonline.fi/fi/saariselka/laanilan-kievari/818/giftcard">
                           Lahjakortti
                        </a>
                     </li>
                  </ul>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
