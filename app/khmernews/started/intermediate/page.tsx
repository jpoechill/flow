'use client';

import React from "react";
import { BookOpen, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

const IntermediateReadingPage = () => {
    const lessons = [
        {
            title: "🏥 Visiting the Clinic",
            summary: "Learn vocabulary and phrases for a doctor's visit in Cambodia.",
            link: "/lessons/intermediate/visiting-the-clinic",
            tag: "Health"
        },
        {
            title: "🚕 Taking a Tuk Tuk",
            summary: "Practice conversation and directions with a tuk tuk driver.",
            link: "/lessons/intermediate/tuk-tuk",
            tag: "Transportation"
        },
        {
            title: "🏠 Talking About Your Home",
            summary: "Describe your home and practice location-based phrases.",
            link: "/lessons/intermediate/about-home",
            tag: "Daily Life"
        },
        {
            title: "🛍️ Shopping at the Market",
            summary: "Practice numbers, bargaining, and asking for items.",
            link: "/lessons/intermediate/market-shopping",
            tag: "Everyday Use"
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 pt-10 pb-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full font-bold shadow">
                        <BookOpen size={18} />
                        Intermediate Reading
                    </div>
                    <h1 className="text-4xl font-bold text-indigo-700 mt-6 mb-2">
                        Grow Your Khmer Reading Skills 🧠
                    </h1>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        These passages are perfect for practicing sentence structure, everyday conversation, and health-related topics.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {lessons.map((lesson, index) => (
                        <Link
                            key={index}
                            href={lesson.link}
                            className="group block bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
                        >
                            <div className="text-sm text-gray-500 mb-1">{lesson.tag}</div>
                            <h3 className="text-xl font-bold text-indigo-700 mb-2">{lesson.title}</h3>
                            <p className="text-gray-700 mb-4">{lesson.summary}</p>
                            <div className="flex items-center gap-1 text-indigo-600 font-medium group-hover:underline">
                                Start Lesson <ArrowRightCircle size={18} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default IntermediateReadingPage;