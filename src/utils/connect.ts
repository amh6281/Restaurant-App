// JS를 이용해 prisma의 DB 작업 관리를 위한 PrismaClient
import { PrismaClient } from "@prisma/client";

// PrismaClient가 globalThis 객체에 없을 경우에만 PrismaClient 인스턴스화
// PrismaClient 인스턴스를 여러 번 인스턴스화하는 것이 아니라 한 번만 인스턴스화하여 사용함으로써 데이터베이스 연결 풀의 효율적인 관리와 중복된 연결 생성을 방지
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
