import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <div className="w-1/6 flex items-center justify-center">
        <h1 className="lowercase font-extrabold text-4xl tracking-wide font-title text-[#38603E] hover:scale-150 ease-in-out duration-300">
          Geara
        </h1>
      </div>
      <div className="w-2/4 ">
        <p className="text-[#3C413D] font-medium font-body text-xl opacity-80">
          Hello, <b className="font-extrabold text-[#38603E]">Enrique</b>!
        </p>
      </div>
      <div className="w-1/4 flex items-center justify-center gap-5 font-body font-medium text-[#3C413D] text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer hover:scale-150 ease-in-out duration-300 text-[#38603E]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <Link href="" passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer hover:scale-150 ease-in-out duration-300 text-[#38603E]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
