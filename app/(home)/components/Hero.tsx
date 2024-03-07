import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TextGenerateEffect } from "./ui/text-generate-effect";
// import Image from "next/image";

function Hero() {
  const isSmallScreen = useMediaQuery({ minWidth: 640 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const renderLineBreak = () => {
    if (isSmallScreen && isMounted) {
      return <br />;
    }
    return null;
  };

  const words = `is a full stack product designer creating digital experiences that simplify, uplift, and nurture human connection.`;
  const words2 = `dinesh k`;
  return (
    <>
      <div className="flex flex-col px-10 sm:justify-center sm:pl-72 pt-28 sm:pt-0 gap-10 h-[80vh] sm:h-[91vh]">
        {/* <h1 className="sm:text-6xl text-5xl">dinesh k</h1> */}
        {/* <h2 className="text-xl leading-9 sm:text-3xl sm:leading-loose">
          is a full stack product designer creating digital experiences that
          {renderLineBreak()}
          simplify, uplift, and nurture human connection.
        </h2> */}
        <TextGenerateEffect className="sm:text-6xl text-5xl" words={words2} />

        <TextGenerateEffect
          className="text-xl leading-9 sm:text-3xl sm:leading-loose sm:w-[900px]"
          words={words}
        />

        <div className="text-xl flex flex-col gap-8 sm:flex-row sm:gap-12">
          <div>
            <h2 className="text-2xl">currently</h2>
            <p className="text-base">a product design intern @ Spotify</p>
          </div>

          <div>
            <h2 className="text-2xl">driven by</h2>
            <p className="text-base">
              driven by empathetic storytelling, human connection, &{" "}
              {renderLineBreak()}
              tech for social good
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
