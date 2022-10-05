import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./Header.css";
const Header = () => (
   <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
         <SubHeading title="Aitoja lapin makuja" />
         <h1 className="app__header-h1">Kievarissa kuhisee</h1>
         <p
            className="p__raleway"
            style={{ textAlign: "center", margin: "2rem 0" }}
         >
            Laanilan Kievari haluaa tarjota vierailleen elämyksiä. <br /> Meillä
            kyse ei ole vain vatsan täyttämisestä vaan kaikkien palasten
            loksahtamisesta kohdalleen. <br /> Tärkeässä roolissa on tarkasti
            mietitty ruokatuote puhtaista ja lähellä tuotetuista raaka-aineista.
            <br />
            Mahdollisimman moni raaka-aineista on itse käyty poimimassa omalta
            pihalta tai lähimetsästä. <br /> Omin käsin tehdään ja valmistetaan
            kaikki mitä vaan pystytään. <br /> Ruoan ja juoman yhdistäminen on
            meille tärkeää ja viinilista on rakennettu tukemaan ruokatuotetta.
            <br /> Kaikkein tärkeintä Kievarin väelle on kuitenkin kiireetön
            yhdessäolo hyvän ruoan parissa. <br /> Aivan liian usein tänä
            päivänä ihmiset syövät kiireessä ja miettimättä. <br /> Meillä saa
            rentoutua ja nauttia yhdessä syömisen ilosta ja puhtaiden
            raaka-aineiden tuomista makuelämyksistä. <br /> Kievarin mutkaton
            ilmapiiri saa hymyn kasvoille.
            <br />
            <br />
            Tervetuloa!
         </p>
         <button
            type="button"
            className="custom__button"
            style={{ alignSelf: "center" }}
         >
            Katso Menu
         </button>
      </div>
      <div className="app__wrapper_img">
         <img src={images.tartar} alt="placeholder" />
      </div>
   </div>
);

export default Header;
