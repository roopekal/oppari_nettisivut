import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ControlPanel from "./container/ControlPanel/ControlPanel.jsx";
import App from "./App.js";

const Main = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<App />}></Route>
            <Route exact path="/cpanel" element={<ControlPanel />}></Route>
         </Routes>
      </BrowserRouter>
   );
};

export default Main;
