"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">주문내역</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            로그아웃
          </span>
        </div>
      ) : (
        <Link href="/login">로그인</Link>
      )}
    </div>
  );
};

export default UserLinks;
