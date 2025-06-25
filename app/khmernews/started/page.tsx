'use client';

import React from 'react';
import { BookOpen, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GetStartedReadingPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 px-4 pt-10 pb-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-5 py-2 rounded-full font-bold shadow">
                        <BookOpen size={18} />
                        Get Started Reading
                    </div>
                    <h1 className="text-4xl font-bold text-indigo-700 mt-6 mb-2">
                        Build Confidence in Reading Khmer 📖
                    </h1>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Start with beginner-friendly lessons, explore intermediate texts, and challenge yourself with advanced topics.
                    </p>
                </div>

                {/* Reading Levels */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Beginner */}
                    <Link href="/lessons/beginner" className="group block bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                        <div className="text-sm text-gray-500 mb-1">Level 1</div>
                        <h3 className="text-xl font-bold text-green-600 mb-2">Beginner</h3>
                        <p className="text-gray-700 mb-4">Start reading with the Khmer alphabet, basic words, and everyday phrases.</p>
                        <div className="flex items-center gap-1 text-green-600 font-medium group-hover:underline">
                            Start Now <ArrowRight size={16} />
                        </div>
                    </Link>

                    {/* Intermediate */}
                    <Link href="/lessons/intermediate" className="group block bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                        <div className="text-sm text-gray-500 mb-1">Level 2</div>
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Intermediate</h3>
                        <p className="text-gray-700 mb-4">Practice reading short passages, health topics, and Khmer conversations.</p>
                        <div className="flex items-center gap-1 text-blue-600 font-medium group-hover:underline">
                            Continue <ArrowRight size={16} />
                        </div>
                    </Link>

                    {/* Advanced */}
                    <Link href="/lessons/advanced" className="group block bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                        <div className="text-sm text-gray-500 mb-1">Level 3</div>
                        <h3 className="text-xl font-bold text-purple-600 mb-2">Advanced</h3>
                        <p className="text-gray-700 mb-4">Challenge yourself with articles on economics, culture, and translation skills.</p>
                        <div className="flex items-center gap-1 text-purple-600 font-medium group-hover:underline">
                            Try It <ArrowRight size={16} />
                        </div>
                    </Link>
                </div>

                {/* Tips Section */}
                <div className="mt-16 bg-white border border-yellow-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <Target className="text-yellow-500" size={20} />
                        <h2 className="text-xl font-bold text-yellow-600">Reading Tips</h2>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Preview the passage before reading in detail.</li>
                        <li>Click on highlighted words to learn vocabulary.</li>
                        <li>Use Focus Mode to reduce distractions.</li>
                        <li>Toggle English translations to check understanding.</li>
                        <li>Repeat readings for better fluency.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default GetStartedReadingPage;
