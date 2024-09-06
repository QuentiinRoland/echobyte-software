import Layout from "@/Components/Layout/Layout";
import Image from "next/image";
import React from "react";
import { TestimonialArray } from "./TestimonialArray";

const TestimonialSection = () => {
  return (
    <Layout>
      {/* Wrapper for the background layers */}
      <div className="relative overflow-hidden">
        {/* Div for the gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#613db9] to-red-500 opacity-65 [mask-image:radial-gradient(50%_40%_at_50%_40%,black,transparent)]"></div>

        {/* Div for the image background */}
        <div
          className="absolute inset-0 bg-cover opacity-35"
          style={{
            backgroundImage: `url(${"/Testimonial/hexagonalBackground.png"})`,
            maskImage:
              "radial-gradient(25% 25% at 50% 25%, black, transparent)",
          }}
        ></div>

        {/* Content section */}
        <div className="relative flex flex-col justify-center items-center text-center gap-2 text-white">
          <span className="text-lg text-gray-300">Testimonial</span>
          <h2 className="text-3xl font-bold">What people say</h2>
          <p className="max-w-xl mx-auto mb-4 text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            consequuntur minima, quibusdam quos sit odio ad unde impedit commodi
            cum.
          </p>

          {/* Testimonial Cards */}
          <div className="flex gap-8 justify-center">
            {TestimonialArray.map((testimonial, index) => (
              <div key={index} className="custom-gradient-border">
                <div className="content p-8 flex flex-col items-start text-start gap-2">
                  <Image
                    src={testimonial.picture}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.nameOfCustomer}
                    </h3>
                    <p>{testimonial.job}</p>
                  </div>
                  <p className="text-gray-300">"{testimonial.description}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialSection;
