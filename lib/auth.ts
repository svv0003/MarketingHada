const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_PASSWORD) {
    throw new Error("Missing ADMIN_PASSWORD env var. Check .env.local.");
}

/**
 * SHA-256 해시 (Edge Runtime 호환)
 */
async function sha256(text: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

/** 로그인 시 쿠키에 넣을 토큰 (= ADMIN_PASSWORD의 SHA-256 해시) */
export async function getSessionToken(): Promise<string> {
    return sha256(ADMIN_PASSWORD!);
}

/** 로그인 폼에서 받은 비밀번호 확인 */
export function verifyPassword(input: string): boolean {
    return input === ADMIN_PASSWORD;
}

/** 쿠키 값이 정상 세션 토큰인지 확인 */
export async function verifySessionCookie(
    value: string | undefined | null
): Promise<boolean> {
    if (!value) return false;
    const expected = await getSessionToken();
    return value === expected;
}

export const SESSION_COOKIE_NAME = "admin_session";
