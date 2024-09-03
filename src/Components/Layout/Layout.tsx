import React, { PropsWithChildren, ReactNode } from "react";

type layoutProps = {
  className?: string;
  children: ReactNode;
};

const Layout = ({ children, className }: layoutProps) => {
  return (
    <div className={`w-full max-w-[1440px] px-[5%] mx-auto", ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
