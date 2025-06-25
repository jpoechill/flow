'use client';

import React from 'react';

const AdvancedNewsReading = () => {
    return (
        <main className="min-h-screen px-4 pt-10 pb-20 bg-white text-gray-800">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <div className="text-xs bg-red-600 text-white px-3 py-1 rounded-full font-bold inline-block mb-2">
                        Reading
                    </div>
                    <h1 className="text-2xl font-bold text-indigo-700">📰 Reading the News (Advanced)</h1>
                    <p className="mt-2 text-md text-gray-600">
                        Practice understanding real-world Khmer news. These passages help you build vocabulary related to politics, society, environment, and current events.
                    </p>
                </div>

                {/* Sample News Passages */}
                <div className="space-y-8">
                    {[
                        {
                            title: 'សេដ្ឋកិច្ចកម្ពុជាកំពុងតែត្រឡប់មកវិញក្រោយពេលវឹកវរ',
                            summary: 'ការវិភាគថ្មីបង្ហាញថាសេដ្ឋកិច្ចកម្ពុជា កំពុងតែមានសំណើចំរូងពីវិបត្តិកូវីដ១៩...',
                        },
                        {
                            title: 'អាកាសធាតុផ្លាស់ប្តូរជាឧបសគ្គដល់កសិករដីទាប',
                            summary: 'កសិករជាច្រើនប្រឈមនឹងការបាត់បង់ទឹកស្រូវបណ្តាលមកពីភាពខ្វះទឹកជានិច្ច...',
                        },
                        {
                            title: 'ការបោះឆ្នោតជាតិ៖ អ្នកសង្កេតការណ៍និងសង្គមស៊ីវិលអំពាវនាវឲ្យមានការសង្កេតយ៉ាងជិតស្និទ្ធ',
                            summary: 'មូលដ្ឋានសង្គមស៊ីវិលបានអំពាវនាវឲ្យមានការចូលរួមសកម្មក្នុងការត្រួតពិនិត្យ...',
                        }
                    ].map((news, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                            <p className="text-gray-700">{news.summary}</p>
                            <button className="mt-4 inline-block text-sm text-indigo-600 hover:underline">
                                Read More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default AdvancedNewsReading;
