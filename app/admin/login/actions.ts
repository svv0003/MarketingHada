"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
    verifyPassword,
    getSessionToken,
    SESSION_COOKIE_NAME,
} from "@/lib/auth";

export type LoginState = {
    ok: boolean | null;
    message?: string;
};

export async function loginAction(
    _prev: LoginState,
    formData: FormData
): Promise<LoginState> {
    const password = (formData.get("password") as string | null) ?? "";

    if (!password) {
        return { ok: false, message: "비밀번호를 입력해주세요." };
    }

    if (!verifyPassword(password)) {
        return { ok: false, message: "비밀번호가 일치하지 않습니다." };
    }

    const token = await getSessionToken();
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7일
        path: "/",
    });

    redirect("/admin/inquiries");
}

export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
    redirect("/admin/login");
}
