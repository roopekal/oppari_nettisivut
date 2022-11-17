import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./container/AdminPage/AdminPage.jsx";
import App from "./App.js";

const Main = () => {
   return (
      <Routes>
         <Route exact path="/" element={<App />}></Route>
         <Route exact path="/admin" element={<AdminPage />}></Route>
      </Routes>
   );
};

export default Main;
