import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero">
            {/* 1. 배경 (이미지 + fallback 그라디언트) */}
            <div className="hero-bg" />
            <Image
                src="/hero.jpg"
                alt=""
                fill
                priority
                className="hero-image"
            />

            {/* 2. 어두운 오버레이 (글자 잘 보이게) */}
            <div className="hero-overlay" />

            {/* 3. 가운데 정렬된 카피 */}
            <div className="hero-content">
                <h1 className="hero-title">
                    전문성과 따뜻한 동행으로,
                    <br />
                    성공적인 마케팅을 함께 만들어갑니다.
                </h1>
            </div>
        </section>
    );
}
