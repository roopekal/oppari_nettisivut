import React from "react";

import Map from "../../components/Map/Map";
import SubHeading from "../../components/SubHeading/SubHeading";

const location = {
   address: "Sateenkaarenpääntie 9, 99830 Saariselkä",
   lat: 68.402469,
   lng: 27.392732,
};

const FindUs = () => (
   <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
         <SubHeading title="Yhteystiedot" />
         <h1 className="headtext__poiret-one" style={{ marginBottom: "3rem" }}>
            Ota yhteyttä
         </h1>
         <div className="app__wrapper-content">
            <p
               className="p__verdana"
               style={{ marginBottom: "2rem", textTransform: "none" }}
            >
               Haluatko tehdä varauksen, tiedustella tai jäikö jokin
               askarruttamaan? Soita tai laita sähköpostia!
            </p>
            <p className="p__verdana">+358 400 239 868</p>
            <p className="p__verdana">info(a)laanilankievari.fi</p>
            <p className="p__verdana">
               Sateenkaarenpääntie 9, 99830 Saariselkä.
            </p>
            <p
               className="p__poiret-one"
               style={{ color: "#DCCA87", margin: "2rem 0" }}
            >
               Avoinna
            </p>
            <p className="p__raleway">ma - la klo 16:00 - 22:00</p>
            <button className="custom__button">
               <a href="https://v2.tableonline.fi/instabook/bookings/qc3IEJ4">
                  Varaa Pöytä
               </a>
            </button>
         </div>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
         <Map location={location} zoomLevel={16} />
      </div>
   </div>
);

export default FindUs;
