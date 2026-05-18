"use server";

import { supabaseAdmin } from "@/lib/supabase";

export type ContactFormState = {
    ok: boolean | null;
    message?: string;
};

export async function submitInquiry(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const phone = (formData.get("phone") as string | null)?.trim() ?? "";
    const content = (formData.get("content") as string | null)?.trim() ?? "";

    // 1) 빈 값 검증
    if (!name || !phone || !content) {
        return { ok: false, message: "모든 항목을 입력해주세요." };
    }

    // 2) 길이 검증 (DB 부하 / 악의적 입력 방어)
    if (name.length > 50) {
        return { ok: false, message: "이름이 너무 깁니다 (최대 50자)." };
    }
    if (phone.length > 20) {
        return { ok: false, message: "연락처 형식이 올바르지 않습니다." };
    }
    if (content.length > 2000) {
        return { ok: false, message: "문의 내용이 너무 깁니다 (최대 2000자)." };
    }

    // 3) 연락처 기본 형식 (숫자, 하이픈, +, 공백만 허용)
    if (!/^[\d\s\-+()]+$/.test(phone)) {
        return { ok: false, message: "연락처는 숫자와 하이픈만 입력해주세요." };
    }

    // 4) DB 저장
    const { error } = await supabaseAdmin.from("inquiries").insert({
        inquiry_name: name,
        inquiry_phone: phone,
        inquiry_content: content,
    });

    if (error) {
        console.error("Inquiry insert failed:", error);
        return {
            ok: false,
            message: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        };
    }

    return {
        ok: true,
        message: "문의가 정상적으로 접수되었습니다. 빠르게 연락드리겠습니다.",
    };
}
