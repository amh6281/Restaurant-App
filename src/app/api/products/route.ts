import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Fetch All Products
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        // cat이 있으면 catSlug를 검색 조건으로. 없다면 isFeatured true인 제품 검색
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};

// Create Product
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const product = await prisma.product.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};
