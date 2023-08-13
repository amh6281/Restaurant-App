import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-16 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">홈</Link>
        <Link href="menu">메뉴</Link>
        <Link href="/">문의하기</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">roma</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>031-123-1234</span>
        </div>
        <UserLinks />
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
