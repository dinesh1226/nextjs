import React from "react";
import BackgroundGradientAnimation from "@/app/(home)/components/ui/background-gradient-animation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import Image from "next/image";

function Navbar() {
  return (
    <nav className="">
      <BackgroundGradientAnimation />
      <Image
        src="/blur.png"
        layout="fill"
        className="absolute top-0 -z-index-2 opacity-15 "
        alt="zz"
      />
      <div className="absolute top-0 right-0 flex justify-between items-center font-gooperSemiBold pt-6 px-36 w-full">
        <Link href={"/"} className="font-gooperSemiBold text-2xl">
          dinesh
        </Link>
        <div className="flex gap-10 text-sm">
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
  );
}

//For Downlaod = https://drive.google.com/uc?export=download&id=1szgyykDJDPBlitMu1cEYgRSCUSNsxs6c

export default Navbar;
