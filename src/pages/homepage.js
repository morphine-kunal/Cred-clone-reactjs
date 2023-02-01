import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowCase from "../components/ProductionShowCase";

const Homepage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ProductShowCase/>
    </React.Fragment>
  );
};

export default Homepage;
