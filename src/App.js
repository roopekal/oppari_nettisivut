import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import EventsPage from "./container/EventsPage/EventsPage";
import Sauna from "./container/Sauna/Sauna";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/FindUs/FindUs";
import "./App.css";

const App = () => (
   <div>
      <Navbar />
      <Header />
      <EventsPage />
      <Sauna />
      <Gallery />
      <FindUs />
   </div>
);

export default App;
