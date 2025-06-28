'use client';

import React, { useState } from 'react';
import { Play, Volume2, Search, BookOpen, CheckCircle, X, Star, Award, ArrowLeft, ArrowRight, Type } from 'lucide-react';
import Link from 'next/link';

const VowelsLesson = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [practiceMode, setPracticeMode] = useState(false);
    const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [completedItems, setCompletedItems] = useState(new Set());
    const [favorites, setFavorites] = useState(new Set());
    const [audioPlaying, setAudioPlaying] = useState<string | null>(null);

    const sections = [
        {
            title: 'Basic Independent Vowels',
            category: 'basic',
            description: 'Learn the fundamental independent vowel characters in Khmer. These vowels can stand alone without consonants.',
            icon: <Type className="w-5 h-5" />,
            color: 'bg-blue-50 border-blue-200 text-blue-800',
            entries: [
                { khmer: 'អ', english: 'a (ah)', pronunciation: 'a', difficulty: 'easy', example: 'អ (a) - a sound' },
                { khmer: 'អា', english: 'aa (long a)', pronunciation: 'aa', difficulty: 'easy', example: 'អា (aa) - long a sound' },
                { khmer: 'អិ', english: 'i (short i)', pronunciation: 'i', difficulty: 'easy', example: 'អិ (i) - short i sound' },
                { khmer: 'អី', english: 'ii (long i)', pronunciation: 'ii', difficulty: 'easy', example: 'អី (ii) - long i sound' },
                { khmer: 'អុ', english: 'u (short u)', pronunciation: 'u', difficulty: 'easy', example: 'អុ (u) - short u sound' },
                { khmer: 'អូ', english: 'uu (long u)', pronunciation: 'uu', difficulty: 'easy', example: 'អូ (uu) - long u sound' },
                { khmer: 'អេ', english: 'e (ay)', pronunciation: 'e', difficulty: 'easy', example: 'អេ (e) - e sound' },
                { khmer: 'អែ', english: 'ae (air)', pronunciation: 'ae', difficulty: 'medium', example: 'អែ (ae) - ae sound' },
            ],
        },
        {
            title: 'Complex Independent Vowels',
            category: 'complex',
            description: 'Master more complex independent vowel combinations and their unique sounds.',
            icon: <Type className="w-5 h-5" />,
            color: 'bg-green-50 border-green-200 text-green-800',
            entries: [
                { khmer: 'អៃ', english: 'ai (eye)', pronunciation: 'ai', difficulty: 'medium', example: 'អៃ (ai) - ai sound' },
                { khmer: 'អោ', english: 'ao (ow)', pronunciation: 'ao', difficulty: 'medium', example: 'អោ (ao) - ao sound' },
                { khmer: 'អៅ', english: 'au (ow)', pronunciation: 'au', difficulty: 'medium', example: 'អៅ (au) - au sound' },
                { khmer: 'អុំ', english: 'om (ohm)', pronunciation: 'om', difficulty: 'medium', example: 'អុំ (om) - om sound' },
                { khmer: 'អំ', english: 'am (ahm)', pronunciation: 'am', difficulty: 'medium', example: 'អំ (am) - am sound' },
                { khmer: 'អាំ', english: 'aam (ahm)', pronunciation: 'aam', difficulty: 'medium', example: 'អាំ (aam) - aam sound' },
                { khmer: 'អះ', english: 'ah (ah)', pronunciation: 'ah', difficulty: 'medium', example: 'អះ (ah) - ah sound' },
                { khmer: 'អិះ', english: 'ih (ih)', pronunciation: 'ih', difficulty: 'medium', example: 'អិះ (ih) - ih sound' },
            ],
        },
        {
            title: 'Vowel Combinations',
            category: 'combinations',
            description: 'Learn how independent vowels combine with consonants and other vowels to form different sounds.',
            icon: <Type className="w-5 h-5" />,
            color: 'bg-purple-50 border-purple-200 text-purple-800',
            entries: [
                { khmer: 'ក + អា', english: 'ka + aa = kaa', pronunciation: 'kaa', difficulty: 'medium', example: 'ក + អា = កា (kaa) - kaa sound' },
                { khmer: 'ខ + អិ', english: 'kha + i = khi', pronunciation: 'khi', difficulty: 'medium', example: 'ខ + អិ = ខិ (khi) - khi sound' },
                { khmer: 'គ + អី', english: 'ko + ii = kii', pronunciation: 'kii', difficulty: 'medium', example: 'គ + អី = គី (kii) - kii sound' },
                { khmer: 'ឃ + អុ', english: 'kho + u = khu', pronunciation: 'khu', difficulty: 'medium', example: 'ឃ + អុ = ឃុ (khu) - khu sound' },
                { khmer: 'ង + អូ', english: 'ngo + uu = nguu', pronunciation: 'nguu', difficulty: 'medium', example: 'ង + អូ = ងូ (nguu) - nguu sound' },
                { khmer: 'ច + អេ', english: 'cho + e = che', pronunciation: 'che', difficulty: 'medium', example: 'ច + អេ = ចេ (che) - che sound' },
                { khmer: 'ឆ + អែ', english: 'chho + ae = chhae', pronunciation: 'chhae', difficulty: 'hard', example: 'ឆ + អែ = ឆែ (chhae) - chhae sound' },
                { khmer: 'ជ + អៃ', english: 'jo + ai = jai', pronunciation: 'jai', difficulty: 'hard', example: 'ជ + អៃ = ជៃ (jai) - jai sound' },
            ],
        },
        {
            title: 'Common Words with Independent Vowels',
            category: 'words',
            description: 'Learn common Khmer words that use independent vowels to understand their practical usage.',
            icon: <Type className="w-5 h-5" />,
            color: 'bg-orange-50 border-orange-200 text-orange-800',
            entries: [
                { khmer: 'អាយុ', english: 'Age', pronunciation: 'ayuk', difficulty: 'medium', example: 'អាយុ (ayuk) - Age' },
                { khmer: 'អាយុជាង', english: 'Elder', pronunciation: 'ayuk cheang', difficulty: 'hard', example: 'អាយុជាង (ayuk cheang) - Elder' },
                { khmer: 'អាយុតិច', english: 'Young', pronunciation: 'ayuk tech', difficulty: 'medium', example: 'អាយុតិច (ayuk tech) - Young' },
                { khmer: 'អាយុចាស់', english: 'Old', pronunciation: 'ayuk chas', difficulty: 'medium', example: 'អាយុចាស់ (ayuk chas) - Old' },
                { khmer: 'អាយុកាល', english: 'Lifetime', pronunciation: 'ayuk kal', difficulty: 'hard', example: 'អាយុកាល (ayuk kal) - Lifetime' },
                { khmer: 'អាយុជីវិត', english: 'Life span', pronunciation: 'ayuk jivit', difficulty: 'hard', example: 'អាយុជីវិត (ayuk jivit) - Life span' },
                { khmer: 'អាយុវ័យ', english: 'Age group', pronunciation: 'ayuk vey', difficulty: 'hard', example: 'អាយុវ័យ (ayuk vey) - Age group' },
                { khmer: 'អាយុគ្រាម', english: 'Age period', pronunciation: 'ayuk kream', difficulty: 'hard', example: 'អាយុគ្រាម (ayuk kream) - Age period' },
            ],
        },
        {
            title: 'Pronunciation Rules',
            category: 'rules',
            description: 'Learn the rules and patterns for pronouncing independent vowels correctly in Khmer.',
            icon: <Type className="w-5 h-5" />,
            color: 'bg-red-50 border-red-200 text-red-800',
            entries: [
                { khmer: 'អ + អា = អា', english: 'a + aa = aa (long a)', pronunciation: 'aa', difficulty: 'easy', example: 'អ + អា = អា (aa) - long a sound' },
                { khmer: 'អ + អិ = អិ', english: 'a + i = i (short i)', pronunciation: 'i', difficulty: 'easy', example: 'អ + អិ = អិ (i) - short i sound' },
                { khmer: 'អ + អី = អី', english: 'a + ii = ii (long i)', pronunciation: 'ii', difficulty: 'easy', example: 'អ + អី = អី (ii) - long i sound' },
                { khmer: 'អ + អុ = អុ', english: 'a + u = u (short u)', pronunciation: 'u', difficulty: 'easy', example: 'អ + អុ = អុ (u) - short u sound' },
                { khmer: 'អ + អូ = អូ', english: 'a + uu = uu (long u)', pronunciation: 'uu', difficulty: 'easy', example: 'អ + អូ = អូ (uu) - long u sound' },
                { khmer: 'អ + អេ = អេ', english: 'a + e = e (ay)', pronunciation: 'e', difficulty: 'easy', example: 'អ + អេ = អេ (e) - e sound' },
                { khmer: 'អ + អែ = អែ', english: 'a + ae = ae (air)', pronunciation: 'ae', difficulty: 'medium', example: 'អ + អែ = អែ (ae) - ae sound' },
                { khmer: 'អ + អៃ = អៃ', english: 'a + ai = ai (eye)', pronunciation: 'ai', difficulty: 'medium', example: 'អ + អៃ = អៃ (ai) - ai sound' },
            ],
        },
    ];

    // Flatten all entries for practice mode
    const allEntries = sections.flatMap(section =>
        section.entries.map(entry => ({ ...entry, category: section.category, sectionTitle: section.title }))
    );

    // Filter entries based on search and category
    const filteredSections = sections.map(section => ({
        ...section,
        entries: section.entries.filter(entry => {
            const matchesSearch = searchTerm === '' ||
                entry.khmer.includes(searchTerm) ||
                entry.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.pronunciation.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
    })).filter(section => section.entries.length > 0);

    const categories = [
        { id: 'all', name: 'All Vowels', icon: <Type className="w-4 h-4" /> },
        { id: 'basic', name: 'Basic Vowels', icon: <Type className="w-4 h-4" /> },
        { id: 'complex', name: 'Complex Vowels', icon: <Type className="w-4 h-4" /> },
        { id: 'combinations', name: 'Vowel Combinations', icon: <Type className="w-4 h-4" /> },
        { id: 'words', name: 'Common Words', icon: <Type className="w-4 h-4" /> },
        { id: 'rules', name: 'Pronunciation Rules', icon: <Type className="w-4 h-4" /> },
    ];

    const simulateAudio = (text: string) => {
        setAudioPlaying(text);
        setTimeout(() => setAudioPlaying(null), 1500);
    };

    const startPractice = () => {
        setPracticeMode(true);
        setCurrentPracticeIndex(0);
        setShowAnswer(false);
        setUserAnswer('');
        setScore({ correct: 0, total: 0 });
    };

    const generateMultipleChoiceOptions = (correctAnswer: string) => {
        const otherEntries = allEntries.filter(entry => entry.english !== correctAnswer);
        const wrongAnswers = [];
        const shuffledOthers = [...otherEntries].sort(() => Math.random() - 0.5);

        for (let i = 0; i < Math.min(3, shuffledOthers.length); i++) {
            wrongAnswers.push(shuffledOthers[i].english);
        }

        const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
        return allOptions;
    };

    const checkAnswer = (selectedAnswer: string) => {
        const currentEntry = allEntries[currentPracticeIndex];
        const isCorrect = selectedAnswer === currentEntry.english;

        setUserAnswer(selectedAnswer);
        setScore(prev => ({
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1
        }));

        if (isCorrect) {
            setCompletedItems(prev => new Set([...prev, currentEntry.khmer]));
        }

        setShowAnswer(true);
    };

    const nextQuestion = () => {
        if (currentPracticeIndex < allEntries.length - 1) {
            setCurrentPracticeIndex(prev => prev + 1);
            setShowAnswer(false);
            setUserAnswer('');
        } else {
            setPracticeMode(false);
        }
    };

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

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-green-100 text-green-800';
            case 'medium': return 'bg-yellow-100 text-yellow-800';
            case 'hard': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (practiceMode) {
        const currentEntry = allEntries[currentPracticeIndex];
        const progressPercentage = ((currentPracticeIndex + 1) / allEntries.length) * 100;

        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Progress Bar */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600">
                                    Question {currentPracticeIndex + 1} of {allEntries.length}
                                </span>
                                <span className="text-sm font-medium text-indigo-600">
                                    Score: {score.correct}/{score.total}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question */}
                        <div className="text-center mb-8">
                            <div className="mb-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentEntry.difficulty)}`}>
                                    {currentEntry.difficulty}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">{currentEntry.sectionTitle}</span>
                            </div>

                            <h2 className="text-3xl font-bold text-indigo-900 mb-4">{currentEntry.khmer}</h2>

                            <button
                                onClick={() => simulateAudio(currentEntry.pronunciation)}
                                className="inline-flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-lg transition-colors"
                            >
                                <Volume2 className={`w-4 h-4 ${audioPlaying === currentEntry.pronunciation ? 'animate-pulse' : ''}`} />
                                {currentEntry.pronunciation}
                            </button>
                        </div>

                        {/* Multiple Choice Options */}
                        {!showAnswer ? (
                            <div className="space-y-3">
                                <p className="text-center text-gray-600 mb-4">Select the correct English translation:</p>
                                {generateMultipleChoiceOptions(currentEntry.english).map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => checkAnswer(option)}
                                        className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-lg font-medium"
                                    >
                                        <span className="inline-block w-8 h-8 bg-gray-200 rounded-full text-center leading-8 text-sm font-bold mr-3">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <p className="text-center text-gray-600 mb-4">Your answer:</p>
                                    {generateMultipleChoiceOptions(currentEntry.english).map((option, index) => {
                                        const isSelected = option === userAnswer;
                                        const isCorrect = option === currentEntry.english;

                                        let buttonClass = "w-full p-4 text-left border-2 rounded-lg text-lg font-medium transition-all ";

                                        if (isSelected && isCorrect) {
                                            buttonClass += "border-green-500 bg-green-50 text-green-800";
                                        } else if (isSelected && !isCorrect) {
                                            buttonClass += "border-red-500 bg-red-50 text-red-800";
                                        } else if (!isSelected && isCorrect) {
                                            buttonClass += "border-green-500 bg-green-100 text-green-800";
                                        } else {
                                            buttonClass += "border-gray-300 bg-gray-50 text-gray-600";
                                        }

                                        return (
                                            <div key={index} className={buttonClass}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <span className={`inline-block w-8 h-8 rounded-full text-center leading-8 text-sm font-bold mr-3 ${isSelected && isCorrect ? 'bg-green-200' :
                                                            isSelected && !isCorrect ? 'bg-red-200' :
                                                                !isSelected && isCorrect ? 'bg-green-200' :
                                                                    'bg-gray-200'
                                                            }`}>
                                                            {String.fromCharCode(65 + index)}
                                                        </span>
                                                        {option}
                                                    </div>
                                                    {isSelected && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                                                    {isSelected && !isCorrect && <X className="w-6 h-6 text-red-600" />}
                                                    {!isSelected && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className={`p-4 rounded-lg text-center ${userAnswer === currentEntry.english ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        {userAnswer === currentEntry.english ? (
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        ) : (
                                            <X className="w-6 h-6 text-red-600" />
                                        )}
                                        <span className={`font-bold text-lg ${userAnswer === currentEntry.english ? 'text-green-800' : 'text-red-800'}`}>
                                            {userAnswer === currentEntry.english ? 'Correct!' : 'Incorrect'}
                                        </span>
                                    </div>
                                    {userAnswer !== currentEntry.english && (
                                        <p className="text-gray-700">
                                            The correct answer is: <span className="text-green-600 font-semibold">{currentEntry.english}</span>
                                        </p>
                                    )}
                                    <p className="text-sm text-gray-600 mt-2">Example: {currentEntry.example}</p>
                                </div>
                                <button
                                    onClick={nextQuestion}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors"
                                >
                                    {currentPracticeIndex < allEntries.length - 1 ? 'Next Question' : 'Finish Practice'}
                                </button>
                            </div>
                        )}

                        {/* Exit Practice */}
                        <button
                            onClick={() => setPracticeMode(false)}
                            className="mt-6 w-full text-gray-600 hover:text-gray-800 py-2 transition-colors"
                        >
                            Exit Practice Mode
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="">
            <div className="max-w-8xl mx-auto px-4">
                {/* Navigation */}
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/lessons/beginner" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Beginner Lessons
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-bold">Beginner</div>
                        <span className="text-xs text-gray-600">Foundation Level</span>
                    </div>
                    <h1 className="text-4xl font-bold text-indigo-900 mb-4">🔤 Independent Vowels</h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Master stand-alone vowel characters in Khmer. Learn proper pronunciation and how
                        these vowels combine with consonants to form complete syllables.
                    </p>
                </div>

                {/* Controls */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search vowels, sounds, or examples..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>

                        {/* Practice Button */}
                        <button
                            onClick={startPractice}
                            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                        >
                            <Play className="w-5 h-5" />
                            Start Practice
                        </button>
                    </div>
                </div>

                {/* Progress Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-3 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Learned</p>
                                <p className="text-2xl font-bold text-gray-900">{completedItems.size}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <Star className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Favorites</p>
                                <p className="text-2xl font-bold text-gray-900">{favorites.size}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <BookOpen className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total Vowels</p>
                                <p className="text-2xl font-bold text-gray-900">{allEntries.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <Award className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Progress</p>
                                <p className="text-2xl font-bold text-gray-900">{Math.round((completedItems.size / allEntries.length) * 100)}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {filteredSections.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className={`p-6 ${section.color.replace('border-', 'bg-').replace('text-', '').replace('bg-', 'bg-gradient-to-r from-').replace('-50', '-100 to-').replace('-200', '-50')}`}>
                                <div className="flex items-center gap-3 mb-3">
                                    {section.icon}
                                    <h2 className="text-xl font-bold">{section.title}</h2>
                                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                                        {section.entries.length} vowels
                                    </span>
                                </div>
                                <p className="text-sm opacity-90 leading-relaxed">{section.description}</p>
                            </div>

                            <div className="p-6">
                                <div className="grid gap-4">
                                    {section.entries.map((entry, i) => (
                                        <div key={i} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(entry.difficulty)}`}>
                                                        {entry.difficulty}
                                                    </span>
                                                    {completedItems.has(entry.khmer) && (
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => toggleFavorite(entry.khmer)}
                                                    className={`p-1 rounded-full transition-colors ${favorites.has(entry.khmer) ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                                >
                                                    <Star className={`w-4 h-4 ${favorites.has(entry.khmer) ? 'fill-current' : ''}`} />
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                                <div className="text-center">
                                                    <p className="text-2xl font-bold text-indigo-900 mb-1">{entry.khmer}</p>
                                                    <p className="text-lg text-gray-800">{entry.english}</p>
                                                </div>

                                                <div className="text-center">
                                                    <button
                                                        onClick={() => simulateAudio(entry.pronunciation)}
                                                        className="inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg transition-colors"
                                                    >
                                                        <Volume2 className={`w-4 h-4 ${audioPlaying === entry.pronunciation ? 'animate-pulse' : ''}`} />
                                                        <span className="font-mono text-sm">{entry.pronunciation}</span>
                                                    </button>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-sm text-gray-600 mb-1">Example:</p>
                                                    <p className="text-sm font-medium">{entry.example}</p>
                                                </div>

                                                <div className="flex justify-end">
                                                    <button
                                                        onClick={() => setCompletedItems(prev => new Set([...prev, entry.khmer]))}
                                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${completedItems.has(entry.khmer)
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                                            }`}
                                                    >
                                                        {completedItems.has(entry.khmer) ? 'Learned' : 'Mark as Learned'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation to next lesson */}
                <div className="flex justify-between items-center mt-12">
                    <Link
                        href="/lessons/beginner/alphabet"
                        className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous: Khmer Alphabet (Consonants)
                    </Link>
                    <Link
                        href="/lessons/beginner/greetings"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        Next: Greetings & Introductions
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
                        <p className="text-green-100 mb-6">Test your knowledge with our interactive quiz system</p>
                        <button
                            onClick={startPractice}
                            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                        >
                            <Play className="w-5 h-5" />
                            Start Practice Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VowelsLesson; 