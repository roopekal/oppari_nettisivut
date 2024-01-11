import React, { useEffect, useState } from "react";
import "./ControlPanel.css";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { db } from "../../firebase-config";
import Menu from "../Menu/Menu";

const ControlPanel = () => {
   const [activeFolder, setActiveFolder] = useState("");
   const [fileUpload, setFileUpload] = useState(null);
   const [activeWinelist, setActiveWinelist] = useState();
   const [activeMenu, setActiveMenu] = useState();
   const [wineFileList, setWineFileList] = useState([]);
   const [menuFileList, setMenuFileList] = useState([]);
   const fileWinelistRef = ref(storage, "winelist_folder/");
   const fileMenuRef = ref(storage, "menu_folder/");

   async function putData(data) {
      await setDoc(doc(db, "constants", "WinelistLink"), {
         file_link: activeWinelist,
      });
   }

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

   useEffect(() => {
      setWineFileList([]);
      listAll(fileWinelistRef).then((response) => {
         response.items.forEach((item) => {
            getDownloadURL(item).then((url) =>
               setWineFileList((prev) => [...prev, url])
            );
         });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      setMenuFileList([]);
      listAll(fileMenuRef).then((response) => {
         response.items.forEach((item) => {
            getDownloadURL(item).then((url) =>
               setMenuFileList((prev) => [...prev, url])
            );
         });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleWinelistChange = (e) => {
      setActiveWinelist(e.target.value);
      console.log(activeWinelist);
   };
   const handleMenuChange = (e) => {
      setActiveMenu(e.target.value);
      console.log(activeMenu);
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
                  onChange={handleWinelistChange}
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
                     myAlert("New Winelist added", 2000);
                     putData(activeWinelist);
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
            <p className="p__raleway">Upload a new menu</p>
            <div className="app__winelist_upload">
               <input
                  type="file"
                  onClick={() => setActiveFolder("menu")}
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
            <p className="p__raleway">Select active menu</p>
            <div className="app__winelist_select">
               <select
                  onChange={handleMenuChange}
                  name="winelists"
                  id="winelist-select"
               >
                  {menuFileList.map((option, index) => (
                     <option key={index} value={option}>
                        {option.slice(104).split(".")[0]}
                     </option>
                  ))}
               </select>
               <button
                  onClick={() => {
                     myAlert("New Menu added", 2000);
                     putData(activeMenu);
                  }}
                  type="button"
                  className="custom__button"
                  style={{ alignSelf: "center" }}
               >
                  Select
               </button>
            </div>
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
