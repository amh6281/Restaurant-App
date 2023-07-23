"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  let difference = +new Date(`10/10/2023`) - +new Date(); // 마감날짜 - 현재날짜
  const [delay, setDelay] = useState(difference);

  // 일, 시, 분, 초 변환 후 padStart를 통해 한자리 수는 0으로 채움.
  const d = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const h = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const m = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
  const s = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <span className="font-bold text-4xl text-yellow-300">
      {d}일 {h}시간 {m}분 {s}초
    </span>
  );
};

export default CountDown;
