import Layout from "@/Components/Layout/Layout";
import Image from "next/image";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
    </Layout>
  );
}
