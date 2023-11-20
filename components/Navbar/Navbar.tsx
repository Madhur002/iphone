import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#ffffff5d] flex backdrop-blur-xl h-[80px] shadow-lg w-full py-3 px-4 rounded-3xl justify-between">
        <button className="h-10 w-10 bg-pink-300 rounded-xl relative">
          <Image
            className="absolute"
            src="/icons/call.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </button>
        <button className="h-10  w-10 bg-pink-300 rounded-xl relative">
        <Image
            className="absolute"
            src="/icons/safari.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </button>
        <button className="h-10  w-10 bg-pink-300 rounded-xl relative">
        <Image
            className="absolute"
            src="/icons/iMessage.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </button>
        <button className="h-10  w-10 bg-pink-300 rounded-xl relative">
        <Image
            className="absolute"
            src="/icons/appleMusic.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
