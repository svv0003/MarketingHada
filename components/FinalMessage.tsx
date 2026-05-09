export default function FinalMessage() {
    return (
        <section className="relative h-[60vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-800 to-slate-900 blur-sm" />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold leading-relaxed mb-12 max-w-3xl">
                    마케팅 하다는 단순한 마케팅이 아닌,
                    <br />
                    결과로 이어지는 전략을 제공하겠습니다.
                </h2>

                <div>
                    <p className="text-xs uppercase tracking-widest mb-2 opacity-70">
                        상담문의
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold">02-6339-1555</p>
                </div>
            </div>
        </section>
    );
}