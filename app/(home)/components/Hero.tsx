import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col gap-10 absolute top-1/2 left-[580px] pl-20 transform -translate-x-1/2 -translate-y-1/2">
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
  );
}

export default Hero;
