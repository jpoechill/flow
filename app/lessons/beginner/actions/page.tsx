'use client';

import React, { useState } from 'react';
import { Play, Volume2, Search, BookOpen, CheckCircle, X, Star, Award, ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

const ActionsLesson = () => {
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
            title: 'Basic Movement Verbs',
            category: 'movement',
            description: 'Learn essential verbs for movement and travel. These are used frequently in daily conversation.',
            icon: <Zap className="w-5 h-5" />,
            color: 'bg-blue-50 border-blue-200 text-blue-800',
            entries: [
                { khmer: 'ទៅ', english: 'to go', pronunciation: 'tov', difficulty: 'easy', example: 'ទៅ (tov) - to go' },
                { khmer: 'មក', english: 'to come', pronunciation: 'mok', difficulty: 'easy', example: 'មក (mok) - to come' },
                { khmer: 'ដើរ', english: 'to walk', pronunciation: 'dae', difficulty: 'easy', example: 'ដើរ (dae) - to walk' },
                { khmer: 'រត់', english: 'to run', pronunciation: 'rot', difficulty: 'easy', example: 'រត់ (rot) - to run' },
                { khmer: 'អង្គុយ', english: 'to sit', pronunciation: 'angkul', difficulty: 'medium', example: 'អង្គុយ (angkul) - to sit' },
                { khmer: 'ឈរ', english: 'to stand', pronunciation: 'chor', difficulty: 'easy', example: 'ឈរ (chor) - to stand' },
                { khmer: 'ដេក', english: 'to sleep/lie down', pronunciation: 'dek', difficulty: 'easy', example: 'ដេក (dek) - to sleep' },
                { khmer: 'ក្រោក', english: 'to wake up', pronunciation: 'kraok', difficulty: 'medium', example: 'ក្រោក (kraok) - to wake up' },
            ],
        },
        {
            title: 'Daily Activities',
            category: 'daily',
            description: 'Master verbs for common daily activities and routines. Essential for describing your day.',
            icon: <Zap className="w-5 h-5" />,
            color: 'bg-green-50 border-green-200 text-green-800',
            entries: [
                { khmer: 'ញុាំ', english: 'to eat', pronunciation: 'nyam', difficulty: 'easy', example: 'ញុាំ (nyam) - to eat' },
                { khmer: 'ផឹក', english: 'to drink', pronunciation: 'pheuk', difficulty: 'easy', example: 'ផឹក (pheuk) - to drink' },
                { khmer: 'រៀន', english: 'to study/learn', pronunciation: 'rien', difficulty: 'easy', example: 'រៀន (rien) - to study' },
                { khmer: 'ធ្វើការ', english: 'to work', pronunciation: 'tveu kar', difficulty: 'medium', example: 'ធ្វើការ (tveu kar) - to work' },
                { khmer: 'លេង', english: 'to play', pronunciation: 'leng', difficulty: 'easy', example: 'លេង (leng) - to play' },
                { khmer: 'មើល', english: 'to look/watch', pronunciation: 'meul', difficulty: 'easy', example: 'មើល (meul) - to look' },
                { khmer: 'ស្តាប់', english: 'to listen', pronunciation: 'sdap', difficulty: 'medium', example: 'ស្តាប់ (sdap) - to listen' },
                { khmer: 'និយាយ', english: 'to speak', pronunciation: 'niyeay', difficulty: 'medium', example: 'និយាយ (niyeay) - to speak' },
            ],
        },
        {
            title: 'Personal Care',
            category: 'care',
            description: 'Learn verbs related to personal hygiene and self-care activities.',
            icon: <Zap className="w-5 h-5" />,
            color: 'bg-purple-50 border-purple-200 text-purple-800',
            entries: [
                { khmer: 'ងូតទឹក', english: 'to take a shower', pronunciation: 'ngut tek', difficulty: 'medium', example: 'ងូតទឹក (ngut tek) - to shower' },
                { khmer: 'ដុសធ្មេញ', english: 'to brush teeth', pronunciation: 'dos thmen', difficulty: 'medium', example: 'ដុសធ្មេញ (dos thmen) - to brush teeth' },
                { khmer: 'កោរ', english: 'to shave', pronunciation: 'kao', difficulty: 'easy', example: 'កោរ (kao) - to shave' },
                { khmer: 'ដាក់សំលៀកបំពាក់', english: 'to get dressed', pronunciation: 'dak samleak bampeak', difficulty: 'hard', example: 'ដាក់សំលៀកបំពាក់ (dak samleak bampeak) - to dress' },
                { khmer: 'ដុសដៃ', english: 'to wash hands', pronunciation: 'dos dai', difficulty: 'medium', example: 'ដុសដៃ (dos dai) - to wash hands' },
                { khmer: 'ដុសមុខ', english: 'to wash face', pronunciation: 'dos muk', difficulty: 'medium', example: 'ដុសមុខ (dos muk) - to wash face' },
                { khmer: 'ដេក', english: 'to sleep', pronunciation: 'dek', difficulty: 'easy', example: 'ដេក (dek) - to sleep' },
                { khmer: 'ក្រោក', english: 'to wake up', pronunciation: 'kraok', difficulty: 'medium', example: 'ក្រោក (kraok) - to wake up' },
            ],
        },
        {
            title: 'Household Activities',
            category: 'household',
            description: 'Learn verbs for common household chores and domestic activities.',
            icon: <Zap className="w-5 h-5" />,
            color: 'bg-orange-50 border-orange-200 text-orange-800',
            entries: [
                { khmer: 'ដុស', english: 'to wash/clean', pronunciation: 'dos', difficulty: 'easy', example: 'ដុស (dos) - to wash' },
                { khmer: 'ជូត', english: 'to wipe', pronunciation: 'jut', difficulty: 'easy', example: 'ជូត (jut) - to wipe' },
                { khmer: 'បោស', english: 'to sweep', pronunciation: 'baos', difficulty: 'easy', example: 'បោស (baos) - to sweep' },
                { khmer: 'ដាំបាយ', english: 'to cook rice', pronunciation: 'dam bai', difficulty: 'medium', example: 'ដាំបាយ (dam bai) - to cook rice' },
                { khmer: 'ដាំអាហារ', english: 'to cook food', pronunciation: 'dam ahar', difficulty: 'medium', example: 'ដាំអាហារ (dam ahar) - to cook food' },
                { khmer: 'លាងចាន', english: 'to wash dishes', pronunciation: 'leang chan', difficulty: 'medium', example: 'លាងចាន (leang chan) - to wash dishes' },
                { khmer: 'ដាក់', english: 'to put/place', pronunciation: 'dak', difficulty: 'easy', example: 'ដាក់ (dak) - to put' },
                { khmer: 'យក', english: 'to take/get', pronunciation: 'yok', difficulty: 'easy', example: 'យក (yok) - to take' },
            ],
        },
        {
            title: 'Communication & Social',
            category: 'social',
            description: 'Master verbs for communication, social interaction, and expressing emotions.',
            icon: <Zap className="w-5 h-5" />,
            color: 'bg-red-50 border-red-200 text-red-800',
            entries: [
                { khmer: 'និយាយ', english: 'to speak', pronunciation: 'niyeay', difficulty: 'medium', example: 'និយាយ (niyeay) - to speak' },
                { khmer: 'ស្តាប់', english: 'to listen', pronunciation: 'sdap', difficulty: 'medium', example: 'ស្តាប់ (sdap) - to listen' },
                { khmer: 'សើច', english: 'to laugh', pronunciation: 'sauch', difficulty: 'easy', example: 'សើច (sauch) - to laugh' },
                { khmer: 'យំ', english: 'to cry', pronunciation: 'yum', difficulty: 'easy', example: 'យំ (yum) - to cry' },
                { khmer: 'ចូលចិត្ត', english: 'to like', pronunciation: 'chol chet', difficulty: 'medium', example: 'ចូលចិត្ត (chol chet) - to like' },
                { khmer: 'ស្រឡាញ់', english: 'to love', pronunciation: 'sralanh', difficulty: 'medium', example: 'ស្រឡាញ់ (sralanh) - to love' },
                { khmer: 'ខឹង', english: 'to be angry', pronunciation: 'kheng', difficulty: 'easy', example: 'ខឹង (kheng) - to be angry' },
                { khmer: 'រីករាយ', english: 'to be happy', pronunciation: 'rik ray', difficulty: 'medium', example: 'រីករាយ (rik ray) - to be happy' },
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
        { id: 'all', name: 'All Actions', icon: <Zap className="w-4 h-4" /> },
        { id: 'movement', name: 'Movement', icon: <Zap className="w-4 h-4" /> },
        { id: 'daily', name: 'Daily Activities', icon: <Zap className="w-4 h-4" /> },
        { id: 'care', name: 'Personal Care', icon: <Zap className="w-4 h-4" /> },
        { id: 'household', name: 'Household', icon: <Zap className="w-4 h-4" /> },
        { id: 'social', name: 'Communication', icon: <Zap className="w-4 h-4" /> },
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
                    <h1 className="text-4xl font-bold text-indigo-900 mb-4">🏃‍♂️ Daily Verbs & Actions</h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Master essential Khmer verbs for daily activities. Learn how to describe your routines,
                        movements, and actions in everyday conversation.
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
                                placeholder="Search verbs, actions, or examples..."
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
                                <p className="text-sm text-gray-600">Total Verbs</p>
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
                                        {section.entries.length} verbs
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
                        href="/lessons/beginner/family"
                        className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous: Family & People Words
                    </Link>
                    <Link
                        href="/lessons/beginner/food"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        Next: Food & Eating Out
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

export default ActionsLesson;
