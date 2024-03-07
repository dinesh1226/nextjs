"use client";

import React, { useState } from "react";
import BackgroundGradientAnimation from "@/app/(home)/components/ui/background-gradient-animation";
import Link from "next/link";
// import Image from "next/image";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import Hero from "./Hero";

function Header() {
  const [hamburger, sethamburger] = useState(false);
  const hamburgerBtn = () => {
    sethamburger((prev) => !prev);
  };

  return (
    <>
      <nav className="px-10 pt-10 sm:px-40 sm:pt-7">
        {/* <Image
          src="/blur.png"
          layout="fill"
          className="absolute top-0 -z-4 opacity-15 "
          alt="zz"
        /> */}
        <div className=" flex justify-between items-center font-gooperSemiBold w-full relative">
          <Link href={"/"} className="font-gooperSemiBold text-3xl">
            dinesh
          </Link>
          <div
            className="sm:hidden cursor-pointer delay-300"
            onClick={hamburgerBtn}
          >
            {hamburger ? (
              <X className="absolute z-20 top-2 right-0" size={29} />
            ) : (
              <AlignJustify size={29} />
            )}
          </div>
          <div
            className={`sm:flex gap-10 text-3xl sm:text-sm ${
              hamburger
                ? "flex flex-col z-10  absolute top-[375px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black justify-center items-center w-screen h-screen text-lg"
                : "hidden"
            } `}
          >
            <Link
              className="font-gooperSemiBold flex justify-between gap-1"
              href={"/work"}
            >
              WORK <ChevronDown strokeWidth={2.5} size={22} />
            </Link>
            <Link href={"/about"}>ABOUT</Link>
            <Link
              href={
                "https://drive.google.com/file/d/1szgyykDJDPBlitMu1cEYgRSCUSNsxs6c/view?usp=sharing"
              }
              target="_blank"
            >
              RESUME
            </Link>
          </div>
        </div>
      </nav>
      <Hero />
      <BackgroundGradientAnimation />
    </>
  );
}

//For Downlaod = https://drive.google.com/uc?export=download&id=1szgyykDJDPBlitMu1cEYgRSCUSNsxs6c

export default Header;
