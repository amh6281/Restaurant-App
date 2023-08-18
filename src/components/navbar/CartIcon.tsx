"use client";

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React from "react";

const CartIcon = () => {
  const { totalItems } = useCartStore();

  return (
    <div className="flex items-center gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>장바구니 ({totalItems})</span>
    </div>
  );
};

export default CartIcon;
