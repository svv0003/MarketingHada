import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase";

const STATUS_LABELS: Record<string, string> = {
    PENDING: "상담 전",
    IN_PROGRESS: "상담 중",
    COMPLETED: "상담 완료",
    CANCELLED: "상담 취소",
};

export const dynamic = "force-dynamic"; // 항상 최신 데이터 조회

export default async function InquiriesPage() {
    const { data: inquiries, error } = await supabaseAdmin
        .from("inquiries")
        .select("*")
        .eq("inquiry_is_show", true)
        .order("inquiry_created_at", { ascending: false });

    if (error) {
        return (
            <div className="admin-error">
                데이터를 불러오지 못했습니다: {error.message}
            </div>
        );
    }

    return (
        <div className="admin-page">
            <h1 className="admin-page-title">문의 목록</h1>

            {!inquiries || inquiries.length === 0 ? (
                <p className="admin-empty">등록된 문의가 없습니다.</p>
            ) : (
                <div className="admin-table-wrap">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>이름</th>
                                <th>연락처</th>
                                <th>상태</th>
                                <th>등록일</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inquiries.map((inq) => (
                                <tr key={inq.inquiry_id}>
                                    <td>{inq.inquiry_id}</td>
                                    <td>{inq.inquiry_name}</td>
                                    <td>{inq.inquiry_phone}</td>
                                    <td>
                                        <span
                                            className={`status-badge status-${inq.inquiry_status.toLowerCase()}`}
                                        >
                                            {STATUS_LABELS[inq.inquiry_status] ??
                                                inq.inquiry_status}
                                        </span>
                                    </td>
                                    <td>
                                        {new Date(
                                            inq.inquiry_created_at
                                        ).toLocaleString("ko-KR")}
                                    </td>
                                    <td>
                                        <Link
                                            href={`/admin/inquiries/${inq.inquiry_id}`}
                                            className="admin-link"
                                        >
                                            상세
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
