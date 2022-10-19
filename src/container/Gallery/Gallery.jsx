import React from "react";
import {
   BsInstagram,
   BsArrowLeftShort,
   BsArrowRightShort,
} from "react-icons/bs";

import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./Gallery.css";

//lisää fetch tietokannasta
const galleryImages = [
   images.sauna_iso,
   images.sauna_pieni,
   images.sauna_outside,
   images.sauna_pier,
];

const Gallery = () => {
   const scrollRef = React.useRef(null);

   const scroll = (direction) => {
      const { current } = scrollRef;
      if (direction === "left") {
         current.scrollLeft -= 300;
      } else {
         current.scrollLeft += 300;
      }
   };
   return (
      <div className="app__gallery flex__center">
         <div className="app__gallery-content">
            <SubHeading title="Instagram" />
            <h1 className="headtext__poiret-one">Galleria</h1>
            <p
               className="p__raleway"
               style={{ color: "#AAA", marginTop: "2rem" }}
            >
               asdasdasda
            </p>
            <button type="button" className="custom__button">
               View more
            </button>
         </div>
         <div className="app__gallery-images">
            <div className="app__gallery-images_container" ref={scrollRef}>
               {/*lisää linkit instagramiin/facebookiin*/}
               {galleryImages.map((image, index) => (
                  <div
                     className="app__gallery-images_card flex__center"
                     key={`gallery_image-${index + 1}`}
                  >
                     <img src={image} alt="gallery" />
                     <BsInstagram className="gallery__image-icon" />
                  </div>
               ))}
            </div>
            <div className="app__gallery-images_arrows">
               <BsArrowLeftShort
                  className="gallery__arrow-icon"
                  onClick={() => scroll("left")}
               />
               <BsArrowRightShort
                  className="gallery__arrow-icon"
                  onClick={() => scroll("right")}
               />
            </div>
         </div>
      </div>
   );
};
export default Gallery;
