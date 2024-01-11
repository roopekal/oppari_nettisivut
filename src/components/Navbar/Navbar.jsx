import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import test_pdf from "../../assets/test.pdf";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const Navbar = () => {
   const [wineList, setWineList] = useState();
   const docRefWine = doc(db, "constants", "WinelistLink");

   const [menuList, setMenuList] = useState();
   const docRefMenu = doc(db, "constants", "MenuLink");

   const getWinelistLink = async () => {
      const docSnap = await getDoc(docRefWine);
      setWineList(docSnap.get("file_link"));
   };
   const getMenuLink = async () => {
      const docSnap = await getDoc(docRefMenu);
      setMenuList(docSnap.get("file_link"));
   };
   useEffect(() => {
      getWinelistLink();
      getMenuLink();
      //console.log(wineList);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const [toggleMenu, setToggleMenu] = useState(false);
   return (
      <nav className="app__navbar">
         <div className="app__navbar-logo">
            <a href="#home" className="app__navbar-logo">
               <img src={images.logo} href="#home" alt="restaurant logo" />
            </a>
         </div>
         <ul className="app__navbar-links">
            <li className="p__raleway">
               <a href="#home">Kievari</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href="#events">Ajankohtaista</a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href={menuList} target="_blank">
                  A la carte
               </a>
            </li>
            <li className="p__raleway app__navbar-divider">
               <a href="#"></a>
            </li>
            <li className="p__raleway">
               <a href={wineList} rel="noreferrer" target="_blank">
                  Viinit
               </a>
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
                        <a href="#home" onClick={() => setToggleMenu(false)}>
                           Kievari
                        </a>
                     </li>

                     <li className="p__raleway">
                        <a href="#events" onClick={() => setToggleMenu(false)}>
                           Tapahtumat
                        </a>
                     </li>

                     <li className="p__raleway">
                        <a href="#menu" onClick={() => setToggleMenu(false)}>
                           A la carte
                        </a>
                     </li>

                     <li className="p__raleway">
                        <a href="#wines" onClick={() => setToggleMenu(false)}>
                           Viinit
                        </a>
                     </li>

                     <li className="p__raleway">
                        <a href="#sauna" onClick={() => setToggleMenu(false)}>
                           Sauna
                        </a>
                     </li>

                     <li className="p__raleway">
                        <a href="#contact" onClick={() => setToggleMenu(false)}>
                           Yhteystiedot
                        </a>
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
