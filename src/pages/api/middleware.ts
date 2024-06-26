import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";z
import { prisma } from "@/lib/prisma";

export async function middleware(req: NextRequest) {
  const sessionToken = req.cookies.get("session-token");

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const user = await prisma.user.findUnique({
    where: { sessionToken },
  });

  if (!user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/member/:path*"],
};
