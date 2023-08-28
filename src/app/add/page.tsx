"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<FileList | null>();

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
          options,
        }),
      });
      const data = await res.json();
      // router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className="shadow-lg flex flex-wrap gap-4 p-8"
        onSubmit={handleSubmit}
      >
        <h1>상품 추가</h1>
        <div className="w-full flex flex-col gap-2">
          <label>제목</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="text"
            name="title"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>이미지</label>
          <input
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="file"
            onChange={(e) => setFile(e.target.files)}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>설명</label>
          <textarea
            onChange={handleChange}
            className="ring-1 ring-red-200 p-2 rounded-sm"
            name="desc"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>가격</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="number"
            name="price"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>카테고리</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-red-200 p-2 rounded-sm"
            type="text"
            name="catSlug"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>옵션</label>
          <div>
            <input
              onChange={changeOption}
              className="ring-1 ring-red-200 p-2 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
            />
            <input
              onChange={changeOption}
              className="ring-1 ring-red-200 p-2 rounded-sm"
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
            />
          </div>
          <div
            className="w-52 bg-red-500 text-white p-2"
            onClick={() => setOptions((prev) => [...prev, option])}
          >
            추가
          </div>
        </div>
        <div>
          {options.map((opt) => (
            <div
              className="ring-1 p-2 ring-red-500 rounded-md cursor-pointer"
              key={opt.title}
              onClick={() =>
                setOptions((prev) =>
                  prev.filter((item) => item.title !== opt.title)
                )
              }
            >
              <span>{opt.title}</span>
              <span>{opt.additionalPrice}</span>
            </div>
          ))}
        </div>
        <button type="submit" className="p-2 w-full bg-red-500 text-white">
          추가
        </button>
      </form>
    </div>
  );
};

export default AddPage;
