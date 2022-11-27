import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import ControlPanel from "./container/ControlPanel/ControlPanel.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<App />}></Route>
         <Route exact path="/admin" element={<ControlPanel />}></Route>
      </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
