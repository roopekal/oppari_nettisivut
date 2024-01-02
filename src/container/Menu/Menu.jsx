import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { doc, collection, getDocs } from "firebase/firestore";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import "./Menu.css";

const Menu = () => {
   const [dessertList, setDessertList] = useState(["ruoka1", "ruoka2"]);
   const docRef = collection(db, "dessertList");

   const getDessertList = async () => {
      const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach((doc) => {
         console.log(doc.id, " => ", doc.data());
      });
   };

   const [input, setInput] = useState("");
   const addMenuItem = (e) => {
      e.preventDefault();
      setDessertList([...dessertList, input]);
      setInput("");
   };

   useEffect(() => {
      getDessertList();
      console.log("jälki " + dessertList);
   }, []);

   return (
      <div className="app__menu-container">
         <div className="app__menu-column">
            starters
            <div>
               <input type="text"></input>
               <input type="text"></input>
               <input type="text"></input>
            </div>
         </div>
         <div className="app__menu-column">
            mains
            <div>
               <input type="text"></input>
               <input type="text"></input>
               <input type="text"></input>
            </div>
         </div>
         <div className="app__menu-column">
            desserts
            <div>
               <form>
                  <input
                     type="text"
                     style={{ margin: "0px 5px" }}
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                  />
                  <button className="custom_button" onClick={addMenuItem}>
                     Add Dessert
                  </button>
               </form>
               <ul>
                  {dessertList.map((todo) => (
                     <li>{todo}</li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Menu;
