"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { ok: null };

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="contact-submit">
            {pending ? "전송 중..." : "문의 보내기"}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useActionState(submitInquiry, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    // 성공 시 폼 초기화
    useEffect(() => {
        if (state.ok === true) {
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <form ref={formRef} action={formAction} className="contact-form">
            <div className="form-field">
                <label htmlFor="name">이름</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={50}
                    placeholder="홍길동"
                />
            </div>

            <div className="form-field">
                <label htmlFor="phone">연락처</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="010-1234-5678"
                />
            </div>

            <div className="form-field">
                <label htmlFor="content">문의 내용</label>
                <textarea
                    id="content"
                    name="content"
                    required
                    maxLength={2000}
                    rows={6}
                    placeholder="궁금하신 점이나 문의 내용을 자유롭게 적어주세요."
                />
            </div>

            <SubmitButton />

            {state.ok === true && (
                <p className="form-success" role="status">{state.message}</p>
            )}
            {state.ok === false && (
                <p className="form-error" role="alert">{state.message}</p>
            )}
        </form>
    );
}
