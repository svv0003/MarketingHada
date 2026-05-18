import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function InquiriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            <header className="admin-header">
                <Link href="/admin/inquiries" className="admin-brand">
                    관리자
                </Link>
                <div className="admin-header-actions">
                    <Link href="/" className="admin-view-site">
                        메인 사이트
                    </Link>
                    <LogoutButton />
                </div>
            </header>
            <main className="admin-main">{children}</main>
        </div>
    );
}
