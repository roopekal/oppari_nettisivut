import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./Sauna.css";

const Sauna = () => (
   <div className="app__bg app__wrapper section__padding" id="sauna">
      <div className="app__wrapper_img app__wrapper_img-reverse">
         <Carousel
            infiniteLoop={true}
            emulateTouch={true}
            showThumbs={false}
            showStatus={false}
         >
            <div className="app__carousel_sauna-item">
               <img src={images.sauna_iso} alt="iso sauna" />
            </div>
            <div>
               <img src={images.sauna_pieni} alt="pieni sauna" />
            </div>
            <div>
               <img src={images.sauna_pier} alt="Saunalaituri" />
            </div>
            <div>
               <img src={images.sauna_outside} alt="Sauna ulkopuolelta" />
            </div>
         </Carousel>
      </div>
      <div className="app__wrapper_info">
         <div className="app__sauna-content_upper">
            <SubHeading title="Saunaan ja poreisiin? Kyllä!" />
            <p className="p__raleway app__sauna-content_main-text">
               Laanilasta löytyy kaksi tilaussaunaa joista isompi on jopa 30
               henkilölle. Pienempään mahtuu 8 henkilöä. Lisäksi meiltä löytyy
               avanto, joten saunan yhteydessä on mahtava tilaisuus päästä
               virkistämään ulkoilun jäljiltä väsyneitä lihaksia. <br /> Meillä
               on myös lämmin ulkoporeamme. Saunat varauksella, ota yhteyttä ja
               kysy tarjousta! <br /> sauna alk. 30€/hlö sis. pyyhe, laudeliina,
               pesuaineet ja avanto <br /> ulkoporeamme kysy tarjousta
            </p>
         </div>
         <div className="app__sauna-content_lower">
            <SubHeading title="Juhlat tulossa, mutta paikka hukassa? Tule Laanilaan!" />
            <p className="p__raleway app__sauna-content_main-text">
               Kievari on vuokrattavissa erilaisiin tilauksiin häistä
               yritysjuhliin. Sisätiloihin mahtuu 80 henkilöä ja ulkona on lisää
               tilaa.
            </p>
            <p className="p__raleway app__sauna-content_minor-text">
               tehdään tilaisuudestasi yhdessä ikimuistoinen!
            </p>
            <button
               type="button"
               className="custom__button"
               style={{ marginTop: 5 }}
            >
               Ota yhteyttä
            </button>
         </div>
      </div>
   </div>
);

export default Sauna;
