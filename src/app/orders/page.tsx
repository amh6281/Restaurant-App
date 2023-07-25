import React from "react";

const OrdersPage = () => {
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
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">4135135131</td>
            <td className="py-6 px-1">2023년 07월 25일 16:55</td>
            <td className="py-6 px-1">32,900원</td>
            <td className="hidden md:block py-6 px-1">
              불고기피자, 새우버거, 콜라 1L
            </td>
            <td className="py-6 px-1">배달중...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">4135135131</td>
            <td className="py-6 px-1">2023년 07월 25일 16:55</td>
            <td className="py-6 px-1">32,900원</td>
            <td className="hidden md:block py-6 px-1">
              불고기피자, 새우버거, 콜라 1L
            </td>
            <td className="py-6 px-1">배달중...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">4135135131</td>
            <td className="py-6 px-1">2023년 07월 25일 16:55</td>
            <td className="py-6 px-1">32,900원</td>
            <td className="hidden md:block py-6 px-1">
              불고기피자, 새우버거, 콜라 1L
            </td>
            <td className="py-6 px-1">배달중...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
