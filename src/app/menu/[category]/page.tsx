import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("실패!");
  }
  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          className="w-full h-[40vh] border-r-2 border-b-2 border-red-500 sm:w-1/3 lg:w-1/5 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* Text Container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-xl p-2">{item.title}</h1>
            <h2 className="group-hover:hidden font-normal text-base">
              {item.price.toLocaleString()}₩
            </h2>
            <button className="hidden group-hover:block bg-red-500 text-white p-2 rounded-md">
              장바구니 추가
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
