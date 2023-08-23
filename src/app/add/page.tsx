"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const AddPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  return (
    <div>
      <form className="shadow-lg flex flex-wrap gap-4 p-8">
        <h1>상품 추가</h1>
        <div className="w-full flex flex-col gap-2">
          <label>제목</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="text"
            name="title"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>설명</label>
          <textarea
            className="ring-1 ring-red-200 p-2 rounded-sm"
            name="desc"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>가격</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="number"
            name="price"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>카테고리</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="text"
            name="category"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>옵션</label>
          <div>
            <input
              className="ring-1 ring-red-200 p-2 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
            />
            <input
              className="ring-1 ring-red-200 p-2 rounded-sm"
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
            />
          </div>
          <button className="w-52 bg-red-500 text-white p-2">추가</button>
        </div>
        <div>
          <div className="ring-1 p-2 ring-red-500 rounded-md cursor-pointer">
            <span>Small</span>
            <span>2,000</span>
          </div>
        </div>
        <button type="submit" className="p-2 w-full bg-red-500 text-white">
          추가
        </button>
      </form>
    </div>
  );
};

export default AddPage;
