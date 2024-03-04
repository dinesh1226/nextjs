import React from "react";
import BackgroundGradientAnimation from "@/app/(home)/components/ui/background-gradient-animation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <>
      <nav className="">
        {/* <Image
          src="/blur.png"
          layout="fill"
          className="absolute top-0 -z-4 opacity-15 "
          alt="zz"
        /> */}
        <div className=" flex justify-between items-center font-gooperSemiBold pt-6 px-36 w-full">
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

      <div className="flex flex-col gap-10 justify-center pl-40 h-[93vh]">
        <h1 className="text-6xl">dinesh k</h1>
        <h2 className="text-2xl leading-loose">
          is a full stack product designer creating digital experiences that{" "}
          <br />
          simplify, uplift, and nurture human connection.
        </h2>
        <div className="flex gap-12">
          <div>
            <h2>currently</h2>
            <p>a product design intern @ Spotify</p>
          </div>

          <div>
            <h2>driven by</h2>
            <p>
              driven by empathetic storytelling, human connection, & <br />
              tech for social good
            </p>
          </div>
        </div>
      </div>
      <BackgroundGradientAnimation />
    </>
  );
}

//For Downlaod = https://drive.google.com/uc?export=download&id=1szgyykDJDPBlitMu1cEYgRSCUSNsxs6c

export default Header;
