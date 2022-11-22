import React, { useEffect, useState } from "react";
import "./ControlPanel.css";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { updateValue } from "../../features/winelist";

const ControlPanel = () => {
   const [activeFolder, setActiveFolder] = useState("");
   const [fileUpload, setFileUpload] = useState(null);
   const [activeWinelist, setActiveWinelist] = useState();
   const [wineFileList, setWineFileList] = useState([]);
   const fileWinelistRef = ref(storage, "winelist_folder/");
   const [testList, setTestList] = useState([]);

   const dispatch = useDispatch();

   // filujen lisääminen firebaseen
   const uploadFile = () => {
      if (fileUpload == null) return;
      const fileRef = ref(
         storage,
         `${activeFolder}_folder/${fileUpload.name + v4()}`
      );
      uploadBytes(fileRef, fileUpload).then(() => {
         alert("File uploaded");
      });
   };

   //label = response.items[0]._location.path_.slice(16).split(".")[0]
   //value = linkki
   //filun nimi ==== wineFileList.map((item) => item.slice(104).split(".")[0])

   //kerää viinilistojen URL linkit firebasesta
   useEffect(() => {
      listAll(fileWinelistRef).then((response) => {
         response.items.forEach((item) => {
            getDownloadURL(item).then((url) =>
               setWineFileList((prev) => [...prev, url])
            );
         });
      });
   }, []);

   useEffect(() => {
      listAll(fileWinelistRef).then((response) => {
         setTestList(
            response.items.map(
               (label) =>
                  (label = label._location.path_.slice(16).split(".")[0])
            )
         );
      });
   }, []);

   const handleChange = (e) => {
      setActiveWinelist(e.target.value);
      console.log(activeWinelist);
   };
   const myAlert = (msg, duration) => {
      var alt = document.createElement("div");
      alt.setAttribute("class", "app__popup");
      alt.innerHTML = msg;
      setTimeout(function () {
         alt.parentNode.removeChild(alt);
      }, duration);
      document.body.appendChild(alt);
   };

   return (
      <div className="flex__center section__padding app__bg app__cpanel_container">
         <div className="app__winelist_container app__cpanel-section">
            <p className="app__cpanel-section_headtext">Winelist</p>
            <p className="p__raleway">Upload a new winelist</p>
            <div className="app__winelist_upload">
               <input
                  type="file"
                  onClick={() => setActiveFolder("winelist")}
                  onChange={(event) => {
                     setFileUpload(event.target.files[0]);
                  }}
               />
               <button
                  onClick={uploadFile}
                  type="button"
                  className="custom__button"
                  style={{ alignSelf: "center" }}
               >
                  Upload
               </button>
            </div>
            <p className="p__raleway">Select active winelist</p>
            <div className="app__winelist_select">
               <select
                  onChange={handleChange}
                  name="winelists"
                  id="winelist-select"
               >
                  {wineFileList.map((option, index) => (
                     <option key={index} value={option}>
                        {option.slice(104).split(".")[0]}
                     </option>
                  ))}
               </select>
               <button
                  onClick={() => {
                     dispatch(updateValue({ listLink: activeWinelist }));
                     myAlert("New Winelist added", 2000);
                  }}
                  type="button"
                  className="custom__button"
                  style={{ alignSelf: "center" }}
               >
                  Select
               </button>
            </div>
         </div>
         <div className="app__menu_container app__cpanel-section">
            <p className="app__cpanel-section_headtext">Menu</p>
         </div>
         <div className="app__events_container app__cpanel-section">
            <p className="app__cpanel-section_headtext">Events</p>
         </div>
         <div className="app__gallery_container app__cpanel-section">
            <p className="app__cpanel-section_headtext">Gallery</p>
         </div>
      </div>
   );
};

export default ControlPanel;
