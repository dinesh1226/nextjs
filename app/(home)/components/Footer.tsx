import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const words = `let’s build something impactful.`;

function Footer() {
  return (
    <>
      <div className="sm:pl-72 px-10 h-[30vh] w-full dark:bg-black bg-black  dark:bg-dot-white/[0.1] bg-dot-white/[0.2] relative flex flex-col justify-center gap-7 border-t-[1px] border-gray-500">
        <TextGenerateEffect
          className="text-left text-xl uppercase"
          words={words}
        />
        <div className="text-white flex gap-10 underline">
          <div className="flex flex-col gap-1">
            <Link href={""}>Work↗</Link>
            <Link href={""}>About↗</Link>
            <Link href={""}>Resume↗</Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link href={""}>LinkedIn↗</Link>
            <Link href={""}>Email↗</Link>
            <Link href={""}>Github↗</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
