import React, { ReactNode } from "react";

type propsGradientText = {
  children: ReactNode;
  className?: string;
};

const GradientText = ({ children, className }: propsGradientText) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#613db9] to-[#d86829] text-transparent bg-clip-text ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientText;
