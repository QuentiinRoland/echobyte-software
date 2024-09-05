import Layout from "@/Components/Layout/Layout";
import Image from "next/image";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";
import Callout from "@/Components/Callout/Callout";
import Spacing from "@/Components/Spacing/Spacing";
import TestimonialSection from "@/Components/HeroSection/Testimonial/TestimonialSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Spacing size="lg" />
      <TestimonialSection />
      <Spacing size="lg" />
      <Callout />
    </main>
  );
}
