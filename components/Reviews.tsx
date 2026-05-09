import ReviewCard from "./ReviewCard";

const reviews = [
    { label: "체형관리 업장" },
    { label: "피부관리 업장" },
    { label: "도배공사 업장" },
    { label: "속눈썹 업장" },
    { label: "펜션 업장" },
];

export default function Reviews() {
    return (
        <section id="reviews" className="reviews">
            <div className="reviews-inner">
                <h2 className="reviews-title">
                    자사와 함께 한 광고주님들의 후기
                </h2>

                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <ReviewCard key={review.label} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
