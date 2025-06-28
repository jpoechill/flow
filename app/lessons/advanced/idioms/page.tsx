'use client';

import React, { useState } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Star,
    BookOpen,
    Clock,
    Target,
    Heart,
    Share2,
    Bookmark
} from 'lucide-react';
import Link from 'next/link';

const IdiomsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <Link href="/lessons/advanced" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                                Back to Advanced
                            </Link>
                            <div className="h-6 w-px bg-gray-300"></div>
                            <div className="text-sm bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                                Advanced
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            💭 Idioms, Proverbs & Figurative Language
                        </h1>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Use advanced phrases that express wisdom, humor, and nuance.
                            Master cultural expressions and figurative language in Khmer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <BookOpen className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Sections</p>
                            <p className="text-lg font-bold text-gray-900">3</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="text-lg font-bold text-gray-900">50 min</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Difficulty</p>
                            <p className="text-lg font-bold text-gray-900">Advanced</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Star className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">XP Reward</p>
                            <p className="text-lg font-bold text-gray-900">55</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/lessons/advanced/literature"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous: Literature
                    </Link>
                    <Link
                        href="/lessons/advanced/listening-advanced"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Next: Listening
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Content Placeholder */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Idioms Content Coming Soon</h3>
                    <p className="text-gray-600">This lesson will include Khmer idioms, proverbs, and figurative expressions with cultural context.</p>
                </div>
            </div>
        </div>
    );
};

export default IdiomsPage; 