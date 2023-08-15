import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./connect";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // session을 jwt를 사용하여 관리
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    // useSession or getServerSession 등 저장된 세션정보 확인할 때 호출
    async session({ token, session }) {
      // 사용자의 JWT 토큰이 존재한다면
      if (token) {
        // 사용자의 JWT 토큰에 있는 isAdmin property를 session 객체에 user 정보에 추가
        session.user.isAdmin = token.isAdmin;
      }
      // 수정된 session 반환
      return session;
    },

    // JWT 생성(로그인) or 업데이트 될 때마다 호출
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      // userInDb를 통해 user 정보 조회 후 관리자 여부 정보를 토큰 객체의 isAdmin property에 할당
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    },
  },
};

// Server Component 위한 getServerSession
export const getAuthSession = () => getServerSession(authOptions);
