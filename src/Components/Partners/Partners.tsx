import React from "react";
import PartnersArray from "./PartnersArray";
import Layout from "../Layout/Layout";
import Image from "next/image";

const Partners = () => {
  return (
    <div>
      <Layout>
        <div className="flex justify-evenly items-center gap-4 ">
          {PartnersArray.map((partner, index) => (
            <div key={index}>
              <Image
                src={partner.image}
                alt={partner.alt}
                width={100}
                height={100}
              />
            </div>
          )).slice(0, 5)}
        </div>
      </Layout>
    </div>
  );
};

export default Partners;
