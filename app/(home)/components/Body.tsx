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
      <div className="h-[20rem] w-full dark:bg-black bg-black dark:bg-grid-white/[0.1] bg-grid-small-white/[0.1] relative flex px-36 flex-col justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Skills
        </p>
        <div className="flex gap-8">
          <HtmlSvg />
          <CssSvg />
          <JsSvg />
          <ReactSvg />
          <NextJsSvg />
          <TsSvg />
          <TailwindSvg />
        </div>
      </div>
    </div>
  );
}

export default Body;
