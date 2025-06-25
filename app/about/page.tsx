'use client';

import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">👋 About KhmerLingo</h1>

            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                KhmerLingo was created to make learning the Khmer language more approachable, practical, and fun — especially
                for second-generation Cambodians and language lovers around the world. We know that for many, learning Khmer
                isn&apos;t just about grammar and vocabulary — it&apos;s about reconnecting with your roots, honoring your
                family, or building a bridge to a culture you care about.
            </p>

            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                Our lessons are designed to meet you where you are — whether you&apos;re starting with the alphabet or diving
                deep into advanced grammar, literary registers, or public speaking. We blend language learning with cultural
                insight so you&apos;re not just learning how to speak Khmer — you&apos;re learning how to use it with confidence
                and respect.
            </p>

            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                KhmerLingo is a growing project led by educators, cultural artists, and developers who care deeply about
                language preservation and access. We&apos;re community-powered, and every visit, suggestion, or share helps us
                keep building. 🙏
            </p>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-2">💡 Our Mission</h2>
                <p className="text-gray-700 mb-4">
                    To empower Khmer learners through accessible, culturally-rich tools that honor tradition while embracing
                    modern learning.
                </p>

                <h2 className="text-2xl font-semibold text-indigo-700 mb-2">🤝 Get Involved</h2>
                <p className="text-gray-700 mb-2">
                    If you&apos;re a teacher, translator, developer, or cultural ambassador — we&apos;d love to hear from you.
                </p>
                <p className="text-gray-700">
                    Reach out at{' '}
                    <a href="mailto:oakkhmerangkor@gmail.com" className="text-indigo-200 hover:underline">
                        oakkhmerangkor@gmail.com
                    </a>{' '}
                    or follow us on{' '}
                    <a
                        href="https://facebook.com/oakkhmerangkor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-200 hover:underline"
                    >
                        Facebook
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
