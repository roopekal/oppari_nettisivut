import React, { useEffect, useState } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./Header.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const Header = () => {
   const [menuList, setMenuList] = useState();
   const docRefMenu = doc(db, "constants", "MenuLink");

   const getMenuLink = async () => {
      const docSnap = await getDoc(docRefMenu);
      setMenuList(docSnap.get("file_link"));
   };

   useEffect(() => {
      getMenuLink();
      //console.log(menuList);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div className="app__header app__wrapper section__padding" id="home">
         <div className="app__wrapper_info">
            <SubHeading title="Aitoja lapin makuja" />
            <h1 className="app__header-h1">Laanilan Kievari</h1>
            <p className="p__raleway" style={{ margin: "2rem 0" }}>
               Laanilan Kievari haluaa tarjota vierailleen elämyksiä. <br />{" "}
               Meillä kyse ei ole vain vatsan täyttämisestä vaan kaikkien
               palasten loksahtamisesta kohdalleen. <br /> Tärkeässä roolissa on
               tarkasti mietitty ruokatuote puhtaista ja lähellä tuotetuista
               raaka-aineista.
               <br />
               Mahdollisimman moni raaka-aineista on itse käyty poimimassa
               omalta pihalta tai lähimetsästä. <br /> Omin käsin tehdään ja
               valmistetaan kaikki mitä vaan pystytään. <br /> Ruoan ja juoman
               yhdistäminen on meille tärkeää ja viinilista on rakennettu
               tukemaan ruokatuotetta.
               <br /> Kaikkein tärkeintä Kievarin väelle on kuitenkin kiireetön
               yhdessäolo hyvän ruoan parissa. <br /> Aivan liian usein tänä
               päivänä ihmiset syövät kiireessä ja miettimättä. <br /> Meillä
               saa rentoutua ja nauttia yhdessä syömisen ilosta ja puhtaiden
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
               <a href={menuList} rel="noreferrer" target="_blank">
                  Katso Menu
               </a>
            </button>
         </div>
         <div className="app__wrapper_img">
            <img src={images.tartar} alt="placeholder" />
         </div>
      </div>
   );
};

export default Header;
