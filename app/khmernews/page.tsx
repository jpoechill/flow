// app/page.tsx

'use client';

import Link from 'next/link';
import { BookOpen, Globe, Search, Languages, ArrowRight, Sparkles, PlayCircle } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800">
            {/* Hero Section */}
            <section className="px-6 md:px-16 py-20 text-center bg-white shadow-md rounded-b-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
                    🇰🇭 Khmer News, Simplified.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                    Practice reading real Khmer news articles, build your vocabulary, and grow fluent in formal language through expertly crafted translations and interactive learning tools.
                </p>
                <Link
                    href="/news"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg rounded-full shadow transition"
                >
                    Start Reading <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </section>

            {/* Features */}
            <section className="py-16 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">🧠 Built for Learners</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <BookOpen className="mx-auto text-indigo-600 mb-4" size={36} />
                        <h3 className="text-xl font-semibold mb-2">Weekly News Summaries</h3>
                        <p className="text-gray-600">Fresh articles every week from trusted Khmer news sources, with summaries and analysis written for learners.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <Languages className="mx-auto text-indigo-600 mb-4" size={36} />
                        <h3 className="text-xl font-semibold mb-2">Side-by-Side Translations</h3>
                        <p className="text-gray-600">See Khmer passages with English translations, definitions, and pronunciation guides instantly available.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <Sparkles className="mx-auto text-indigo-600 mb-4" size={36} />
                        <h3 className="text-xl font-semibold mb-2">Interactive Vocabulary Tools</h3>
                        <p className="text-gray-600">Mark words as learned, listen to pronunciation, test yourself with quizzes, and track your progress as you grow.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-indigo-50 px-6 md:px-20">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">📚 How It Works</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <ul className="space-y-6 text-gray-700">
                            <li>
                                <strong>1. Choose an Article</strong> — Browse new summaries posted multiple times per week.
                            </li>
                            <li>
                                <strong>2. Read With Support</strong> — Click any word for definitions, examples, and audio.
                            </li>
                            <li>
                                <strong>3. Practice What You Learned</strong> — Try quizzes and review saved vocabulary.
                            </li>
                            <li>
                                <strong>4. Level Up</strong> — Progress from beginner summaries to more complex analysis and formal Khmer.
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <PlayCircle className="mx-auto text-indigo-600 mb-4" size={64} />
                        <p className="text-gray-600 text-lg">Everything designed to boost your Khmer reading confidence.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 md:px-20 text-center bg-white border-t border-gray-200">
                <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                    Ready to Learn Khmer Through Real News?
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    Join a growing community of learners and access high-quality, authentic Khmer content — with tools built just for you.
                </p>
                <Link
                    href="/signup"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg rounded-full shadow transition"
                >
                    Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </section>
        </main>
    );
}
