import Layout from "@/Components/Layout/Layout";
import "../app/globals.css";
import Image from "next/image";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HomePage/HeroSection/HeroSection";
import Callout from "@/Components/HomePage/Callout/Callout";
import Spacing from "@/Components/Spacing/Spacing";
import TestimonialSection from "@/Components/HomePage/Testimonial/TestimonialSection";
import Footer from "@/Components/Footer/Footer";
import Partners from "@/Components/Partners/Partners";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Spacing size="lg" />
      <Partners />
      <TestimonialSection />
      <Spacing size="lg" />
      <Callout />
      <Footer />
    </main>
  );
}
