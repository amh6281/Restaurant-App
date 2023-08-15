"use client"; // 검색엔진 X, Status 변경 함수

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { OrderType } from "@/types/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") return "Loading...";

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">주문번호</th>
            <th>주문일시</th>
            <th>결제금액</th>
            <th className="hidden md:block">주문메뉴</th>
            <th>주문상태</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr className="text-sm md:text-base bg-red-50" key={item.id}>
              <td className="hidden md:block py-6 px-1">{item.id}</td>
              <td className="py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-6 px-1">{item.price.toLocaleString()}원</td>
              <td className="hidden md:block py-6 px-1">
                {item.products[0].title}
              </td>
              <td className="py-6 px-1">{item.status}...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
