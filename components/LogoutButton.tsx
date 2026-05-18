"use client";

import { logoutAction } from "@/app/admin/login/actions";

export default function LogoutButton() {
    return (
        <form action={logoutAction}>
            <button type="submit" className="admin-logout">
                로그아웃
            </button>
        </form>
    );
}
