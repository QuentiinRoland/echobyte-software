import React from "react";
import Layout from "../../Layout/Layout";
import Image from "next/image";
import HeroSectionServices from "../../../../public/ServicesHeroSection/ServicesHero.png";
import Button from "../../Button/Button";
import GradientText from "../../GradientText/GradientText";

const HeroSection = () => {
  return (
    <div>
      <Layout className="flex justify-between">
        <div className="flex flex-col gap-24">
          <div>
            <h1 className="text-6xl max-w-[700px]">
              Elevate Your <GradientText>Collaboration</GradientText> with
              EchoConnect’s <GradientText>Advanced Solutions</GradientText>
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="max-w-[700px] text-sm font-light">
              Unlock the full potential of your team with EchoConnect’s suite of
              advanced collaboration tools. From high-definition video calls to
              secure messaging and file sharing, EchoConnect ensures seamless
              communication and data protection. Host engaging virtual
              conferences, integrate your mobile devices, and work effortlessly
              from anywhere. Elevate your productivity with solutions designed
              to keep you connected, informed, and secure, every step of the
              way.
            </p>
            <Button className="text-start max-w-[180px]">
              Explore our services
            </Button>
          </div>
        </div>
        <div className="mt-16">
          <Image
            src={HeroSectionServices}
            alt=""
            width={500}
            height={300}
            className="text-right"
          />
        </div>
      </Layout>
    </div>
  );
};

export default HeroSection;
