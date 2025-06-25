'use client';

import React from 'react';

type PracticeItem = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    comingSoon?: boolean;
};

const practiceItems: PracticeItem[] = [
    {
        title: 'Pronunciation Lab',
        description: 'Train your mouth and ear with IPA-based drills, slow playback, and native recordings.',
        tags: ['Listening', 'Speaking'],
        link: '/practice/pronunciation',
    },
    {
        title: 'Listening Boosters',
        description: 'Short audio clips with comprehension questions and transcript reveal.',
        tags: ['Listening'],
        comingSoon: true,
    },
    {
        title: 'Reading Real Khmer',
        description: 'Decode handwritten signs, social captions, and informal Khmer with translations.',
        tags: ['Reading'],
        comingSoon: true,
    },
    {
        title: 'Flashcard Trainer',
        description: 'Rapid recall of Khmer vocabulary by topic or level.',
        tags: ['Vocabulary', 'Memory'],
        link: '/practice/flashcards',
    },
    {
        title: 'Tone & Emotion Mimicry',
        description: 'Match the tone of native speakers and improve expressiveness.',
        tags: ['Speaking', 'Listening'],
        comingSoon: true,
    },
];

const PracticePage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">🧠 Practice Modules</h1>
            <p className="text-gray-700 mb-8 text-md">
                Reinforce your learning with interactive tools and challenge your Khmer skills across speaking, listening, and reading.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {practiceItems.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col">
                        <h3 className="text-indigo-600 font-bold mb-2">{item.title}</h3>
                        <p className="text-sm mb-4">{item.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag, i) => (
                                <span key={i} className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto">
                            {item.comingSoon ? (
                                <button
                                    className="bg-indigo-300 text-white px-4 py-2 rounded text-sm cursor-not-allowed opacity-90"
                                    disabled
                                >
                                    Coming Soon
                                </button>
                            ) : (
                                <a href={item.link}>
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700">
                                        Start Practice
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticePage;
