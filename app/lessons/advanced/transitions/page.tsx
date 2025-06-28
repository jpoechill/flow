'use client';

import React, { useState } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Search,
    Filter,
    Star,
    BookOpen,
    Clock,
    Target,
    CheckCircle,
    Play,
    Volume2,
    Heart,
    Share2,
    Bookmark
} from 'lucide-react';
import Link from 'next/link';

interface VocabularyItem {
    khmer: string;
    transliteration: string;
    english: string;
    category: 'Basic' | 'Intermediate' | 'Advanced';
    example?: string;
    isFavorite: boolean;
}

interface PracticeQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const TransitionsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'Basic' | 'Intermediate' | 'Advanced'>('all');
    const [favorites, setFavorites] = useState(new Set<string>());
    const [showPractice, setShowPractice] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const vocabulary: VocabularyItem[] = [
        {
            khmer: 'ទោះយ៉ាងណា',
            transliteration: 'toh yang na',
            english: 'However',
            category: 'Basic',
            example: 'ទោះយ៉ាងណា ខ្ញុំនៅតែចង់រៀនភាសាខ្មែរ',
            isFavorite: false
        },
        {
            khmer: 'ដូច្នេះ',
            transliteration: 'dauchneh',
            english: 'Therefore',
            category: 'Basic',
            example: 'ខ្ញុំចង់រៀនភាសាខ្មែរ ដូច្នេះខ្ញុំត្រូវអនុវត្តជាប្រចាំ',
            isFavorite: false
        },
        {
            khmer: 'ដោយសារ',
            transliteration: 'doy sa',
            english: 'Because of',
            category: 'Basic',
            example: 'ខ្ញុំមិនអាចមកបានដោយសារការងាររវល់',
            isFavorite: false
        },
        {
            khmer: 'ជាមួយនឹង',
            transliteration: 'chea muoy nung',
            english: 'Along with',
            category: 'Intermediate',
            example: 'ជាមួយនឹងការសិក្សា យើងត្រូវអនុវត្តផងដែរ',
            isFavorite: false
        },
        {
            khmer: 'ដោយពិតណាស់',
            transliteration: 'doy pit nas',
            english: 'Certainly',
            category: 'Intermediate',
            example: 'ដោយពិតណាស់ ការរៀនភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់',
            isFavorite: false
        },
        {
            khmer: 'ជាការពិតណាស់',
            transliteration: 'chea kar pit nas',
            english: 'Indeed',
            category: 'Intermediate',
            example: 'ជាការពិតណាស់ យើងត្រូវធ្វើការវិភាគនេះឱ្យបានល្អ',
            isFavorite: false
        },
        {
            khmer: 'ដោយពិតណាស់ដែល',
            transliteration: 'doy pit nas del',
            english: 'Certainly that',
            category: 'Advanced',
            example: 'ដោយពិតណាស់ដែលយើងត្រូវធ្វើការវិភាគនេះឱ្យបានល្អ',
            isFavorite: false
        },
        {
            khmer: 'ជាការពិតណាស់ដែលយើងត្រូវធ្វើ',
            transliteration: 'chea kar pit nas del yeung trouv thveu',
            english: 'It is indeed true that we must do',
            category: 'Advanced',
            example: 'ជាការពិតណាស់ដែលយើងត្រូវធ្វើការវិភាគនេះឱ្យបានល្អ',
            isFavorite: false
        },
        {
            khmer: 'ដោយពិតណាស់ដែលយើងត្រូវធ្វើឱ្យបានល្អ',
            transliteration: 'doy pit nas del yeung trouv thveu aoy ban la',
            english: 'Certainly that we must do well',
            category: 'Advanced',
            example: 'ដោយពិតណាស់ដែលយើងត្រូវធ្វើការវិភាគនេះឱ្យបានល្អ',
            isFavorite: false
        },
        {
            khmer: 'ជាការពិតណាស់ដែលយើងត្រូវធ្វើឱ្យបានល្អជាប្រចាំ',
            transliteration: 'chea kar pit nas del yeung trouv thveu aoy ban la chea pracham',
            english: 'It is indeed true that we must do well consistently',
            category: 'Advanced',
            example: 'ជាការពិតណាស់ដែលយើងត្រូវធ្វើការវិភាគនេះឱ្យបានល្អជាប្រចាំ',
            isFavorite: false
        }
    ];

    const practiceQuestions: PracticeQuestion[] = [
        {
            question: 'How do you say "However" in Khmer?',
            options: ['ទោះយ៉ាងណា', 'ដូច្នេះ', 'ដោយសារ', 'ជាមួយនឹង'],
            correctAnswer: 0,
            explanation: 'ទោះយ៉ាងណា (toh yang na) means "However" and is used to show contrast.'
        },
        {
            question: 'What does "ដូច្នេះ" mean?',
            options: ['Because', 'However', 'Therefore', 'Along with'],
            correctAnswer: 2,
            explanation: 'ដូច្នេះ (dauchneh) means "Therefore" and is used to show consequence.'
        },
        {
            question: 'Which phrase means "Because of" in Khmer?',
            options: ['ដោយសារ', 'ជាមួយនឹង', 'ទោះយ៉ាងណា', 'ដូច្នេះ'],
            correctAnswer: 0,
            explanation: 'ដោយសារ (doy sa) means "Because of" and is used to explain reasons.'
        },
        {
            question: 'What is the correct way to say "Along with" in Khmer?',
            options: ['ជាមួយនឹង', 'ដោយសារ', 'ទោះយ៉ាងណា', 'ដូច្នេះ'],
            correctAnswer: 0,
            explanation: 'ជាមួយនឹង (chea muoy nung) means "Along with" and is used to show accompaniment.'
        },
        {
            question: 'How do you say "Certainly" in Khmer?',
            options: ['ដោយពិតណាស់', 'ជាការពិតណាស់', 'ទោះយ៉ាងណា', 'ដូច្នេះ'],
            correctAnswer: 0,
            explanation: 'ដោយពិតណាស់ (doy pit nas) means "Certainly" and is used to express agreement.'
        }
    ];

    const filteredVocabulary = vocabulary.filter(item => {
        const matchesSearch = searchTerm === '' ||
            item.khmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.english.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const toggleFavorite = (khmer: string) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(khmer)) {
                newFavorites.delete(khmer);
            } else {
                newFavorites.add(khmer);
            }
            return newFavorites;
        });
    };

    const startPractice = () => {
        setShowPractice(true);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedAnswer(null);
    };

    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            if (selectedAnswer === practiceQuestions[currentQuestion].correctAnswer) {
                setScore(prev => prev + 1);
            }

            if (currentQuestion + 1 < practiceQuestions.length) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                setShowResults(true);
            }
        }
    };

    const resetPractice = () => {
        setShowPractice(false);
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
        setSelectedAnswer(null);
    };

    const progressPercentage = Math.round((score / practiceQuestions.length) * 100);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <Link href="/lessons/advanced" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                                Back to Advanced
                            </Link>
                            <div className="h-6 w-px bg-gray-300"></div>
                            <div className="text-sm bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                                Advanced
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            🔗 Mastering Transitions
                        </h1>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Master the art of smooth transitions and logical flow in Khmer writing and speech.
                            Learn to connect ideas seamlessly with proper transitional phrases and expressions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <BookOpen className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Sections</p>
                            <p className="text-lg font-bold text-gray-900">3</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="text-lg font-bold text-gray-900">35 min</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Difficulty</p>
                            <p className="text-lg font-bold text-gray-900">Advanced</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Star className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">XP Reward</p>
                            <p className="text-lg font-bold text-gray-900">40</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/lessons/advanced/formal-registers"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous: Formal Registers
                    </Link>
                    <Link
                        href="/lessons/advanced/literature"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Next: Literature
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search transition words, connectors, or phrases..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as 'all' | 'Basic' | 'Intermediate' | 'Advanced')}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                            <option value="all">All Categories</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>

                {/* Vocabulary Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Basic Transitions */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            Basic Transitions
                        </h3>
                        <div className="space-y-4">
                            {filteredVocabulary.filter(item => item.category === 'Basic').map((item, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <p className="text-xl font-khmer text-gray-900 mb-1">{item.khmer}</p>
                                            <p className="text-sm text-gray-600 mb-1">{item.transliteration}</p>
                                            <p className="text-gray-900 font-medium">{item.english}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleFavorite(item.khmer)}
                                            className={`p-2 rounded-full transition-colors ${favorites.has(item.khmer)
                                                ? 'text-red-500 bg-red-50'
                                                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                                }`}
                                        >
                                            <Heart className={`w-5 h-5 ${favorites.has(item.khmer) ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>
                                    {item.example && (
                                        <div className="bg-gray-50 rounded-lg p-3 mt-3">
                                            <p className="text-sm font-khmer text-gray-700">{item.example}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Intermediate Transitions */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            Intermediate Transitions
                        </h3>
                        <div className="space-y-4">
                            {filteredVocabulary.filter(item => item.category === 'Intermediate').map((item, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <p className="text-xl font-khmer text-gray-900 mb-1">{item.khmer}</p>
                                            <p className="text-sm text-gray-600 mb-1">{item.transliteration}</p>
                                            <p className="text-gray-900 font-medium">{item.english}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleFavorite(item.khmer)}
                                            className={`p-2 rounded-full transition-colors ${favorites.has(item.khmer)
                                                ? 'text-red-500 bg-red-50'
                                                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                                }`}
                                        >
                                            <Heart className={`w-5 h-5 ${favorites.has(item.khmer) ? 'fill-current' : ''}`} />
                                        </button>
                                    </div>
                                    {item.example && (
                                        <div className="bg-gray-50 rounded-lg p-3 mt-3">
                                            <p className="text-sm font-khmer text-gray-700">{item.example}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Advanced Transitions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        Advanced Transitions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredVocabulary.filter(item => item.category === 'Advanced').map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <p className="text-lg font-khmer text-gray-900 mb-1">{item.khmer}</p>
                                        <p className="text-sm text-gray-600 mb-1">{item.transliteration}</p>
                                        <p className="text-gray-900 font-medium">{item.english}</p>
                                    </div>
                                    <button
                                        onClick={() => toggleFavorite(item.khmer)}
                                        className={`p-2 rounded-full transition-colors ${favorites.has(item.khmer)
                                            ? 'text-red-500 bg-red-50'
                                            : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                                            }`}
                                    >
                                        <Heart className={`w-5 h-5 ${favorites.has(item.khmer) ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                                {item.example && (
                                    <div className="bg-gray-50 rounded-lg p-3 mt-3">
                                        <p className="text-sm font-khmer text-gray-700">{item.example}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Practice Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Practice Transitions</h3>
                        <p className="text-gray-600">Test your understanding of Khmer transition words and connectors</p>
                    </div>

                    {!showPractice && !showResults && (
                        <div className="text-center">
                            <button
                                onClick={startPractice}
                                className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2"
                            >
                                <Play className="w-5 h-5" />
                                Start Practice
                            </button>
                        </div>
                    )}

                    {showPractice && !showResults && (
                        <div className="max-w-2xl mx-auto">
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {practiceQuestions.length}</span>
                                    <span className="text-sm text-gray-600">Score: {score}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-red-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentQuestion + 1) / practiceQuestions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                    {practiceQuestions[currentQuestion].question}
                                </h4>
                                <div className="space-y-3">
                                    {practiceQuestions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(index)}
                                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${selectedAnswer === index
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={handleNextQuestion}
                                    disabled={selectedAnswer === null}
                                    className={`px-6 py-2 rounded-lg font-medium transition-all ${selectedAnswer === null
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white'
                                        }`}
                                >
                                    {currentQuestion + 1 === practiceQuestions.length ? 'Finish' : 'Next Question'}
                                </button>
                            </div>
                        </div>
                    )}

                    {showResults && (
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="mb-6">
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Practice Complete!</h4>
                                <p className="text-gray-600 mb-4">You scored {score} out of {practiceQuestions.length}</p>
                                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                                    <div
                                        className="bg-gradient-to-r from-red-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercentage}%` }}
                                    ></div>
                                </div>
                                <p className="text-lg font-semibold text-gray-900">{progressPercentage}%</p>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={resetPractice}
                                    className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-medium transition-all"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Progress Stats */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Your Progress</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-500 mb-2">{filteredVocabulary.length}</div>
                            <p className="text-gray-600">Transition Words</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-500 mb-2">{favorites.size}</div>
                            <p className="text-gray-600">Favorites</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-500 mb-2">{progressPercentage}%</div>
                            <p className="text-gray-600">Practice Score</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransitionsPage; 