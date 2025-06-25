'use client';

import React, { useState } from 'react';
import { lessons } from '@/data/lessons';
import Link from 'next/link';

const levels = ['Beginner', 'Intermediate', 'Advanced'] as const;

const LessonsPage = () => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        Beginner: true,
        Intermediate: true,
        Advanced: true,
    });

    const [isGridView, setIsGridView] = useState(true);

    const toggleSection = (level: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [level]: !prev[level],
        }));
    };

    return (
        <div className="max-w-6xl mx-auto px-4 pt-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-indigo-600">📘 Khmer Lessons</h1>
                <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow"
                >
                    {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
                </button>
            </div>

            <p className="text-gray-700 mb-10 text-md">
                Start with the basics and level up your Khmer through structured lessons, practice modules, and cultural insights.
            </p>

            {levels.map((level) => {
                const filtered = lessons.filter((l) => l.level === level);
                if (!filtered.length) return null;

                return (
                    <section key={level} className="mb-10 border-b border-gray-200 pb-6">
                        <button
                            onClick={() => toggleSection(level)}
                            className="w-full flex justify-between items-center bg-indigo-100 hover:bg-indigo-200 px-4 py-3 rounded-md text-left"
                        >
                            <h2 className="text-xl font-semibold text-indigo-800">{level}</h2>
                            <span className="text-indigo-600 text-lg">
                                {openSections[level] ? '−' : '+'}
                            </span>
                        </button>

                        {openSections[level] && (
                            <div className={`${isGridView ? 'grid md:grid-cols-3 gap-6 mt-4' : 'mt-4 space-y-4'}`}>
                                {filtered.map((lesson, i) =>
                                    isGridView ? (
                                        <div key={i} className="bg-white p-4 rounded shadow-sm border border-gray-100">
                                            <h3 className="text-lg font-bold text-indigo-700 mb-1">
                                                {lesson.link ? (
                                                    <Link href={lesson.link}>
                                                        <span className="hover:underline">{lesson.title}</span>
                                                    </Link>
                                                ) : (
                                                    <span>{lesson.title}</span>
                                                )}
                                                {lesson.comingSoon && (
                                                    <span className="ml-2 text-sm text-gray-500 italic">
                                                        (Coming soon)
                                                    </span>
                                                )}
                                            </h3>
                                            <p className="text-gray-700 text-sm">{lesson.description}</p>
                                            {lesson.tags?.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {lesson.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <li
                                            key={i}
                                            className="bg-white p-4 rounded shadow-sm border border-gray-100 list-none"
                                        >
                                            <h3 className="text-lg font-bold text-indigo-700 mb-1">
                                                {lesson.link ? (
                                                    <Link href={lesson.link}>
                                                        <span className="hover:underline">{lesson.title}</span>
                                                    </Link>
                                                ) : (
                                                    <span>{lesson.title}</span>
                                                )}
                                                {lesson.comingSoon && (
                                                    <span className="ml-2 text-sm text-gray-500 italic">
                                                        (Coming soon)
                                                    </span>
                                                )}
                                            </h3>
                                            <p className="text-gray-700 text-sm">{lesson.description}</p>
                                            {lesson.tags?.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {lesson.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    )
                                )}
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
};

export default LessonsPage;
