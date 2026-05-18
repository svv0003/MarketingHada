'use client';

import { useEffect } from 'react';

export default function ScrollReset() {
    useEffect(() => {
        // 브라우저의 스크롤 위치 복원을 막아 새로고침 시 항상 Hero(최상단)부터 보이게 함
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);
    return null;
}
