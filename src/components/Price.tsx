"use client";

import { ProductType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/utils/store";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const { addToCart } = useCartStore();

  useEffect(() => {
    setTotalPrice(
      quantity *
        (product.options?.length
          ? product.price + product.options[selected].additionalPrice
          : product.price)
    );
  }, [quantity, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: totalPrice,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("장바구니에 추가하였습니다.");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{totalPrice.toLocaleString()}₩</h2>
      {/* Options Container */}
      <div className="flex gap-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
              style={{
                background: selected === index ? "rgb(248 133 133)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>

      {/* Quantity and Button Container */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>수량</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button
          className="w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
          onClick={handleCart}
        >
          장바구니 추가
        </button>
      </div>
    </div>
  );
};

export default Price;
