import Image from "next/image";

type ReviewCardProps = {
    label: string;
    image?: string;
};

export default function ReviewCard({ label, image }: ReviewCardProps) {
    return (
        <div className="review-card">
            {image ? (
                <div className="review-card-image-wrap">
                    <Image src={image} alt={label} fill className="review-card-image" />
                </div>
            ) : (
                <div className="review-card-placeholder">후기 이미지</div>
            )}

            <div className="review-card-label">{label}</div>
        </div>
    );
}
