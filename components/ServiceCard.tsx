type ServiceCardProps = {
    title: string;
    description: string;
    icon: string;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="h-32 flex items-center justify-center mb-6 text-6xl">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>

            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {description}
            </p>
        </div>
    );
}