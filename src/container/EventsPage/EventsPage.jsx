import React from "react";
import "./EventsPage.css";
import images from "../../constants/images";

const EventsPage = () => (
   <div
      className="app__events app__bg flex__center section__padding"
      id="events"
   >
      <div className="app__events-content flex__center">
         <div className="app__events-content_general">
            <h1 className="headtext__poiret-one">JOULU 2022</h1>
            <img src={images.branch} alt="divider" className="branch__img" />
            <p className="p__verdana" style={{ textAlign: "center" }}>
               Jouluaatto <br /> la 24.12. Perinteinen joulupöytä <br /> klo
               13-15 <br /> klo 16-18
               <br /> klo 19-21 <br /> 56€/hlö <br /> alle 12v 1€/ikävuosi{" "}
               <br />
               <br />
               Joulupäivä su 25.12. <br />A la Carte klo 16-23 <br />
               <br /> Tapaninpäivä ma 26.12. <br /> A la Carte klo 16-23
            </p>
         </div>
         <div className="app__events-content_permanent">
            <h1 className="headtext__poiret-one">KIEVARIN VIINIMAISTAJAISET</h1>
            <img src={images.branch} alt="divider" className="branch__img" />
            <p className="p__verdana">
               Järjestämme olut-, viski- ja viinipruuveja tilauksella
               <br />
               Ota rohkeasti yhteyttä!
            </p>
            <button type="button" className="custom__button">
               Ota yhteyttä
            </button>
         </div>
      </div>
      <div className="app__facebook_container">
         <iframe
            title="fb-feed"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLaanilanKievari%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            className="app__facebook_iframe"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
         ></iframe>
      </div>
   </div>
);

export default EventsPage;
