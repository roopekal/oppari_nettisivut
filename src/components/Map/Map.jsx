import React from "react";
import { MdLocationPin } from "react-icons/md";
import GoogleMapReact from "google-map-react";

import "./Map.css";

const LocationPin = ({ text }) => (
   <div className="pin">
      <MdLocationPin size={34} className="pin-icon" />
      <p className="pin-text">{text}</p>
   </div>
);

const Map = ({ location, zoomLevel }) => (
   <div className="map">
      <div className="google-map">
         <GoogleMapReact
            bootstrapURLKeys={{
               key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY2,
            }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
         >
            <LocationPin
               lat={location.lat}
               lng={location.lng}
               text={location.address}
            />
         </GoogleMapReact>
      </div>
   </div>
);

export default Map;
