import Layout from "@/Components/Layout/Layout";
import "../app/globals.css";
import HeroSection from "@/Components/Services/HeroSection/HeroSection";
import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Spacing from "@/Components/Spacing/Spacing";
import WhoIsForSection from "@/Components/Services/WhoIsForSection/WhoIsForSection";

const services = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Spacing size="lg" />
      <WhoIsForSection />
      <Footer />
    </div>
  );
};

export default services;
