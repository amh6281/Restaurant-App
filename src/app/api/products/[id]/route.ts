import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get Single Product
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};

// Delete Single Product
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: {
          id: id,
        },
      });
      return new NextResponse(JSON.stringify("삭제하였습니다."), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "잘못된 접근입니다." }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: "허용되지 않았습니다." }), {
    status: 403,
  });
};
