import React from "react";

import { FiFacebook, FiInstagram } from "react-icons/fi";

import FooterOverlay from "../../components/Footer/FooterOverlay";
import Links from "../../components/Footer/Links";
import images from "../../constants/images";
import "./Footer.css";
const Footer = () => (
   <div className="app__footer">
      <FooterOverlay />
      <Links />
      <div className="app__footer-links">
         <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Yhteystiedot</h1>
            <p className="p__raleway">
               Sateenkaarenpääntie 9, 99830 Saariselkä.
            </p>
            <p className="p__raleway">info(a)laanilankievari.fi</p>
            <p className="p__raleway">+358 400 239 868</p>
         </div>
         <div className="app__footer-links_logo">
            <img src={images.logo} alt="footer logo" />
            <p className="p__raleway">
               Meillä saa rentoutua ja nauttia yhdessä syömisen ilosta sekä
               puhtaiden raaka-aineiden tuomista makuelämyksistä.
            </p>
            <div className="app__footer-links_icons">
               <FiFacebook />
               <FiInstagram />
            </div>
         </div>
         <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Avoinna</h1>
            <p className="p__raleway">Maanantai-Lauantai:</p>
            <p className="p__raleway">16:00 - 22:00</p>
         </div>
      </div>
      <div className="app__copyright">
         <p className="p__raleway">© 2022 Laanilan Kievari</p>
      </div>
   </div>
);

export default Footer;
