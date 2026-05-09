import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* 1. 배경 (지금은 임시 그라디언트, 나중에 이미지로 교체) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 blur-sm" />
            <Image
                src="/hero.jpg"
                alt=""
                fill
                priority
                className="object-cover blur-sm scale-110"
            />

            {/* 2. 어두운 오버레이 (글자 잘 보이게) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* 3. 가운데 정렬된 카피 */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <h1 className="text-center text-3xl md:text-5xl font-bold text-white leading-relaxed">
                    전문성과 따뜻한 동행으로,
                    <br />
                    성공적인 마케팅을 함께 만들어갑니다.
                </h1>
            </div>
        </section>
    );
}