'use client';

import React from 'react';

const HolidaysPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">🎉 Khmer New Year & Major Holidays</h1>

            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                Khmer New Year, known as <strong>Chaul Chnam Thmey</strong> (ចូលឆ្នាំថ្មី), is the most celebrated national holiday in Cambodia. It marks the end of the harvest season and the beginning of a new year based on the traditional solar calendar. This three-day festival usually takes place in mid-April and blends ancient traditions, religious rituals, and joyful community gatherings.
            </p>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🌞 Day 1: Moha Sangkran (មហាសង្រ្កាន្ត)</h2>
            <p className="text-gray-700 mb-4">
                The New Year begins with Moha Sangkran, the welcoming of the new angel (Tevada). People clean their homes, light incense, and decorate with flowers. Offerings are made at pagodas for good fortune and blessings.
            </p>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">💧 Day 2: Virak Vanabat (វារៈវ័នបត)</h2>
            <p className="text-gray-700 mb-4">
                The second day is devoted to charity and honoring elders. Families visit relatives, offer food to monks, and often build sand stupas at temples as acts of merit.
            </p>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🚿 Day 3: Vearak Loeng Sak (វារៈឡើងស័ក)</h2>
            <p className="text-gray-700 mb-4">
                On the final day, people bathe Buddha statues and wash elders with perfumed water as a symbol of cleansing sins and receiving blessings for the year ahead. Water fights and games often break out in the streets!
            </p>

            <div className="border-t border-indigo-200 my-10"></div>

            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🗓️ Other Major Khmer Holidays</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                    <strong>Pchum Ben (បិណ្ឌ)</strong>: A 15-day Buddhist holiday honoring ancestors with food offerings.
                </li>
                <li>
                    <strong>Visak Bochea (វិសាខបូជា)</strong>: Celebrates the birth, enlightenment, and passing of Buddha.
                </li>
                <li>
                    <strong>Royal Ploughing Ceremony (ពិធីច្រត់ព្រះនង្គ័ល)</strong>: Marks the beginning of the rice planting season.
                </li>
                <li>
                    <strong>Water Festival (បុណ្យអុំទូក)</strong>: Held in November to celebrate the reversing flow of the Tonle Sap River, featuring boat races and moon offerings.
                </li>
            </ul>

            <div className="mt-10 text-sm text-gray-500">
                Want to explore the meanings behind Khmer festivals? Follow us on{' '}
                <a
                    href="https://facebook.com/oakkhmerangkor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                >
                    Facebook
                </a>{' '}
                for holiday photos and language tips.
            </div>
        </div>
    );
};

export default HolidaysPage;
