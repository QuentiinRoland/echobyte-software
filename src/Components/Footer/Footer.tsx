import React from "react";
import Layout from "../Layout/Layout";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#d86829] [mask-image:radial-gradient(20%_40%_at_90%_80%,black,transparent)]"></div>
      <Layout>
        <div className="relative py-[35px] flex flex-col gap-8">
          <div className="flex gap-12 items-center">
            <div className="p-4 w-28 h-28 bg-[#15172c] shadow-inner-custom-footer flex justify-center items-center rounded-3xl">
              <Image
                src={"/Header/hamburgerIcon.png"}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <ul className="flex flex-col gap-2">
                  <Link href={""}>
                    <li>Services</li>
                  </Link>
                  <Link href={""}>
                    <li>Pricing</li>
                  </Link>
                  <Link href={""}>
                    <li>About</li>
                  </Link>
                  <Link href={""}>
                    <li>Blog</li>
                  </Link>
                </ul>
              </div>
              <div>
                <div className="flex gap-2">
                  <p className="font-light">FOLLOW US</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="flex gap-2">
                  <Link href="" className="p-2 bg-white rounded-lg">
                    <Image
                      src={"/Footer/linkedinIcon.png"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href="" className="h-8 w-8 bg-white rounded-lg">
                    <Image
                      src={"/Footer/githubIcon.png"}
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>Contact us</p>
            </div>
          </div>
          <div className="relative flex gap-6">
            <p>2024 - All Rights Reserved.</p>
            <div className="flex gap-2">
              <Link href="">Privacy Policy</Link>
              <Link href="">Sitemap</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
