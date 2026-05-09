"use client";

import { useState } from "react";
import Link from "next/link";
import SlideBar from "./SlideBar";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="site-header">
                <Link href="/" className="site-logo">
                    LOGO
                </Link>
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
