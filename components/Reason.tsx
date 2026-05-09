import AnimatedSection from "./AnimatedSection";

export default function Reason() {
    return (
        <section className="reason">
            <AnimatedSection className="reason-inner">
                <h2 className="reason-title">
                    많은 대표님들이 온라인 마케팅을 선호 하시는 이유?
                </h2>

                <div className="reason-content">
                    <p>
                        빠르게 변화하는 시장 속, 우리는 마케팅을 통해 브랜드와 고객을 연결합니다.
                    </p>
                    <p>
                        전략, 실행, 성과까지 도와드리는 파트너가 되어드립니다.
                    </p>
                    <p className="reason-emphasis">
                        저희는 단순한 마케팅 대행사가 아닌 온라인 광고 전문 실행사 입니다.
                    </p>
                </div>
            </AnimatedSection>
        </section>
    );
}
