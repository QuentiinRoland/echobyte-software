import React from "react";
import Layout from "../Layout/Layout";
const Callout = () => {
  return (
    <Layout>
      <div
        className="border rounded-sm relative"
        style={{
          borderImage: "linear-gradient(to bottom, #fff, #7B7B7B) 1",
          backgroundImage: `url(${"/Callout/stars.png"})`,
        }}
      >
        <div
          className="absolute inset-0 bg-[#613db9] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] opacity-65"
          style={{
            backgroundImage: ` url(${"/Callout/grid-lines.png"})`,
          }}
        ></div>
        <div className="relative px-16 py-24 flex flex-col justify-center items-center text-center gap-2">
          <span>Optimize your team's collaboration</span>
          <h2 className="text-2xl font-semibold">Discover EchoConnect Today</h2>
          <p className="max-w-[800px] text-lg text-white/70 tracking-tight">
            Transform the way your team communicates and collaborates with
            EchoConnect. Enjoy HD video conferencing, secure messaging, and
            powerful analytics tools to boost productivity and strengthen team
            cohesion, no matter where you are. Join the thousands of companies
            already improving their efficiency with our innovative platform.
          </p>
          <button className="relative bg-[#d86829] py-2 px-4 rounded-sm shadow-[0px_8px_12px_#d86829]">
            <div className="absolute inset-0">
              <div className="absolute border rounded-sm border-white/20 inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className="absolute border rounded-sm border-white/40 inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
            </div>
            Start for free
          </button>{" "}
        </div>
      </div>
    </Layout>
  );
};

export default Callout;
