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

const ComplexSentencesPage = () => {
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
            khmer: 'ខ្ញុំគិតថា',
            transliteration: 'khnhom kit tha',
            english: 'I think that',
            category: 'Basic',
            example: 'ខ្ញុំគិតថាការសិក្សាភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់',
            isFavorite: false
        },
        {
            khmer: 'ដែលជាការពិត',
            transliteration: 'del chea kar pit',
            english: 'which is true',
            category: 'Basic',
            example: 'ខ្ញុំគិតថាការសិក្សាភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់ ដែលជាការពិត',
            isFavorite: false
        },
        {
            khmer: 'ទោះបីជា',
            transliteration: 'toh bae chea',
            english: 'even though',
            category: 'Intermediate',
            example: 'ទោះបីជាខ្ញុំជាជនបរទេស ខ្ញុំក៏ចង់រៀនភាសាខ្មែរដែរ',
            isFavorite: false
        },
        {
            khmer: 'ដោយសារ',
            transliteration: 'doy sa',
            english: 'because of',
            category: 'Intermediate',
            example: 'ខ្ញុំមិនអាចមកបានដោយសារការងាររវល់',
            isFavorite: false
        },
        {
            khmer: 'ដូច្នេះ',
            transliteration: 'dauchneh',
            english: 'therefore',
            category: 'Intermediate',
            example: 'ខ្ញុំចង់រៀនភាសាខ្មែរ ដូច្នេះខ្ញុំត្រូវអនុវត្តជាប្រចាំ',
            isFavorite: false
        },
        {
            khmer: 'ដែលនៅក្នុង',
            transliteration: 'del nov knong',
            english: 'which is in',
            category: 'Advanced',
            example: 'ខ្ញុំចង់ទៅកាន់ប្រទេសដែលនៅក្នុងអាស៊ីអាគ្នេយ៍',
            isFavorite: false
        },
        {
            khmer: 'ដែលធ្វើឱ្យ',
            transliteration: 'del thveu aoy',
            english: 'which makes',
            category: 'Advanced',
            example: 'ការសិក្សាជាប្រចាំដែលធ្វើឱ្យខ្ញុំកាន់តែចេះភាសាខ្មែរ',
            isFavorite: false
        },
        {
            khmer: 'ដែលជាការពិតណាស់',
            transliteration: 'del chea kar pit nas',
            english: 'which is absolutely true',
            category: 'Advanced',
            example: 'ការរៀនភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់ ដែលជាការពិតណាស់',
            isFavorite: false
        },
        {
            khmer: 'ដែលជាការពិតណាស់ដែល',
            transliteration: 'del chea kar pit nas del',
            english: 'which is absolutely true that',
            category: 'Advanced',
            example: 'ការរៀនភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់ ដែលជាការពិតណាស់ដែលយើងត្រូវធ្វើ',
            isFavorite: false
        },
        {
            khmer: 'ដែលជាការពិតណាស់ដែលយើងត្រូវធ្វើ',
            transliteration: 'del chea kar pit nas del yeung trouv thveu',
            english: 'which is absolutely true that we must do',
            category: 'Advanced',
            example: 'ការរៀនភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់ ដែលជាការពិតណាស់ដែលយើងត្រូវធ្វើ',
            isFavorite: false
        }
    ];

    const practiceQuestions: PracticeQuestion[] = [
        {
            question: 'How do you say "I think that" in Khmer?',
            options: ['ខ្ញុំគិតថា', 'ខ្ញុំជឿថា', 'ខ្ញុំដឹងថា', 'ខ្ញុំឃើញថា'],
            correctAnswer: 0,
            explanation: 'ខ្ញុំគិតថា (khnhom kit tha) means "I think that" and is used to introduce opinions or thoughts.'
        },
        {
            question: 'What does "ទោះបីជា" mean?',
            options: ['Because', 'However', 'Even though', 'Therefore'],
            correctAnswer: 2,
            explanation: 'ទោះបីជា (toh bae chea) means "even though" and is used to show contrast.'
        },
        {
            question: 'Which phrase means "therefore" in Khmer?',
            options: ['ដោយសារ', 'ដូច្នេះ', 'ទោះបីជា', 'ដែលជាការពិត'],
            correctAnswer: 1,
            explanation: 'ដូច្នេះ (dauchneh) means "therefore" and is used to show consequence.'
        },
        {
            question: 'What is the correct way to say "because of" in Khmer?',
            options: ['ដោយសារ', 'ដែលជាការពិត', 'ទោះបីជា', 'ដូច្នេះ'],
            correctAnswer: 0,
            explanation: 'ដោយសារ (doy sa) means "because of" and is used to explain reasons.'
        },
        {
            question: 'How do you say "which makes" in Khmer?',
            options: ['ដែលធ្វើឱ្យ', 'ដែលជាការពិត', 'ដែលនៅក្នុង', 'ដែលជាការពិតណាស់'],
            correctAnswer: 0,
            explanation: 'ដែលធ្វើឱ្យ (del thveu aoy) means "which makes" and is used to show cause and effect.'
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
                            🏗️ Complex Sentence Structures
                        </h1>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                            Master advanced Khmer grammar patterns and build fluency with compound and complex sentences.
                            Learn to express sophisticated thoughts and ideas with proper structure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <BookOpen className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Sections</p>
                            <p className="text-lg font-bold text-gray-900">4</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="text-lg font-bold text-gray-900">45 min</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Difficulty</p>
                            <p className="text-lg font-bold text-gray-900">Advanced</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <Star className="w-6 h-6 text-red-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">XP Reward</p>
                            <p className="text-lg font-bold text-gray-900">50</p>
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
                        href="/lessons/advanced/transitions"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Next: Transitions
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
                                placeholder="Search vocabulary, phrases, or concepts..."
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
                    {/* Basic Structures */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            Basic Structures
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

                    {/* Intermediate Structures */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            Intermediate Structures
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

                {/* Advanced Structures */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        Advanced Structures
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Practice Complex Sentences</h3>
                        <p className="text-gray-600">Test your understanding of advanced Khmer sentence structures</p>
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
                            <p className="text-gray-600">Vocabulary Items</p>
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

export default ComplexSentencesPage;
