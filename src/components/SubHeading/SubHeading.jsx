import React from "react";
import { MdPadding } from "react-icons/md";
import images from "../../constants/images";
const SubHeading = ({ title }) => (
   <div style={{ marginBottom: "1rem" }}>
      <p className="p__poiret-one">{title}</p>
      <img src={images.branch} alt="placeholder" className="branch__img" />
   </div>
);

export default SubHeading;
