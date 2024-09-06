import Layout from "@/Components/Layout/Layout";
import React from "react";
import Image from "next/image";
import SectorActivities from "./SectorActivities";

const WhoIsForSection = () => {
  return (
    <div>
      <Layout className="flex flex-col gap-8 ">
        <div className="flex items-end gap-4">
          <div className="flex flex-col gap-1 w-1/3">
            <span className="text-xs bg-[#613db9] text-white p-2 max-w-[230px] text-center rounded-lg shadow-inner-custom ">
              Tailored Solutions for Every Industry
            </span>
            <h2 className="text-3xl">Who is EchoConnect For ?</h2>
          </div>
          <p className="text-gray-300 font-light w-2/3">
            EchoConnect is designed to meet the unique needs of a variety of
            industries, offering a flexible and secure platform for seamless
            communication and collaboration.
          </p>
        </div>
        <div className="flex gap-4 border-md ">
          {SectorActivities.map((activity, index) => (
            <div className="flex flex-col custom-gradient-border">
              <div className=" bg-[#15172c] p-5 gap-2 rounded-md content-sector ">
                <Image
                  src={activity.icon}
                  alt=""
                  width={50}
                  height={50}
                  className="bg-[#222648] p-2 rounded-md shadow-inner-custom-footer"
                />
                <h3 className="text-2xl">{activity.title}</h3>
                <p className="font-light text-gray-300">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default WhoIsForSection;
