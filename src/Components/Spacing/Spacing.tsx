import React from "react";
import { cn } from "@/lib/utils";

type propsSize = {
  size?: "sm" | "md" | "lg";
};

const Spacing = ({ size = "md" }: propsSize) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-10 lg:h-18": size === "md",
        "h-12 lg:h-20": size === "lg",
      })}
    ></div>
  );
};

export default Spacing;
