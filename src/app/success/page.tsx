"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        router.push("/orders");
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [payment_intent]);

  return (
    <div>
      결제가 완료되었습니다. 주문 내역 페이지로 이동하니 페이지를 닫지마세요.
    </div>
  );
};

export default SuccessPage;
