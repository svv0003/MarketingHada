import LoginForm from "@/components/LoginForm";

export const metadata = {
    title: "관리자 로그인",
};

export default function LoginPage() {
    return (
        <div className="admin-login-page">
            <div className="admin-login-card">
                <h1 className="admin-login-title">관리자 로그인</h1>
                <LoginForm />
            </div>
        </div>
    );
}
