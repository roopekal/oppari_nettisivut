import React from "react";

const SubHeading = ({ title }) => (
   <div style={{ marginBottom: "1rem" }}>
      <p className="p__raleway">{title}</p>
      <img
         src="laanilan_kievari_logo_no_bg.png"
         alt="spoon_image"
         className="spoon__img"
      />
   </div>
);

export default SubHeading;
