import ServiceCard from "./ServiceCard";
import AnimatedSection from "./AnimatedSection";

const services = [
    {
        title: "네이버",
        icon: "🔍",
        description:
            "대한민국 대부분이 사용하는 대표 검색 플랫폼,\n온라인에서 매장의 첫인상을 결정하는 '간판'입니다.",
    },
    {
        title: "체험단",
        icon: "✍️",
        description:
            "고객의 경험이 곧 마케팅이 되는 시대,\n리얼 후기가 매장의 신뢰를 만듭니다.\n실제 사용자 중심의 콘텐츠를 통해 자연스럽게 브랜드를 노출시키고 고객의 선택으로 이어지도록 돕습니다.",
    },
    {
        title: "인스타그램",
        icon: "📸",
        description:
            "SNS가 필수가 된 시대,\n전 세계 수십억 명이 소통하는 플랫폼입니다.\n콘텐츠 하나로 고객의 관심을 끌고, 전환까지 이어지는 구조를 만듭니다.",
    },
    // {
    //     title: "유튜브",
    //     icon: "🎥",
    //     description:
    //         "가장 강력한 영상 플랫폼,\n브랜드를 깊이 있게 전달할 수 있는 채널입니다.",
    // },
];

export default function Services() {
    return (
        <section id="services" className="services">
            <AnimatedSection className="services-inner">
                <h2 className="services-title">Services</h2>

                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
}
