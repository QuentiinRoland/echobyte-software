import React from "react";
import { useState } from "react";
import FaqArray from "../FAQ/FaqArray";
import Layout from "@/Components/Layout/Layout";
import Image from "next/image";
import iconArrowDown from "../../../../public/ServicesFaq/iconArrowDown.png";
import iconArrowUp from "../../../../public/ServicesFaq/iconArrowUp.png";

const FaqSection = () => {
  const [indexActive, setIndexActive] = useState<number | null>(0);

  const handleSectionClick = (index: number) => {
    if (indexActive === index) {
      setIndexActive(null);
    } else {
      setIndexActive(index);
    }
  };
  return (
    <div>
      <Layout className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-center text-3xl">Questions ? </h2>
          <p className="max-w-[800px] text-center text-gray-300 text-md font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            laboriosam aliquid? Quaerat, nesciunt labore blanditiis deserunt
            minus omnis. Temporibus, minima.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {FaqArray.map((faq, index) => (
            <div
              key={index}
              className="bg-white px-4 py-4 flex justify-between gap-4"
              onClick={() => handleSectionClick(index)}
            >
              <div className="w-2/3">
                <div className="flex flex-col gap-2">
                  <h3 className="bg-white text-gray-700">{faq.title}</h3>
                  {indexActive === index && (
                    <p className="text-gray-700">{faq.description}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center">
                {indexActive === index ? (
                  <Image src={iconArrowUp} alt="" width={30} height={30} />
                ) : (
                  <Image src={iconArrowDown} alt="" width={30} height={30} />
                )}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default FaqSection;
