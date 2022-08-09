import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[5vh] w-full flex items-center justify-center font-title text-xl font-bold uppercase tracking-widest text-[#38603E] opacity-50">
      <Link href="https://github.com/Vannent/geara">© Roberto Cedeno</Link>
    </div>
  );
};

export default Footer;
