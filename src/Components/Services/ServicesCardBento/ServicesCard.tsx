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
        <div className="w-1/3">
          <h2>Your services</h2>

          {/* Display the default image if no service is active */}
          {activeIndex === null ? (
            <div>
              <Image
                src={ServicesImagesArray[0].img} // Default image when no service is selected
                alt="Default Image"
                width={300}
                height={300}
              />
            </div>
          ) : (
            // Display the image for the selected active service
            ServicesImagesArray.map((image, index) => (
              <div key={index}>
                {activeIndex === index && (
                  <Image src={image.img} alt="" width={300} height={300} />
                )}
              </div>
            ))
          )}
        </div>

        <div className="w-2/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa
            totam quam voluptate error repellat omnis recusandae laborum
            reprehenderit ad!
          </p>
          {ServicesContentArray.map((service, index) => (
            <div key={index}>
              <h3 onClick={() => handleServiceClick(index)}>{service.title}</h3>
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
