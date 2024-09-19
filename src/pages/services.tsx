import Layout from "@/Components/Layout/Layout";
import "../app/globals.css";
import HeroSection from "@/Components/Services/HeroSection/HeroSection";
import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Spacing from "@/Components/Spacing/Spacing";
import WhoIsForSection from "@/Components/Services/WhoIsForSection/WhoIsForSection";
import ServicesCard from "@/Components/Services/ServicesCardBento/ServicesCard";
import FaqSection from "@/Components/Services/FAQ/FaqSection";

const services = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Spacing size="lg" />
      <WhoIsForSection />
      <Spacing size="lg" />
      <ServicesCard />
      <Spacing size="lg" />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default services;
