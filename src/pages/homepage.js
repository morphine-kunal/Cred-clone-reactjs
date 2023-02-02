import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowCase from "../components/ProductionShowCase";
import FeelSpecial from "../components/FeelSpecial";
import MoneyMatters from "../components/MoneyMatters";

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ProductShowCase/>
      <FeelSpecial/>
      <MoneyMatters />
    </React.Fragment>
  );
};

export default Homepage;
