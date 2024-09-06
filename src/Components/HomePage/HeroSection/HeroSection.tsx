import React from "react";
import Layout from "../../Layout/Layout";
import BackgroundHero from "../../../../public/HeroSection/heroSectionBackground.jpg";
import Image from "next/image";
import NumberSection from "../NumberKey/NumberSection";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background Image and Gradient Overlays */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={BackgroundHero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0e1a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e1a] to-transparent" />
      </div>

      <Layout className="flex flex-col gap-8">
        <div className="relative z-10 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/4" />

          <div className="w-full md:w-2/4 flex flex-col gap-4">
            <span className="flex items-center justify-center text-sm text-gray-300 py-2 px-4 bg-[#15172c] border-gray-700 border rounded-lg shadow-inner-custom">
              Empowering Innovation, One Solution at a Time
            </span>
            <h1 className="text-3xl">
              Stay Ahead with the Latest in{" "}
              <span className="bg-gradient-to-b from-[#613db9] to-[#d86829] text-transparent bg-clip-text">
                Technology
              </span>
            </h1>
            <p className="text-gray-300">
              In the fast-paced world of technology, staying ahead isn't just an
              option—it's a necessity. Our company is dedicated to bringing you
              the most cutting-edge solutions, tailored to meet the unique
              demands of your business. With a focus on innovation, reliability,
              and efficiency, we help you navigate the ever-changing tech
              landscape with confidence. Partner with us to unlock new
              possibilities and drive your business forward.
            </p>
          </div>

          <div className="w-full md:w-1/4" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start md:justify-center">
          <button className="relative bg-[#613db9] py-2 px-4 rounded-sm shadow-[0px_8px_12px_#613db9]">
            <div className="absolute inset-0">
              <div className="absolute border rounded-sm border-white/20 inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className="absolute border rounded-sm border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
            </div>
            Our services
          </button>

          <button className="relative bg-[#d86829] py-2 px-4 rounded-sm shadow-[0px_8px_12px_#d86829]">
            <div className="absolute inset-0">
              <div className="absolute border rounded-sm border-white/20 inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className="absolute border rounded-sm border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
            </div>
            Our pricing
          </button>
        </div>
        <NumberSection />
      </Layout>
    </div>
  );
};

export default HeroSection;
