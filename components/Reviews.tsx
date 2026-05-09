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
        <section id="reviews" className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    자사와 함께 한 광고주님들의 후기
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <ReviewCard key={review.label} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
}