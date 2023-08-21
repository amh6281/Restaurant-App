import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: "usd",
      automatic_payment_method: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: id,
      },
      data: { intent_id: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  } else {
    return new NextResponse(
      JSON.stringify({ message: "주문을 찾을 수 없습니다." }),
      {
        status: 404,
      }
    );
  }
};
