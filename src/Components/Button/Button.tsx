import React, { PropsWithChildren, ReactNode } from "react";

type propsButton = {
  className?: string;
  children: ReactNode;
};

const Button = ({ children, className }: propsButton) => {
  return (
    <button
      className={`relative py-2 px-4 rounded-lg bg-gradient-to-b from-[#613db9] to-[#d86829] shadow-[0px_0px_12px_#f68b1f] ${className}`}
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};

export default Button;
