import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";
import InquiryDetailForm from "@/components/InquiryDetailForm";

const STATUS_LABELS: Record<string, string> = {
    PENDING: "상담 전",
    IN_PROGRESS: "상담 중",
    COMPLETED: "상담 완료",
    CANCELLED: "상담 취소",
};

export const dynamic = "force-dynamic";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function InquiryDetailPage({ params }: PageProps) {
    const { id: idParam } = await params;
    const id = parseInt(idParam, 10);

    if (!id || isNaN(id)) {
        notFound();
    }

    const { data: inquiry, error } = await supabaseAdmin
        .from("inquiries")
        .select("*")
        .eq("inquiry_id", id)
        .eq("inquiry_is_show", true)
        .single();

    if (error || !inquiry) {
        notFound();
    }

    return (
        <div className="admin-page">
            <Link href="/admin/inquiries" className="admin-back">
                ← 목록으로
            </Link>

            <h1 className="admin-page-title">문의 상세 #{inquiry.inquiry_id}</h1>

            <div className="admin-detail-info">
                <div className="admin-detail-row">
                    <span className="admin-detail-label">이름</span>
                    <span className="admin-detail-value">{inquiry.inquiry_name}</span>
                </div>
                <div className="admin-detail-row">
                    <span className="admin-detail-label">연락처</span>
                    <span className="admin-detail-value">
                        <a href={`tel:${inquiry.inquiry_phone}`} className="admin-link">
                            {inquiry.inquiry_phone}
                        </a>
                    </span>
                </div>
                <div className="admin-detail-row">
                    <span className="admin-detail-label">등록일</span>
                    <span className="admin-detail-value">
                        {new Date(inquiry.inquiry_created_at).toLocaleString("ko-KR")}
                    </span>
                </div>
                <div className="admin-detail-row">
                    <span className="admin-detail-label">현재 상태</span>
                    <span className="admin-detail-value">
                        <span
                            className={`status-badge status-${inquiry.inquiry_status.toLowerCase()}`}
                        >
                            {STATUS_LABELS[inquiry.inquiry_status] ?? inquiry.inquiry_status}
                        </span>
                    </span>
                </div>

                <div className="admin-detail-content">
                    <span className="admin-detail-label">문의 내용</span>
                    <p className="admin-detail-text">{inquiry.inquiry_content}</p>
                </div>
            </div>

            <InquiryDetailForm
                inquiryId={inquiry.inquiry_id}
                initialStatus={inquiry.inquiry_status}
                initialMemo={inquiry.inquiry_memo}
            />
        </div>
    );
}
