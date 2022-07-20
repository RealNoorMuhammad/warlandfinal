import React from "react";
import About from ".././components/Informations/About";
import FAQ from ".././components/Informations/FAQ";
import HeaderInfo from "../components/HeaderInfo";
import Team from "../components/Informations/Team";
import HeroSection from "../components/Informations/HeroSection";
import Tokenmic from "../components/Informations/Tokenmic";
import Footer from "../components/Informations/Footer";

const Info = () => {
  return (
    <div className="bTag">
      <div className="  mainContent">
        <div className="pageCon">
          <HeaderInfo hClass={"hPosAbsolute"} />
          <br />
          <br />
          <br />
          <br />
  
          <HeroSection />
         
          <Team />
          <FAQ />
          <Tokenmic />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Info;
