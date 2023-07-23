"use client";

import { featuredProducts } from "@/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Featured = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  // SSR에서 사용할 수 없는 window 객체를 사용하는 방법
  const getTranslateValue = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1280
        ? slideIndex * -25
        : window.innerWidth >= 768
        ? slideIndex * -50
        : slideIndex * -100;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSlideIndex(0); // window 크기 변경 시 slide reset
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen overflow-hidden text-red-500">
      {/* Wrapper */}
      <div
        className="w-max flex"
        style={{
          transform: `translateX(${getTranslateValue()}vw)`,
          transition: "transform 0.3s ease",
        }}
      >
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 duration-300 md:w-[50vw] xl:w-[25vw] xl:h-[60vh]"
          >
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/* Text Container */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">
                {item.price.toLocaleString()}₩
              </span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                장바구니 추가
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevSlide}
          className="mx-2 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          이전
        </button>
        <button
          onClick={handleNextSlide}
          className="mx-2 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Featured;
