'use client';

import React from 'react';

const FolklorePage = () => {
    return (
        <div className="page px-4 py-10 md:px-16 lg:px-24 bg-white min-h-screen">
            <div className="bg-white p-8 rounded-xl shadow mb-10">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">📜 Stories, Proverbs & Folklore</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Discover Cambodia’s rich oral traditions, timeless proverbs, and folk stories that reveal the values and wit of Khmer culture.
                </p>

                {/* Section: Khmer Folktales */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">📖 Famous Khmer Folktales</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                        <li>
                            <strong>ចេកនិងខ្ទឹម (The Banana and the Onion):</strong> A clever tale that teaches the importance of not judging by appearances.
                        </li>
                        <li>
                            <strong>ព្រេងនិទាននាគ (The Legend of the Naga):</strong> The origin myth of the Cambodian people and their connection to the water serpent.
                        </li>
                        <li>
                            <strong>កំលោះឆ្លាត (The Clever Boy):</strong> A witty youth outsmarts a greedy rich man using intelligence over power.
                        </li>
                    </ul>
                </section>

                {/* Section: Khmer Proverbs */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🗣️ Khmer Proverbs (សុភាសិតខ្មែរ)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'ខ្មោចឃ្លាតទន្លេ មនុស្សឃ្លាតទំនង',
                                meaning: 'A ghost fears rivers, a person fears relationships. — Avoiding problems can cause even greater trouble.',
                            },
                            {
                                title: 'មានតែខ្យល់ មិនអាចអោយនាវាចងចតបានទេ',
                                meaning: 'Wind alone cannot dock a boat. — Words without action are meaningless.',
                            },
                            {
                                title: 'ស្រូវនៅសំបូរ តែសត្វស្លាបមិនសូវចូល',
                                meaning: 'Even in a full rice field, birds may not come. — You can have wealth, but not always luck or love.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-indigo-50 p-4 rounded shadow">
                                <p className="font-bold text-indigo-700 mb-2">{item.title}</p>
                                <p className="text-gray-700">{item.meaning}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Storytelling Traditions */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🎤 Storytelling in Khmer Culture</h2>
                    <p className="text-gray-700 mb-4">
                        Khmer elders traditionally share wisdom through oral stories during family gatherings or ceremonies. These stories often include moral lessons, humor, and historical legends passed down through generations.
                    </p>
                    <p className="text-gray-700">
                        Common settings for storytelling include pagoda festivals, village events, or under the full moon. The art of storytelling is seen as both entertainment and education.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default FolklorePage;
