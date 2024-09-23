import Layout from "@/Components/Layout/Layout";
import React, { useState } from "react";
import Image from "next/image";
import ServicesImagesArray from "./ServicesImagesArray";
import ServicesContentArray from "./ServicesArray";

const ServicesCard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default image index 0

  const handleServiceClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the text and reset active index
    } else {
      setActiveIndex(index); // Open the clicked service
    }
  };

  return (
    <div>
      <Layout className="flex">
        <div className="w-1/3 flex flex-col gap-2">
          <h2 className="text-2xl">Your services</h2>

          {activeIndex === null ? (
            <div>
              <Image
                src={ServicesImagesArray[0].img}
                alt="Default Image"
                width={400}
                height={400}
              />
            </div>
          ) : (
            ServicesImagesArray.map((image, index) => (
              <div key={index}>
                {activeIndex === index && (
                  <Image src={image.img} alt="" width={400} height={400} />
                )}
              </div>
            ))
          )}
        </div>

        <div className="w-2/3 flex flex-col gap-2">
          <p className="text-md text-gray-300 mb-2 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa
            totam quam voluptate error repellat omnis recusandae laborum
            reprehenderit ad!
          </p>
          {ServicesContentArray.map((service, index) => (
            <div key={index}>
              <h3
                className="bg-[#222648] border px-2 py-4"
                onClick={() => handleServiceClick(index)}
              >
                {service.title}
              </h3>
              {activeIndex === index && (
                <div>
                  <p>{service.description}</p>
                  <button>{service.button}</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};
export default ServicesCard;
