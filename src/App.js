import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import EventsPage from "./container/EventsPage/EventsPage";
import Sauna from "./container/Sauna/Sauna";
import "./App.css";

const App = () => (
   <div>
      <Navbar />
      <Header />
      <EventsPage />
      <Sauna />
   </div>
);

export default App;
