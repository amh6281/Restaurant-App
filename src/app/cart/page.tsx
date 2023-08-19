"use client";

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalPrice, removeFromCart } = useCartStore();

  // useCartStore의 상태를 이전에 저장한 상태로 복원
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* Product Container */}
      <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* Single Item */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div>
              <h1 className="text-xl font-bold">{item.title}</h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">{item.price}₩</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>주문금액</span>
          <span>{totalPrice}₩</span>
        </div>
        <div className="flex justify-between">
          <span>배달요금</span>
          <span className="text-green-500">0₩</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>총 주문금액</span>
          <span className="font-bold">{totalPrice}₩</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CartPage;
