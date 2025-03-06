import { NextRequest, NextResponse } from "next/server";
import { playerProgressCookieKey } from "@shared/lib/player-progress-cookie-key";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/quiz") {
    const response = NextResponse.next();

    response.cookies.set(playerProgressCookieKey, "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/quiz",
};
