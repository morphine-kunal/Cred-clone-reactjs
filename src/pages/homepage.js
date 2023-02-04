import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowCase from "../components/ProductionShowCase";
import FeelSpecial from "../components/FeelSpecial";
import MoneyMatters from "../components/MoneyMatters";
import SecurityFirst from "../components/SecurityFirst";
import BrandsLove from "../components/BrandsLove";
import WindowPeak from "../components/WindowPeak";
import MobileScroll from "../components/MobileScroll";

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <MoneyMatters />
      <MobileScroll/>
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <SecurityFirst />
    </React.Fragment>
  );
};

export default Homepage;
