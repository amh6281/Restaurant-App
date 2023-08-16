import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const body = await req.json();

    await prisma.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    });
    return new NextResponse(
      JSON.stringify({ message: "주문이 업데이트되었습니다.." }),
      {
        status: 500,
      }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};
