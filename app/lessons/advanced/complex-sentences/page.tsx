'use client';

import React from 'react';
import Link from 'next/link';

const ComplexSentenceModule = () => {
    const coreLessons = [
        {
            title: 'Lesson 1: Coordinating Conjunctions',
            description: 'Combine two complete ideas using connectors like ហើយ (and), ប៉ុន្តែ (but), and ឬ (or).',
            tags: ['Grammar', 'Fluency', 'Writing'],
            link: '/lessons/advanced/complex-sentences/coordinating',
            sections: '1 Section',
        },
        {
            title: 'Lesson 2: Subordinating Conjunctions',
            description: 'Express cause, time, and conditions using words like បើ (if), ពេលដែល (when), and ដោយសារ (because).',
            tags: ['Sentence Building', 'Clarity', 'Advanced Grammar'],
            link: '/lessons/advanced/complex-sentences/subordinating',
            sections: '1 Section',
        },
        {
            title: 'Lesson 3: Relative Clauses',
            description: 'Use ដែល to add info about people or things. Learn to write richer, more descriptive sentences.',
            tags: ['Precision', 'Description', 'Sentence Expansion'],
            link: '/lessons/advanced/complex-sentences/relative-clauses',
            sections: '1 Section',
        },
    ];

    const moreLessons = [
        {
            title: 'Mastering Transitions',
            description: 'Use Khmer transition words fluently for smoother, more elegant communication.',
            tags: ['Flow', 'Speech', 'Writing'],
            link: '/lessons/advanced/transitions',
            sections: '3 Sections',
        },
        {
            title: 'Idioms, Proverbs & Figurative Language',
            description: 'Explore expressive and metaphorical Khmer for storytelling and advanced writing.',
            tags: ['Culture', 'Creativity', 'Fluency'],
            link: '/lessons/advanced/idioms',
            sections: '2 Sections',
        },
        {
            title: 'Khmer Public Speaking',
            description: 'Practice rhetoric, tone, and structure for presentations and oral exams.',
            tags: ['Speech', 'Confidence', 'Advanced Practice'],
            link: '/lessons/advanced/public-speaking',
            sections: '3 Sections',
        },
    ];

    return (
        <main className="pb-0 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <div className="page active">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-bold">Advanced</div>
                            <h2 className="text-xs text-gray-600">Complex Sentence Structures</h2>
                        </div>
                        <h2 className="text-xs text-gray-600">3 Focused Lessons • Module 3</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {coreLessons.map((lesson, index) => (
                            <LessonCard key={index} {...lesson} />
                        ))}
                    </div>

                    <h3 className="text-md font-bold text-indigo-600 mb-4">📚 More from Advanced Level</h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {moreLessons.map((lesson, index) => (
                            <LessonCard key={index} {...lesson} />
                        ))}
                    </div>

                    <div className="text-sm w-full text-center pt-8 text-gray-500 hover:underline cursor-pointer">
                        Suggest a Lesson
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ComplexSentenceModule;

// === COMPONENT ===

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
            <h3 className="text-indigo-600 text-md font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4 text-gray-700">{description}</p>

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
                    <button className="bg-indigo-300 text-white px-4 py-2 rounded text-sm cursor-not-allowed opacity-90" disabled>
                        Coming Soon
                    </button>
                ) : (
                    <Link href={link || '#'}>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700">
                            Start Lesson
                        </button>
                    </Link>
                )}
                {sections && <h2 className="text-sm text-gray-400">{sections}</h2>}
            </div>
        </div>
    );
};
