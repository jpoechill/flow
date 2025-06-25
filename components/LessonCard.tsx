// components/LessonCard.tsx

type LessonCardProps = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    sections?: string;
    comingSoon?: boolean;
};

const LessonCard: React.FC<LessonCardProps> = ({
    title,
    description,
    tags,
    link,
    sections,
    comingSoon = false,
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col">
            <h3 className="text-indigo-600 font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-auto flex items-center justify-between">
                {comingSoon ? (
                    <button
                        className="bg-indigo-300 text-white px-4 py-2 rounded text-sm cursor-not-allowed opacity-90"
                        disabled
                    >
                        Coming Soon
                    </button>
                ) : (
                    <a href={link}>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700">
                            Start Section
                        </button>
                    </a>
                )}
                {sections && <span className="text-sm text-gray-400">{sections}</span>}
            </div>
        </div>
    );
};

export default LessonCard;
