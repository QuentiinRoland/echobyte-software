import React from "react";
import Layout from "../Layout/Layout";
import Link from "next/link";
import Image from "next/image";
import navLinks from "../Header/NavLinks";

const Header = () => {
  return (
    <Layout className="text-white flex justify-between items-center py-[35px]">
      <span>EchoByte</span>
      <ul className="hidden md:flex gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.id}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button className="relative py-2 px-4 rounded-lg bg-gradient-to-b from-[#613db9] to-[#d86829] shadow-[0px_0px_12px_#f68b1f]">
          <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          </div>
          <span>Contact</span>
        </button>
        <button className="md:hidden">
          <Image
            src="/Header/hamburgerIcon.png"
            alt=""
            width={30}
            height={30}
          ></Image>
        </button>
      </div>
    </Layout>
  );
};

export default Header;
