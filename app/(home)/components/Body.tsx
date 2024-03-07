import React from "react";
import Image from "next/image";
import CssSvg from "@/public/images/css";
import HtmlSvg from "@/public/images/html";
import JsSvg from "@/public/images/js";
import NextJsSvg from "@/public/images/nextjs";
import ReactSvg from "@/public/images/react";
import TsSvg from "@/public/images/ts";
import TailwindSvg from "@/public/images/tailwind";

function Body() {
  return (
    <div>
      <div className="w-full dark:bg-black bg-black dark:bg-grid-white/[0.1] bg-grid-small-white/[0.1] relative flex px-36 flex-col justify-center items-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="font-apercuMono text-5xl py-10 sm:text-5xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Skills
        </p>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-8 w-[30vh] gap-10 pb-16">
          <div className="flex flex-row gap-6">
            <HtmlSvg />
            <CssSvg />
            <JsSvg />
            <TailwindSvg />
          </div>
          <div className="flex gap-6 ">
            <ReactSvg />
            <NextJsSvg />
            <TsSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
