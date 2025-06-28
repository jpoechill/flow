'use client';

import React, { useState } from 'react';
import { Play, Volume2, Search, BookOpen, CheckCircle, X, Star, Award, ArrowLeft, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

const FamilyLesson = () => {
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
            title: 'Immediate Family',
            category: 'immediate',
            description: 'Learn the most important family members in Khmer. These are the people you interact with daily.',
            icon: <Users className="w-5 h-5" />,
            color: 'bg-blue-50 border-blue-200 text-blue-800',
            entries: [
                { khmer: 'ម្តាយ', english: 'Mother', pronunciation: 'mdaay', difficulty: 'easy', example: 'ម្តាយ (mdaay) - Mother' },
                { khmer: 'ឪពុក', english: 'Father', pronunciation: 'oupuk', difficulty: 'easy', example: 'ឪពុក (oupuk) - Father' },
                { khmer: 'កូនប្រុស', english: 'Son', pronunciation: 'kon pros', difficulty: 'medium', example: 'កូនប្រុស (kon pros) - Son' },
                { khmer: 'កូនស្រី', english: 'Daughter', pronunciation: 'kon srei', difficulty: 'medium', example: 'កូនស្រី (kon srei) - Daughter' },
                { khmer: 'បងប្រុស', english: 'Older brother', pronunciation: 'bang pros', difficulty: 'medium', example: 'បងប្រុស (bang pros) - Older brother' },
                { khmer: 'បងស្រី', english: 'Older sister', pronunciation: 'bang srei', difficulty: 'medium', example: 'បងស្រី (bang srei) - Older sister' },
                { khmer: 'ប្អូនប្រុស', english: 'Younger brother', pronunciation: 'poun pros', difficulty: 'medium', example: 'ប្អូនប្រុស (poun pros) - Younger brother' },
                { khmer: 'ប្អូនស្រី', english: 'Younger sister', pronunciation: 'poun srei', difficulty: 'medium', example: 'ប្អូនស្រី (poun srei) - Younger sister' },
            ],
        },
        {
            title: 'Extended Family',
            category: 'extended',
            description: 'Learn about extended family members including grandparents, aunts, uncles, and cousins.',
            icon: <Users className="w-5 h-5" />,
            color: 'bg-green-50 border-green-200 text-green-800',
            entries: [
                { khmer: 'ជីដូន', english: 'Grandmother', pronunciation: 'ji doun', difficulty: 'easy', example: 'ជីដូន (ji doun) - Grandmother' },
                { khmer: 'ជីតា', english: 'Grandfather', pronunciation: 'ji ta', difficulty: 'easy', example: 'ជីតា (ji ta) - Grandfather' },
                { khmer: 'មីង', english: 'Aunt', pronunciation: 'ming', difficulty: 'easy', example: 'មីង (ming) - Aunt' },
                { khmer: 'ពូ', english: 'Uncle', pronunciation: 'pu', difficulty: 'easy', example: 'ពូ (pu) - Uncle' },
                { khmer: 'បងប្អូនជីដូនមួយ', english: 'Cousin', pronunciation: 'bang poun ji doun muoy', difficulty: 'hard', example: 'បងប្អូនជីដូនមួយ (bang poun ji doun muoy) - Cousin' },
                { khmer: 'ចៅ', english: 'Grandchild', pronunciation: 'chav', difficulty: 'easy', example: 'ចៅ (chav) - Grandchild' },
                { khmer: 'ចៅប្រុស', english: 'Grandson', pronunciation: 'chav pros', difficulty: 'medium', example: 'ចៅប្រុស (chav pros) - Grandson' },
                { khmer: 'ចៅស្រី', english: 'Granddaughter', pronunciation: 'chav srei', difficulty: 'medium', example: 'ចៅស្រី (chav srei) - Granddaughter' },
            ],
        },
        {
            title: 'Personal Pronouns',
            category: 'pronouns',
            description: 'Master Khmer personal pronouns. These are essential for proper communication and showing respect.',
            icon: <Users className="w-5 h-5" />,
            color: 'bg-purple-50 border-purple-200 text-purple-800',
            entries: [
                { khmer: 'ខ្ញុំ', english: 'I/Me', pronunciation: 'knyom', difficulty: 'easy', example: 'ខ្ញុំ (knyom) - I/Me' },
                { khmer: 'អ្នក', english: 'You (formal)', pronunciation: 'neak', difficulty: 'easy', example: 'អ្នក (neak) - You (formal)' },
                { khmer: 'គាត់', english: 'He/She/They', pronunciation: 'koat', difficulty: 'easy', example: 'គាត់ (koat) - He/She/They' },
                { khmer: 'យើង', english: 'We/Us', pronunciation: 'yung', difficulty: 'easy', example: 'យើង (yung) - We/Us' },
                { khmer: 'ពួកគេ', english: 'They/Them', pronunciation: 'puak ke', difficulty: 'medium', example: 'ពួកគេ (puak ke) - They/Them' },
                { khmer: 'អ្នកឯង', english: 'You (informal)', pronunciation: 'neak eng', difficulty: 'medium', example: 'អ្នកឯង (neak eng) - You (informal)' },
                { khmer: 'ខ្ញុំឯង', english: 'I/Me (emphatic)', pronunciation: 'knyom eng', difficulty: 'medium', example: 'ខ្ញុំឯង (knyom eng) - I/Me (emphatic)' },
                { khmer: 'ខ្លួន', english: 'Self', pronunciation: 'kluon', difficulty: 'medium', example: 'ខ្លួន (kluon) - Self' },
            ],
        },
        {
            title: 'Relationship Terms',
            category: 'relationships',
            description: 'Learn important relationship vocabulary for describing connections between people.',
            icon: <Users className="w-5 h-5" />,
            color: 'bg-orange-50 border-orange-200 text-orange-800',
            entries: [
                { khmer: 'មិត្តភក្តិ', english: 'Friend', pronunciation: 'mit phak', difficulty: 'medium', example: 'មិត្តភក្តិ (mit phak) - Friend' },
                { khmer: 'គូស្នេហ៍', english: 'Lover', pronunciation: 'ku sneh', difficulty: 'medium', example: 'គូស្នេហ៍ (ku sneh) - Lover' },
                { khmer: 'ប្តី', english: 'Husband', pronunciation: 'bdei', difficulty: 'easy', example: 'ប្តី (bdei) - Husband' },
                { khmer: 'ប្រពន្ធ', english: 'Wife', pronunciation: 'brapun', difficulty: 'medium', example: 'ប្រពន្ធ (brapun) - Wife' },
                { khmer: 'គ្រូ', english: 'Teacher', pronunciation: 'kru', difficulty: 'easy', example: 'គ្រូ (kru) - Teacher' },
                { khmer: 'និស្សិត', english: 'Student', pronunciation: 'nisit', difficulty: 'medium', example: 'និស្សិត (nisit) - Student' },
                { khmer: 'មិត្ត', english: 'Friend (short)', pronunciation: 'mit', difficulty: 'easy', example: 'មិត្ត (mit) - Friend' },
                { khmer: 'អ្នកជិតខាង', english: 'Neighbor', pronunciation: 'neak chit khang', difficulty: 'hard', example: 'អ្នកជិតខាង (neak chit khang) - Neighbor' },
            ],
        },
        {
            title: 'Family Conversations',
            category: 'conversations',
            description: 'Learn common phrases and sentences used when talking about family in Khmer.',
            icon: <Users className="w-5 h-5" />,
            color: 'bg-red-50 border-red-200 text-red-800',
            entries: [
                { khmer: 'តើអ្នកមានបងប្អូនប៉ុន្មាននាក់?', english: 'How many siblings do you have?', pronunciation: 'tae neak mean bang poun pon maan neak', difficulty: 'hard', example: 'តើអ្នកមានបងប្អូនប៉ុន្មាននាក់? (tae neak mean bang poun pon maan neak) - How many siblings?' },
                { khmer: 'គ្រួសាររបស់អ្នកមានប៉ុន្មាននាក់?', english: 'How many people are in your family?', pronunciation: 'kruosa robos neak mean pon maan neak', difficulty: 'hard', example: 'គ្រួសាររបស់អ្នកមានប៉ុន្មាននាក់? (tae neak mean bang poun pon maan neak) - How many in family?' },
                { khmer: 'ឪពុករបស់អ្នកធ្វើការអ្វី?', english: 'What does your father do?', pronunciation: 'oupuk robos neak tveu kar avei', difficulty: 'hard', example: 'ឪពុករបស់អ្នកធ្វើការអ្វី? (oupuk robos neak tveu kar avei) - What does father do?' },
                { khmer: 'ខ្ញុំស្រឡាញ់គ្រួសាររបស់ខ្ញុំ', english: 'I love my family', pronunciation: 'knyom sralanh kruosa robos knyom', difficulty: 'medium', example: 'ខ្ញុំស្រឡាញ់គ្រួសាររបស់ខ្ញុំ (knyom sralanh kruosa robos knyom) - I love my family' },
                { khmer: 'គ្រួសាររបស់ខ្ញុំធំ', english: 'My family is big', pronunciation: 'kruosa robos knyom thom', difficulty: 'medium', example: 'គ្រួសាររបស់ខ្ញុំធំ (kruosa robos knyom thom) - My family is big' },
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
        { id: 'all', name: 'All Family', icon: <Users className="w-4 h-4" /> },
        { id: 'immediate', name: 'Immediate Family', icon: <Users className="w-4 h-4" /> },
        { id: 'extended', name: 'Extended Family', icon: <Users className="w-4 h-4" /> },
        { id: 'pronouns', name: 'Personal Pronouns', icon: <Users className="w-4 h-4" /> },
        { id: 'relationships', name: 'Relationships', icon: <Users className="w-4 h-4" /> },
        { id: 'conversations', name: 'Family Conversations', icon: <Users className="w-4 h-4" /> },
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
                    <h1 className="text-4xl font-bold text-indigo-900 mb-4">👨‍👩‍👧‍👦 Family & People Words</h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Master family vocabulary and personal pronouns in Khmer. Learn how to talk about
                        relationships and describe people in your life.
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
                                placeholder="Search family members, pronouns, or examples..."
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
                                <p className="text-sm text-gray-600">Total Words</p>
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
                                        {section.entries.length} words
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
                        href="/lessons/beginner/polite"
                        className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous: Polite Phrases & Common Questions
                    </Link>
                    <Link
                        href="/lessons/beginner/actions"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        Next: Daily Verbs & Actions
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

export default FamilyLesson;
