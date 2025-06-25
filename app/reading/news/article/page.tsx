'use client';

import React, { useState, useEffect } from 'react';
import {
    Eye, EyeOff, BookOpen, Volume2, Play, Pause,
    RotateCcw, Trophy, Target, CheckCircle
} from 'lucide-react';

// Tooltip Component
const Tooltip = ({ word, translation, definition, transliteration, children }: { word: string, translation: string, definition: string, transliteration: string, children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span className="relative inline-block">
            <span
                className="cursor-pointer bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 px-1 py-0.5 rounded-md border-b-2 border-blue-300 transition-all duration-200 font-medium"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onClick={() => setIsVisible(!isVisible)}
            >
                {children || word}
            </span>
            {isVisible && (
                <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-4 bg-white border-2 border-blue-200 rounded-xl shadow-xl w-80 animate-in fade-in-0 zoom-in-95">
                    <div className="space-y-2">
                        <div className="text-2xl font-bold text-gray-800">{word}</div>
                        <div className="text-sm text-blue-600 italic">{transliteration}</div>
                        <div className="text-lg font-semibold text-green-700">{translation}</div>
                        <div className="text-sm text-gray-600 leading-relaxed">{definition}</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-blue-200"></div>
                </div>
            )}
        </span>
    );
};

// ProgressBar Component
const ProgressBar = ({ current, total }: { current: number, total: number }) => {
    const percentage = (current / total) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

// Reading Timer
const ReadingTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive) {
            interval = setInterval(() => setSeconds(s => s + 1), 1000);
        } else {
            if (interval) clearInterval(interval);
        }
        return () => { if (interval) clearInterval(interval); };
    }, [isActive]);

    const toggle = () => setIsActive(!isActive);
    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    const formatTime = (s: string) => {
        const m = Math.floor(Number(s) / 60);
        const sec = Number(s) % 60;
        return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg border border-purple-200">
            <div className="text-2xl font-mono font-bold text-purple-700">{formatTime(seconds.toString())}</div>
            <button
                onClick={toggle}
                className="p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors"
            >
                {isActive ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
                onClick={reset}
                className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors"
            >
                <RotateCcw size={16} />
            </button>
        </div>
    );
};

// Main Page

