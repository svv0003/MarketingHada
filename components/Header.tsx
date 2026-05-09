export default function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-10 px-8 py-6">
            <nav className="flex justify-end gap-12 text-white">
                <a href="#about" className="hover:opacity-70 transition">About us</a>
                <a href="#services" className="hover:opacity-70 transition">Services</a>
                <a href="#reviews" className="hover:opacity-70 transition">광고주 후기</a>
            </nav>
        </header>
    );
}