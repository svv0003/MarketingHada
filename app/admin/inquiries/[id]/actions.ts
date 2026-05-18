"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";

const ALLOWED_STATUSES = [
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
] as const;

export type UpdateState = {
    ok: boolean | null;
    message?: string;
};

/**
 * 상태 + 메모 업데이트
 */
export async function updateInquiry(
    _prev: UpdateState,
    formData: FormData
): Promise<UpdateState> {
    const idRaw = formData.get("id") as string | null;
    const status = formData.get("status") as string | null;
    const memoRaw = formData.get("memo") as string | null;

    const id = parseInt(idRaw ?? "", 10);
    if (!id || isNaN(id)) {
        return { ok: false, message: "잘못된 요청입니다." };
    }

    if (!status || !ALLOWED_STATUSES.includes(status as never)) {
        return { ok: false, message: "잘못된 상태값입니다." };
    }

    const memo = (memoRaw ?? "").trim();
    if (memo.length > 5000) {
        return { ok: false, message: "메모가 너무 깁니다 (최대 5000자)." };
    }

    const { error } = await supabaseAdmin
        .from("inquiries")
        .update({
            inquiry_status: status,
            inquiry_memo: memo || null,
        })
        .eq("inquiry_id", id);

    if (error) {
        console.error("Update inquiry failed:", error);
        return { ok: false, message: "저장 실패: " + error.message };
    }

    revalidatePath("/admin/inquiries");
    revalidatePath(`/admin/inquiries/${id}`);

    return { ok: true, message: "저장되었습니다." };
}

/**
 * 소프트 삭제 (inquiry_is_show = false)
 */
export async function softDeleteInquiry(formData: FormData) {
    const idRaw = formData.get("id") as string | null;
    const id = parseInt(idRaw ?? "", 10);

    if (!id || isNaN(id)) {
        throw new Error("Invalid inquiry id");
    }

    const { error } = await supabaseAdmin
        .from("inquiries")
        .update({ inquiry_is_show: false })
        .eq("inquiry_id", id);

    if (error) {
        console.error("Soft delete failed:", error);
        throw new Error("삭제 실패: " + error.message);
    }

    revalidatePath("/admin/inquiries");
    redirect("/admin/inquiries");
}
