import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionCookie, SESSION_COOKIE_NAME } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // /admin/login 은 항상 통과
    if (pathname.startsWith("/admin/login")) {
        return NextResponse.next();
    }

    // 그 외 /admin/* 은 세션 검사
    if (pathname.startsWith("/admin")) {
        const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
        const ok = await verifySessionCookie(session);

        if (!ok) {
            const loginUrl = new URL("/admin/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
