'use client';

import React, { useState } from 'react';
import { BookOpen, Eye, EyeOff, Target, CheckCircle } from 'lucide-react';

const NewsPracticePage = () => {
    const [showTranslation, setShowTranslation] = useState(false);
    const [readArticles, setReadArticles] = useState(new Set());

    const articles = [
        {
            id: 1,
            title: 'ការផ្លាស់ប្តូរក្នុងវិស័យសុខាភិបាល',
            subtitle: 'Health Sector Reform in Cambodia',
            summary: 'អត្ថបទនេះពិភាក្សាអំពីការផ្លាស់ប្តូរផ្នែកសុខាភិបាលនៅកម្ពុជា និងអនុសាសន៍សំខាន់ៗ។',
            english: 'This article discusses changes in Cambodia&apos;s health sector and important recommendations.'
        },
        {
            id: 2,
            title: 'ការអភិវឌ្ឍអគារសាធារណៈ',
            subtitle: 'Public Infrastructure Development',
            summary: 'ការរីកចម្រើននៃអគារសាធារណៈទាក់ទងនឹងសេដ្ឋកិច្ច និងជីវភាពរស់នៅ។',
            english: 'The development of public buildings and infrastructure is tied to the economy and quality of life.'
        },
        // Add more articles as needed
    ];

    const toggleRead = (id: number) => {
        setReadArticles(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pt-10 pb-20">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                            <BookOpen className="inline mr-1" size={16} />
                            News Practice
                        </div>
                        <button
                            onClick={() => setShowTranslation(!showTranslation)}
                            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                            {showTranslation ? <EyeOff size={16} /> : <Eye size={16} />}
                            {showTranslation ? 'Hide English' : 'Show English'}
                        </button>
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                        អនុវត្តន៍អានសារព័ត៌មានប្រចាំថ្ងៃ
                    </h1>
                    <p className="text-md text-gray-600 mt-2">
                        Practice reading real news articles in Khmer to boost comprehension and vocabulary.
                    </p>
                </div>

                <div className="space-y-6">
                    {articles.map(article => (
                        <div
                            key={article.id}
                            className={`border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all ${readArticles.has(article.id) ? 'bg-green-50 border-green-300' : 'bg-white'}`}
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-semibold text-indigo-700">{article.title}</h2>
                                <button
                                    onClick={() => toggleRead(article.id)}
                                    className="flex items-center gap-1 text-sm px-3 py-1 rounded-full border border-gray-300 hover:border-indigo-400"
                                >
                                    {readArticles.has(article.id) ? <CheckCircle className="text-green-500" size={16} /> : <Target size={16} />}
                                    {readArticles.has(article.id) ? 'Marked as Read' : 'Mark as Read'}
                                </button>
                            </div>
                            <p className="text-gray-700 mt-2">{article.summary}</p>
                            {showTranslation && (
                                <p className="text-sm text-gray-500 italic mt-1">{article.english}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default NewsPracticePage;
