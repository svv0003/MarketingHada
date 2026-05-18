import Link from "next/link";

const menuItems = [
    { label: "회사 소개", href: "/about" },
    { label: "서비스 소개", href: "/services" },
    { label: "광고주 후기", href: "/reviews" },
    { label: "문의", href: "/contact" },
];

type SlideBarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SlideBar({ isOpen, onClose }: SlideBarProps) {
    return (
        <>
            <div
                className={`slidebar-overlay ${isOpen ? "is-open" : ""}`}
                onClick={onClose}
            />

            <nav className={`slidebar ${isOpen ? "is-open" : ""}`}>
                <button
                    type="button"
                    onClick={onClose}
                    className="slidebar-close"
                    aria-label="메뉴 닫기"
                >
                    ✕
                </button>

                <ul className="slidebar-menu">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} onClick={onClose}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
