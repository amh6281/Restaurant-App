"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "홈", url: "/" },
  { id: 2, title: "메뉴", url: "/menu" },
  { id: 3, title: "영업시간", url: "/" },
  { id: 4, title: "문의하기", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <div>
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-2xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
          >
            {user ? "주문내역" : "로그인"}
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