const CambodiaEconomyArticle = () => {
    const [showTranslation, setShowTranslation] = useState(false);
    const [readingMode, setReadingMode] = useState('normal'); // normal, focus, quiz
    const [clickedWords, setClickedWords] = useState(new Set());
    const [showStats, setShowStats] = useState(false);

    const totalWords = 18; // Total vocabulary words
    const learnedWords = clickedWords.size;

    const handleWordClick = (word: string) => {
        setClickedWords(prev => new Set([...prev, word]));
    };

    const vocabularyData = [
        ['សេដ្ឋកិច្ច', 'sed-tha-kech', 'economy'],
        ['វិភាគ', 'vi-peak', 'analysis'],
        ['វិបត្តិ', 'vi-bat', 'crisis'],
        ['កសិកម្ម', 'ka-se-kam', 'agriculture'],
        ['សំណង់', 'som-nong', 'construction'],
        ['ទេសចរណ៍', 'tes-cha-ron', 'tourism'],
        ['កំណើន', 'kom-naen', 'growth'],
        ['ការនាំចេញ', 'kar-norm-chenh', 'export'],
        ['ការវិនិយោគបរទេស', 'vi-ni-youk bor-teh', 'foreign investment'],
        ['ឧស្សាហកម្ម', 'us-sa-ha-kam', 'industry'],
        ['បច្ចេកវិជ្ជា', 'bok-chek-vich-chea', 'technology'],
        ['ជីសិប្បនិម្មិត', 'chi-sep-pa-ni-mit', 'fertilizer'],
        ['ឥន្ធនៈ', 'en-tho-na', 'fuel'],
        ['ទំនុកចិត្ត', 'tum-nok-chet', 'trust'],
        ['ធនធានមនុស្ស', 'tho-no-thean mo-nuh', 'human resources'],
        ['បណ្តុះបណ្តាលជំនាញ', 'bon-doh bon-dal chum-nanh', 'skill training'],
        ['ស្ថិរភាព', 'sta-he-rea-pheap', 'stability'],
        ['ប្រកួតប្រជែង', 'bro-kout bro-cheang', 'competition']
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Floating Progress Panel */}
            <div className="fixed top-4 right-4 z-40 bg-white rounded-xl shadow-lg p-4 border border-gray-200 min-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <Trophy className="text-yellow-500" size={20} />
                        <span className="font-semibold text-gray-700">Progress</span>
                    </div>
                    <button
                        onClick={() => setShowStats(!showStats)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        {showStats ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>

                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span>Words Learned</span>
                            <span className="font-bold">{learnedWords}/{totalWords}</span>
                        </div>
                        <ProgressBar current={learnedWords} total={totalWords} />
                    </div>

                    {showStats && (
                        <div className="space-y-2 text-sm">
                            <ReadingTimer />
                            <div className="flex items-center gap-2">
                                <Target size={16} className="text-blue-500" />
                                <span>Completion: {Math.round((learnedWords / totalWords) * 100)}%</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <main className="px-4 pt-10 pb-20">
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                <BookOpen className="inline mr-1" size={16} />
                                Advanced Reading
                            </div>
                            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                Economics
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight mb-2">
                            កម្ពុជាកំពុងតែត្រឡប់មកវិញក្រោយពេលវឹកវរ
                        </h1>

                        <h2 className="text-xl text-gray-600 font-medium mb-4">
                            Cambodia&apos;s Economic Recovery After the COVID-19 Crisis
                        </h2>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <BookOpen size={16} />
                                អត្ថបទអាន · កម្រិតខ្ពស់
                            </span>
                            <span>⏱️ ~8 min read</span>
                        </div>
                    </div>

                    {/* Control Panel */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowTranslation(!showTranslation)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${showTranslation
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {showTranslation ? <EyeOff size={16} /> : <Eye size={16} />}
                                    {showTranslation ? 'Hide Translation' : 'Show Translation'}
                                </button>

                                <button
                                    onClick={() => setReadingMode(readingMode === 'focus' ? 'normal' : 'focus')}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${readingMode === 'focus'
                                        ? 'bg-purple-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <Target size={16} />
                                    Focus Mode
                                </button>
                            </div>

                            <div className="text-sm text-gray-600">
                                💡 Click on highlighted words to learn vocabulary
                            </div>
                        </div>
                    </div>

                    {/* Main Article */}
                    <div className={`transition-all duration-300 ${readingMode === 'focus' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
                        } rounded-xl shadow-lg p-8 text-[26px] leading-10 space-y-8 border border-gray-200`}>
                        <p>
                            ការ
                            <Tooltip
                                word="វិភាគ"
                                translation="analysis"
                                definition="An expert study to assess economic patterns."
                                transliteration="vi-peak"
                            >
                                <button
                                    onClick={() => handleWordClick('វិភាគ')}
                                    className={clickedWords.has('វិភាគ') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    វិភាគ
                                </button>
                            </Tooltip>
                            ថ្មីបង្ហាញថា
                            <Tooltip
                                word="សេដ្ឋកិច្ច"
                                translation="economy"
                                definition="Cambodia&apos;s financial and production system."
                                transliteration="sed-tha-kech"
                            >
                                <button
                                    onClick={() => handleWordClick('សេដ្ឋកិច្ច')}
                                    className={clickedWords.has('សេដ្ឋកិច្ច') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    សេដ្ឋកិច្ច
                                </button>
                            </Tooltip>
                            កម្ពុជា កំពុងតែមានសំណើចំរូងពី
                            <Tooltip
                                word="វិបត្តិ"
                                translation="crisis"
                                definition="A difficult period — here referring to the pandemic."
                                transliteration="vi-bat"
                            >
                                <button
                                    onClick={() => handleWordClick('វិបត្តិ')}
                                    className={clickedWords.has('វិបត្តិ') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    វិបត្តិ
                                </button>
                            </Tooltip>
                            កូវីដ១៩។ បន្ទាប់ពីការធ្លាក់ចុះយ៉ាងខ្លាំងក្នុងឆ្នាំ ២០២០ ដោយសារការរីករាលដាលនៃជំងឺកូវីដ សកម្មភាពសេដ្ឋកិច្ចដូចជា
                            <Tooltip
                                word="កសិកម្ម"
                                translation="agriculture"
                                definition="Farming and cultivation sector."
                                transliteration="ka-se-kam"
                            >
                                <button
                                    onClick={() => handleWordClick('កសិកម្ម')}
                                    className={clickedWords.has('កសិកម្ម') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    កសិកម្ម
                                </button>
                            </Tooltip>,
                            <Tooltip
                                word="សំណង់"
                                translation="construction"
                                definition="The building industry."
                                transliteration="som-nong"
                            >
                                <button
                                    onClick={() => handleWordClick('សំណង់')}
                                    className={clickedWords.has('សំណង់') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    សំណង់
                                </button>
                            </Tooltip> និង
                            <Tooltip
                                word="ទេសចរណ៍"
                                translation="tourism"
                                definition="Travel and hospitality sector."
                                transliteration="tes-cha-ron"
                            >
                                <button
                                    onClick={() => handleWordClick('ទេសចរណ៍')}
                                    className={clickedWords.has('ទេសចរណ៍') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ទេសចរណ៍
                                </button>
                            </Tooltip>
                            បានចាប់ផ្តើមមានសញ្ញាផ្លាស់ប្តូរជាទៅវិជ្ជមានវិញ។
                        </p>

                        <p>
                            តាមរបាយការណ៍របស់ធនាគារពិភពលោក
                            <Tooltip
                                word="កំណើន"
                                translation="growth"
                                definition="Increase in national economic activity."
                                transliteration="kom-naen"
                            >
                                <button
                                    onClick={() => handleWordClick('កំណើន')}
                                    className={clickedWords.has('កំណើន') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    កំណើន
                                </button>
                            </Tooltip>
                            <Tooltip
                                word="សេដ្ឋកិច្ច"
                                translation="economy"
                                definition="Cambodia&apos;s financial state."
                                transliteration="sed-tha-kech"
                            >
                                <button
                                    onClick={() => handleWordClick('សេដ្ឋកិច្ច')}
                                    className={clickedWords.has('សេដ្ឋកិច្ច') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    សេដ្ឋកិច្ច
                                </button>
                            </Tooltip>
                            របស់កម្ពុជាអាចឈានដល់ប្រហែល ៥.៥% ក្នុងឆ្នាំនេះ ដោយសារការកើនឡើងនៃ
                            <Tooltip
                                word="ការនាំចេញ"
                                translation="export"
                                definition="Selling goods to other countries."
                                transliteration="kar-norm-chenh"
                            >
                                <button
                                    onClick={() => handleWordClick('ការនាំចេញ')}
                                    className={clickedWords.has('ការនាំចេញ') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ការនាំចេញ
                                </button>
                            </Tooltip> និង
                            <Tooltip
                                word="ការវិនិយោគបរទេស"
                                translation="foreign investment"
                                definition="International funding for Cambodian ventures."
                                transliteration="vi-ni-youk bor-teh"
                            >
                                <button
                                    onClick={() => handleWordClick('ការវិនិយោគបរទេស')}
                                    className={clickedWords.has('ការវិនិយោគបរទេស') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ការវិនិយោគបរទេស
                                </button>
                            </Tooltip>។ រដ្ឋាភិបាលក៏បានដាក់ចេញយុទ្ធសាស្ត្រថ្មីៗដើម្បីលើកទឹកចិត្ត
                            <Tooltip
                                word="ឧស្សាហកម្ម"
                                translation="industry"
                                definition="Goods-producing sectors like textiles or factories."
                                transliteration="us-sa-ha-kam"
                            >
                                <button
                                    onClick={() => handleWordClick('ឧស្សាហកម្ម')}
                                    className={clickedWords.has('ឧស្សាហកម្ម') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ឧស្សាហកម្ម
                                </button>
                            </Tooltip>
                            និងប្រើប្រាស់
                            <Tooltip
                                word="បច្ចេកវិជ្ជា"
                                translation="technology"
                                definition="Modern tools and systems for efficiency."
                                transliteration="bok-chek-vich-chea"
                            >
                                <button
                                    onClick={() => handleWordClick('បច្ចេកវិជ្ជា')}
                                    className={clickedWords.has('បច្ចេកវិជ្ជា') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    បច្ចេកវិជ្ជា
                                </button>
                            </Tooltip>។
                        </p>

                        <p>
                            ទោះបីជាយ៉ាងណា បញ្ហាប្រឈមមួយចំនួននៅតែមាន។ វិភាគករបានលើកឡើងពីការឡើងថ្លៃនៃតម្លៃ
                            <Tooltip
                                word="ជីសិប្បនិម្មិត"
                                translation="fertilizer"
                                definition="Chemicals for soil enrichment."
                                transliteration="chi-sep-pa-ni-mit"
                            >
                                <button
                                    onClick={() => handleWordClick('ជីសិប្បនិម្មិត')}
                                    className={clickedWords.has('ជីសិប្បនិម្មិត') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ជីសិប្បនិម្មិត
                                </button>
                            </Tooltip> និងប្រេង
                            <Tooltip
                                word="ឥន្ធនៈ"
                                translation="fuel"
                                definition="Energy sources like gasoline."
                                transliteration="en-tho-na"
                            >
                                <button
                                    onClick={() => handleWordClick('ឥន្ធនៈ')}
                                    className={clickedWords.has('ឥន្ធនៈ') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ឥន្ធនៈ
                                </button>
                            </Tooltip>។ ស្ថានភាពសង្គមនិងនយោបាយអាចប៉ះពាល់ដល់
                            <Tooltip
                                word="ទំនុកចិត្ត"
                                translation="trust"
                                definition="Confidence from investors or the public."
                                transliteration="tum-nok-chet"
                            >
                                <button
                                    onClick={() => handleWordClick('ទំនុកចិត្ត')}
                                    className={clickedWords.has('ទំនុកចិត្ត') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ទំនុកចិត្ត
                                </button>
                            </Tooltip>
                            ផងដែរ។
                        </p>

                        <p>
                            អ្នកជំនាញស្នើឱ្យអភិវឌ្ឍ
                            <Tooltip
                                word="ធនធានមនុស្ស"
                                translation="human resources"
                                definition="The skills and knowledge of the workforce."
                                transliteration="tho-no-thean mo-nuh"
                            >
                                <button
                                    onClick={() => handleWordClick('ធនធានមនុស្ស')}
                                    className={clickedWords.has('ធនធានមនុស្ស') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ធនធានមនុស្ស
                                </button>
                            </Tooltip>
                            តាមរយៈការអប់រំ និង
                            <Tooltip
                                word="បណ្តុះបណ្តាលជំនាញ"
                                translation="skill training"
                                definition="Hands-on learning for specific jobs."
                                transliteration="bon-doh bon-dal chum-nanh"
                            >
                                <button
                                    onClick={() => handleWordClick('បណ្តុះបណ្តាលជំនាញ')}
                                    className={clickedWords.has('បណ្តុះបណ្តាលជំនាញ') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    បណ្តុះបណ្តាលជំនាញ
                                </button>
                            </Tooltip>។ វាជាគន្លឹះសំខាន់ក្នុងការរឹតបន្តឹងសេដ្ឋកិច្ចអោយមាន
                            <Tooltip
                                word="ស្ថិរភាព"
                                translation="stability"
                                definition="Steadiness in the economy over time."
                                transliteration="sta-he-rea-pheap"
                            >
                                <button
                                    onClick={() => handleWordClick('ស្ថិរភាព')}
                                    className={clickedWords.has('ស្ថិរភាព') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ស្ថិរភាព
                                </button>
                            </Tooltip> និង
                            <Tooltip
                                word="ប្រកួតប្រជែង"
                                translation="competition"
                                definition="Ability to succeed among other nations."
                                transliteration="bro-kout bro-cheang"
                            >
                                <button
                                    onClick={() => handleWordClick('ប្រកួតប្រជែង')}
                                    className={clickedWords.has('ប្រកួតប្រជែង') ? 'bg-green-200 border-green-400' : ''}
                                >
                                    ប្រកួតប្រជែង
                                </button>
                            </Tooltip>។
                        </p>
                    </div>

                    {/* Enhanced Translation Section */}
                    {showTranslation && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mt-8 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-blue-500 p-2 rounded-full">
                                    <Volume2 className="text-white" size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-700">English Translation</h3>
                            </div>
                            <div className="text-lg leading-8 space-y-6 text-gray-700">
                                <p>
                                    A new analysis shows that Cambodia&apos;s economy is starting to recover from the COVID-19 crisis. After a
                                    steep decline in 2020, sectors like agriculture, construction, and tourism have begun showing positive signs.
                                </p>
                                <p>
                                    The World Bank reports that Cambodia&apos;s economic growth may reach 5.5% this year, due to increased exports and foreign investment. The government has introduced strategies to support local industries and modern technology.
                                </p>
                                <p>
                                    Still, challenges remain. Analysts highlight the rising costs of fertilizer and fuel, which could hinder growth. Social and political issues may also impact investor trust.
                                </p>
                                <p>
                                    Experts recommend investing in human resource development through education and skill training. These are key to strengthening economic stability and boosting Cambodia&apos;s regional competitiveness.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Enhanced Vocabulary Table */}
                    <div className="mt-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                                <BookOpen className="text-white" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Vocabulary Bank
                            </h2>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-semibold">Status</th>
                                            <th className="px-6 py-4 text-left font-semibold">Khmer</th>
                                            <th className="px-6 py-4 text-left font-semibold">Transliteration</th>
                                            <th className="px-6 py-4 text-left font-semibold">English</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {vocabularyData.map(([kh, tr, en], i) => (
                                            <tr key={i} className={`hover:bg-gray-50 transition-colors ${clickedWords.has(kh) ? 'bg-green-50 border-l-4 border-green-400' : ''
                                                }`}>
                                                <td className="px-6 py-4">
                                                    {clickedWords.has(kh) ? (
                                                        <CheckCircle className="text-green-500" size={20} />
                                                    ) : (
                                                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 font-bold text-xl text-gray-800">{kh}</td>
                                                <td className="px-6 py-4 italic text-gray-600 text-lg">{tr}</td>
                                                <td className="px-6 py-4 font-medium text-lg text-gray-700">{en}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Learning Achievement */}
                        {learnedWords === totalWords && (
                            <div className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
                                <div className="text-4xl mb-2">🎉</div>
                                <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
                                <p className="text-lg">You&apos;ve learned all vocabulary words in this article!</p>
                            </div>
                        )}
                    </div>

                    {/* Study Tips Section */}
                    <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-yellow-500 p-2 rounded-full">
                                <Target className="text-white" size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-yellow-700">Study Tips</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-lg">📚 Reading Strategy</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Read through once for general understanding</li>
                                    <li>• Use tooltips to learn new vocabulary</li>
                                    <li>• Try Focus Mode to minimize distractions</li>
                                    <li>• Compare with English translation if needed</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-lg">🎯 Vocabulary Practice</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Click on highlighted words to mark as learned</li>
                                    <li>• Focus on economic and business terms</li>
                                    <li>• Practice pronunciation with transliterations</li>
                                    <li>• Review the vocabulary table regularly</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-12 flex justify-between items-center">
                        <a
                            href="/practice/news"
                            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
                        >
                            ← Back to News Practice
                        </a>

                        <div className="flex gap-3">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg">
                                Next Article →
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CambodiaEconomyArticle;
