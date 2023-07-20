import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* Logo */}
      <div className="text-xl">
        <Link href="/">roma</Link>
      </div>
      {/* Mobile Menu */}
      <Menu />
    </div>
  );
};

export default Navbar;
