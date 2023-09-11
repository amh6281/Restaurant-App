"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "신선한 재료, 따듯함을 바삭한 메뉴를 보장합니다.",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "전국매장을 통해 주문받고 빠른 배달을 원칙으로 하고 있습니다.",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "가족과, 연인과 친구와 함께하는 최고의 메뉴를 경험해 보세요.",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);
    // 메모리 누수를 막기 위한 생명주기 끝나는 시점에 interval 종료
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-400 font-bold">
        <h1 className="text-5xl text-center p-4 leading-tight md:p-10 md:text-6xl lg:leading-relaxed">
          {data[currentSlide].title}
        </h1>
        <Link href="/menu">
          <button className="bg-red-500 text-white py-4 px-8">주문하기</button>
        </Link>
      </div>

      {/* Image Container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
