import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
import Link from "next/link";

const Offer = () => {
  return (
    <div className="mt-10 bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          accusantium a ratione aliquam autem quia laborum eos, perspiciatis
          numquam sequi veniam quod quaerat animi libero ut odit ipsum aperiam
          sint.
        </p>
        <CountDown />
        <Link href="/menu">
          <button className="bg-red-500 text-white rounded-md py-3 px-6">
            주문하기
          </button>
        </Link>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
