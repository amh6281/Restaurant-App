import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// JS를 이용해 prisma의 DB 작업 관리를 위한 PrismaClient
const prisma = new PrismaClient();

// Fetch All Categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};
