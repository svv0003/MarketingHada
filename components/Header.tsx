"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SlideBar from "./SlideBar";

const menuItems = [
    { label: "회사 소개", href: "/about" },
    { label: "서비스 소개", href: "/services" },
    { label: "광고주 후기", href: "/reviews" },
];

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // 관리자 페이지에선 사이트 헤더 숨김
    if (pathname.startsWith("/admin")) {
        return null;
    }

    return (
        <>
            <header className="site-header">
                <Link href="/" className="site-logo">
                    LOGO
                </Link>

                {/* 데스크탑 네비 (md 이상에서만 보임) */}
                <nav className="site-nav-desktop">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="site-nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/contact" className="site-nav-cta">
                        상담문의
                    </Link>
                </nav>

                {/* 모바일 햄버거 (md 미만에서만 보임) */}
                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="menu-button"
                    aria-label="메뉴 열기"
                >
                    ☰
                </button>
            </header>

            <SlideBar isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
