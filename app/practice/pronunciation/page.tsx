'use client';

import React from 'react';

const PronunciationLab = () => {
    return (
        <div className="page px-4 py-10 md:px-16 lg:px-24 bg-white min-h-screen">
            <div className="bg-white p-8 rounded-xl shadow mb-10">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">🗣️ Pronunciation Lab</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Master the sounds of the Khmer language. Practice vowels, consonants, tones, and tricky word combinations with audio and tips.
                </p>

                {/* Section: Vowels */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🔤 Vowel Practice</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { char: 'ា', sound: 'aa', tip: 'like “a” in father' },
                            { char: 'ិ', sound: 'i', tip: 'like “i” in bit' },
                            { char: 'ុ', sound: 'u', tip: 'like “oo” in good' },
                            { char: 'េ', sound: 'ay', tip: 'like “ay” in say' },
                        ].map((v, i) => (
                            <div key={i} className="bg-indigo-50 p-4 rounded shadow hover:bg-indigo-100 transition">
                                <div className="text-3xl font-bold mb-2 text-indigo-700">{v.char}</div>
                                <p className="font-medium text-gray-800 mb-1">Sound: {v.sound}</p>
                                <p className="text-sm text-gray-600">{v.tip}</p>
                                <button
                                    className="mt-2 text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                                    disabled
                                >
                                    ▶️ Hear
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Consonant Clusters */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🧩 Consonant Clusters</h2>
                    <p className="text-gray-700 mb-4">
                        Khmer uses subscript consonants to form clusters like:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>ស្ករ (s-kɑ):</strong> sugar — pronounced with a tight “sk” blend at the start.
                        </li>
                        <li>
                            <strong>ប្រាក់ (prɑk):</strong> money — the “pr” blend is quick and smooth.
                        </li>
                        <li>
                            <strong>ស្មៅ (smav):</strong> grass — start with an “s” then slide into “m”.
                        </li>
                    </ul>
                </section>

                {/* Section: Tips */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">📌 Pronunciation Tips</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Khmer is not a tonal language, but it does have contrast between long and short vowels.
                        </li>
                        <li>
                            Many final consonants are not released strongly—practice ending words softly.
                        </li>
                        <li>
                            Use recordings of native speakers to mimic rhythm and intonation.
                        </li>
                        <li>
                            Practice with minimal pairs (e.g., កា vs. កី) to hear subtle vowel shifts.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default PronunciationLab;
