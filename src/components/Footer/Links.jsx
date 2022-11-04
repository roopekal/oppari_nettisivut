import React from "react";

import "./Links.css";

import images from "../../constants/images";

const Links = () => (
   <div className="app__links">
      <div className="app__links-link">
         <a href="http://www.winestate.fi/">
            <img src={images.winestate} alt="winestate" />
         </a>
      </div>
      <div className="app__links-link">
         <a href="http://www.gaytravelfinland.com/wespeakgaycommunity">
            <img src={images.we_speak_gay} alt="we speak gay" />
         </a>
      </div>
      <div className="app__links-link">
         <a href="http://www.culinari.fi/">
            <img src={images.culinari} alt="culinari" />
         </a>
      </div>
      <div className="app__links-link">
         <a href="http://www.lapinpanimo.fi/">
            <img src={images.lapin_panimo} alt="lapin panimo" />
         </a>
      </div>
      <div className="app__links-link">
         <a href="https://www.oivahymy.fi/portal/fi/hae+yrityksia/#text=laanilan%20kievari&">
            <img src={images.oiva} alt="oiva raportti" />
         </a>
      </div>
      <div className="app__links-link">
         <a href="https://www.tripadvisor.com/Restaurant_Review-g667560-d3820618-Reviews-Laanilan_kievari-Saariselka_Lapland.html">
            <img src={images.trip_advisor} alt="trip advisor" />
         </a>
      </div>
   </div>
);

export default Links;
