import Image from "next/image";

type ReviewCardProps = {
    label: string;
    image?: string;
};

export default function ReviewCard({ label, image }: ReviewCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            {image ? (
                <div className="relative h-80">
                    <Image src={image} alt={label} fill className="object-cover" />
                </div>
            ) : (
                <div className="h-80 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 text-sm">
                    후기 이미지
                </div>
            )}

            <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-900">{label}</p>
            </div>
        </div>
    );
}