import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ActiveTopCampaigns from "./components/Campaigns";
import HiringProcess from "./components/HiringProcess";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <Navbar />
      <Main />
      <ActiveTopCampaigns />
      <HiringProcess />
      <Footer />
    </div>
  );
};

export default App;
