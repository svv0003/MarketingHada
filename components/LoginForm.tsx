"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/app/admin/login/actions";

const initialState: LoginState = { ok: null };

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="admin-login-submit">
            {pending ? "확인 중..." : "로그인"}
        </button>
    );
}

export default function LoginForm() {
    const [state, formAction] = useActionState(loginAction, initialState);

    return (
        <form action={formAction} className="admin-login-form">
            <div className="form-field">
                <label htmlFor="password">비밀번호</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    autoFocus
                />
            </div>

            <SubmitButton />

            {state.ok === false && state.message && (
                <p className="form-error" role="alert">
                    {state.message}
                </p>
            )}
        </form>
    );
}
