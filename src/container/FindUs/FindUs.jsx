import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import "./FindUs.css";

const FindUs = () => (
   <div
      className="app__bg app__wrapper section__padding app__contact-container"
      id="contact"
   >
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
      <div>
         <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5874.185054693408!2d27.398258!3d68.403148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45cd4339076c9c0d%3A0x7d965c2fc2a1906e!2sLaanilan%20Kievari!5e0!3m2!1sen!2sus!4v1669377169732!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
   </div>
);

export default FindUs;
