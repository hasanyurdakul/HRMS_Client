import React from "react";
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import CompanySlider from "../components/Landing/CompanySlider";
import TrustSection from "../components/Landing/TrustSection";
import TrialCTA from "../components/Landing/TrialCTA";
import Footer from "../components/Landing/Footer";

function Landing() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanySlider />
      <TrustSection />
      <TrialCTA />
      <Footer />
    </>
  );
}

export default Landing;
