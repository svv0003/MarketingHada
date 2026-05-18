"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
    updateInquiry,
    softDeleteInquiry,
    type UpdateState,
} from "@/app/admin/inquiries/[id]/actions";

const STATUS_OPTIONS = [
    { value: "PENDING", label: "상담 전" },
    { value: "IN_PROGRESS", label: "상담 중" },
    { value: "COMPLETED", label: "상담 완료" },
    { value: "CANCELLED", label: "상담 취소" },
];

const initialState: UpdateState = { ok: null };

function SaveButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="admin-save">
            {pending ? "저장 중..." : "저장"}
        </button>
    );
}

type Props = {
    inquiryId: number;
    initialStatus: string;
    initialMemo: string | null;
};

export default function InquiryDetailForm({
    inquiryId,
    initialStatus,
    initialMemo,
}: Props) {
    const [state, formAction] = useActionState(updateInquiry, initialState);

    return (
        <>
            <form action={formAction} className="admin-detail-form">
                <input type="hidden" name="id" value={inquiryId} />

                <div className="form-field">
                    <label htmlFor="status">상태</label>
                    <select
                        id="status"
                        name="status"
                        defaultValue={initialStatus}
                        className="admin-select"
                    >
                        {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="memo">관리자 메모</label>
                    <textarea
                        id="memo"
                        name="memo"
                        rows={6}
                        defaultValue={initialMemo ?? ""}
                        maxLength={5000}
                        color={"black"}
                        placeholder="상담 내용, 처리 메모 등 자유롭게 기록"
                    />
                </div>

                <div className="admin-detail-actions">
                    <SaveButton />
                </div>

                {state.ok === true && (
                    <p className="form-success">{state.message}</p>
                )}
                {state.ok === false && (
                    <p className="form-error">{state.message}</p>
                )}
            </form>

            <DeleteForm inquiryId={inquiryId} />
        </>
    );
}

function DeleteForm({ inquiryId }: { inquiryId: number }) {
    return (
        <form
            action={softDeleteInquiry}
            onSubmit={(e) => {
                if (!window.confirm("정말 삭제하시겠습니까? 목록에서 사라집니다.")) {
                    e.preventDefault();
                }
            }}
            className="admin-delete-form"
        >
            <input type="hidden" name="id" value={inquiryId} />
            <button type="submit" className="admin-delete">
                삭제
            </button>
        </form>
    );
}
