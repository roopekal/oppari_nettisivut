import React from "react";
import { Routes, Route } from "react-router-dom";

import ControlPanel from "./container/ControlPanel/ControlPanel.jsx";
import App from "./App.js";

const Main = () => {
   return (
      <Routes>
         <Route exact path="/" element={<App />}></Route>
         <Route exact path="/cpanel" element={<ControlPanel />}></Route>
      </Routes>
   );
};

export default Main;
