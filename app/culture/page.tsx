'use client';

import React from 'react';
import Link from 'next/link';

type CultureItem = {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    comingSoon?: boolean;
};

const cultureItems: CultureItem[] = [
    {
        title: 'Khmer New Year & Major Holidays',
        description: 'Learn the traditions, greetings, and customs of Khmer national celebrations.',
        tags: ['Customs', 'Tradition', 'Festivals'],
        link: '/culture/holidays',
    },
    {
        title: 'Traditional Dance & Music',
        description: 'Explore classical dance forms, folk music, and their cultural significance.',
        tags: ['Dance', 'Arts', 'Performance'],
        link: '/culture/traditional-dance',
    },
    {
        title: 'Daily Customs & Etiquette',
        description: 'Understand polite gestures, temple behavior, family roles, and social etiquette.',
        tags: ['Manners', 'Politeness', 'Family'],
        link: '/culture/etiquette',
    },
    {
        title: 'Cambodian Cuisine',
        description: 'Learn about traditional dishes, food phrases, and cultural eating habits.',
        tags: ['Food', 'Tradition', 'Speaking'],
        link: '/culture/cambodian-cuisine',
    },
    {
        title: 'Khmer Architecture & Temples',
        description: 'Discover sacred buildings, royal palaces, and the meaning behind ancient designs.',
        tags: ['Temples', 'Symbols', 'Art'],
        link: '/culture/khmer-architecture',
    },
    {
        title: 'Stories, Proverbs & Folklore',
        description: 'Explore Khmer myths, moral stories, and how they shape cultural values.',
        tags: ['Oral Tradition', 'Wisdom', 'Language'],
        link: '/culture/folklore',
    },
];

const CulturePage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">🏯 Khmer Culture</h1>
            <p className="text-gray-700 mb-8 text-md">
                Discover the rich traditions, values, arts, and daily life that make Cambodian culture unique. Learn beyond just language.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {cultureItems.map((item, idx) => (
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
                            {item.comingSoon || !item.link ? (
                                <button
                                    className="bg-indigo-300 text-white px-4 py-2 rounded text-sm cursor-not-allowed opacity-90"
                                    disabled
                                >
                                    Coming Soon
                                </button>
                            ) : (
                                <Link href={item.link}>
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700">
                                        Explore
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CulturePage;
