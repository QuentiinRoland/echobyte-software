import React from "react";
import { useState } from "react";
import FaqArray from "../FAQ/FaqArray";

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
      <h2>Questions ? </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        laboriosam aliquid? Quaerat, nesciunt labore blanditiis deserunt minus
        omnis. Temporibus, minima.
      </p>
      {FaqArray.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => handleSectionClick(index)}>{faq.title}</h3>
          {indexActive === index && <p>{faq.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
