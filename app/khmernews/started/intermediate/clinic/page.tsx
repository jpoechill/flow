'use client';

import React, { useState } from "react";
import { BookOpen } from "lucide-react";

const VisitingTheClinicPage = () => {
    const [showTranslation, setShowTranslation] = useState(false);

    const vocab = [
        { kh: "គ្លីនិក", en: "Clinic", tr: "kli-niik" },
        { kh: "ជំងឺ", en: "Illness", tr: "chum-nguh" },
        { kh: "អាការៈ", en: "Symptom", tr: "aa-kaa-ra" },
        { kh: "ថ្នាំ", en: "Medicine", tr: "thnam" },
        { kh: "គ្រូពេទ្យ", en: "Doctor", tr: "kruu-pet" },
        { kh: "អ្នកជំងឺ", en: "Patient", tr: "neak-chum-nguh" },
        { kh: "ពិនិត្យ", en: "Examine", tr: "bpi-niet" },
        { kh: "សីតុណ្ហភាព", en: "Temperature", tr: "say-toan-ha-pheap" }
    ];

    const ArticleLine = ({ khmer, english }: { khmer: string, english: string }) => (
        <p className="text-[20px] leading-9">
            <span className="block mb-1">
                {khmer.split(" ").map((word, i) => {
                    const match = vocab.find((v) => v.kh === word);
                    return (
                        <span key={i} className={match ? "bg-yellow-100 px-1 rounded" : ""}>
                            {word + " "}
                        </span>
                    );
                })}
            </span>
            {showTranslation && <span className="text-sm text-gray-600 italic">{english}</span>}
        </p>
    );

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 pt-10 pb-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                            <BookOpen className="inline mr-1" size={16} />
                            Advanced Reading
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Health Topic
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-indigo-700 mb-2">🏥 ពិនិត្យសុខភាពនៅគ្លីនិក</h1>
                    <p className="text-gray-700 text-lg max-w-xl">
                        អត្ថបទនេះពិពណ៌នាអំពីបទពិសោធន៍ក្នុងការទៅពិនិត្យនៅគ្លីនិកមួយនៅកម្ពុជា។
                    </p>
                    <button
                        onClick={() => setShowTranslation(!showTranslation)}
                        className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow"
                    >
                        {showTranslation ? "Hide English" : "Show English"}
                    </button>
                </div>

                {/* Article Content */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-6 text-gray-900">
                    <ArticleLine
                        khmer="នៅភ្នំពេញ គ្លីនិកមួយចំនួនបានជួបប្រទះនឹងអ្នកជំងឺកើនឡើង។"
                        english="In Phnom Penh, some clinics have experienced an increase in patients."
                    />
                    <ArticleLine
                        khmer="អ្នកជំងឺភាគច្រើនមានអាការៈដូចជា គ្រុនក្ដៅ ឈឺក្បាល និងផ្តាសាយ។"
                        english="Most patients report symptoms like fever, headache, and the common cold."
                    />
                    <ArticleLine
                        khmer="គ្រូពេទ្យបានពិនិត្យសីតុណ្ហភាព និងផ្ដល់ថ្នាំ។"
                        english="The doctor examined the temperature and gave medicine."
                    />
                    <ArticleLine
                        khmer="អ្នកជំងឺត្រូវបានណែនាំឲ្យសម្រាក និងផឹកទឹកច្រើន។"
                        english="The patient was advised to rest and drink plenty of water."
                    />
                    <ArticleLine
                        khmer="គ្លីនិកខ្លះកំពុងប្រើបច្ចេកវិទ្យាថ្មីដើម្បីរៀបចំកំណត់ត្រាអ្នកជំងឺ។"
                        english="Some clinics are using new technology to organize patient records."
                    />
                </div>

                {/* Vocabulary Table */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-indigo-600 mb-4">📘 Vocabulary Table</h2>
                    <table className="w-full table-auto border border-gray-200 text-left text-lg text-gray-800">
                        <thead className="bg-indigo-100">
                            <tr>
                                <th className="px-4 py-2 border">Khmer</th>
                                <th className="px-4 py-2 border">Transliteration</th>
                                <th className="px-4 py-2 border">English</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vocab.map((item, i) => (
                                <tr key={i} className="even:bg-gray-50">
                                    <td className="px-4 py-2 border font-semibold">{item.kh}</td>
                                    <td className="px-4 py-2 border italic text-gray-600">{item.tr}</td>
                                    <td className="px-4 py-2 border">{item.en}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default VisitingTheClinicPage;
