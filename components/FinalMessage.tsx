import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function FinalMessage() {
    return (
        <section className="final">
            <div className="final-bg" />
            <div className="final-overlay" />

            <AnimatedSection className="final-content">
                <h2 className="final-title">
                    마케팅 하다는 단순한 마케팅이 아닌,
                    <br />
                    결과로 이어지는 전략을 제공하겠습니다.
                </h2>

                <div>
                    <Link href={"/"}>
                       상담문의
                    </Link>
                </div>
            </AnimatedSection>
        </section>
    );
}
