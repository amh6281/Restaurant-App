import Image from "next/image";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>장바구니 (3)</span>
    </div>
  );
};

export default CartIcon;