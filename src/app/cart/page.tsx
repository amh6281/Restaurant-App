"use client";

import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  // useCartStore의 상태를 이전에 저장한 상태로 복원
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "주문 확인중",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
              <h1 className="text-xl font-bold">
                {item.title} x {item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">{item.price.toLocaleString()}₩</h2>
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
          <span>{totalPrice.toLocaleString()}₩</span>
        </div>
        <div className="flex justify-between">
          <span>배달요금</span>
          <span className="text-green-500">0₩</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>총 주문금액</span>
          <span className="font-bold">{totalPrice.toLocaleString()}₩</span>
        </div>
        <button
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
          onClick={handleCheckout}
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CartPage;
