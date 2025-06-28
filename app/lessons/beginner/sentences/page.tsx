'use client';

import React, { useState } from 'react';
import { Play, Volume2, Search, BookOpen, CheckCircle, X, Star, Award, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const SimpleSentencesLesson = () => {
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
            title: 'Subject-Verb-Object Sentences',
            category: 'svo',
            description: 'Learn the basic sentence structure in Khmer. Most Khmer sentences follow the Subject-Verb-Object pattern.',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'bg-blue-50 border-blue-200 text-blue-800',
            entries: [
                { khmer: 'ខ្ញុំជាគ្រូ', english: 'I am a teacher', pronunciation: 'knyom chea kru', difficulty: 'easy', example: 'ខ្ញុំជាគ្រូ (knyom chea kru) - I am a teacher' },
                { khmer: 'អ្នកជានិស្សិត', english: 'You are a student', pronunciation: 'neak chea nisit', difficulty: 'easy', example: 'អ្នកជានិស្សិត (neak chea nisit) - You are a student' },
                { khmer: 'គាត់ញុាំបាយ', english: 'He/She eats rice', pronunciation: 'koat nyam bai', difficulty: 'medium', example: 'គាត់ញុាំបាយ (koat nyam bai) - He/She eats rice' },
                { khmer: 'យើងទៅផ្សារ', english: 'We go to market', pronunciation: 'yung tov psar', difficulty: 'medium', example: 'យើងទៅផ្សារ (yung tov psar) - We go to market' },
                { khmer: 'ពួកគេរៀនភាសា', english: 'They study language', pronunciation: 'puak ke rien pheasa', difficulty: 'medium', example: 'ពួកគេរៀនភាសា (puak ke rien pheasa) - They study language' },
            ],
        },
        {
            title: 'Yes/No Questions',
            category: 'questions',
            description: 'Learn how to form yes/no questions in Khmer using question particles and rising intonation.',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'bg-green-50 border-green-200 text-green-800',
            entries: [
                { khmer: 'តើអ្នកសុខសប្បាយទេ?', english: 'Are you well?', pronunciation: 'tae neak sok sabai te', difficulty: 'medium', example: 'តើអ្នកសុខសប្បាយទេ? (tae neak sok sabai te) - Are you well?' },
                { khmer: 'តើអ្នកជានិស្សិតទេ?', english: 'Are you a student?', pronunciation: 'tae neak chea nisit te', difficulty: 'medium', example: 'តើអ្នកជានិស្សិតទេ? (tae neak chea nisit te) - Are you a student?' },
                { khmer: 'តើអ្នកចង់ទៅទេ?', english: 'Do you want to go?', pronunciation: 'tae neak chong tov te', difficulty: 'medium', example: 'តើអ្នកចង់ទៅទេ? (tae neak chong tov te) - Do you want to go?' },
                { khmer: 'តើអ្នកយល់ទេ?', english: 'Do you understand?', pronunciation: 'tae neak yol te', difficulty: 'easy', example: 'តើអ្នកយល់ទេ? (tae neak yol te) - Do you understand?' },
                { khmer: 'តើអ្នកចូលចិត្តទេ?', english: 'Do you like it?', pronunciation: 'tae neak chol chet te', difficulty: 'medium', example: 'តើអ្នកចូលចិត្តទេ? (tae neak chol chet te) - Do you like it?' },
            ],
        },
        {
            title: 'Negative Sentences',
            category: 'negative',
            description: 'Learn how to form negative sentences using "មិន" (min) and other negative particles.',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'bg-red-50 border-red-200 text-red-800',
            entries: [
                { khmer: 'ខ្ញុំមិនជាគ្រូទេ', english: 'I am not a teacher', pronunciation: 'knyom min chea kru te', difficulty: 'medium', example: 'ខ្ញុំមិនជាគ្រូទេ (knyom min chea kru te) - I am not a teacher' },
                { khmer: 'អ្នកមិនទៅទេ', english: 'You do not go', pronunciation: 'neak min tov te', difficulty: 'medium', example: 'អ្នកមិនទៅទេ (neak min tov te) - You do not go' },
                { khmer: 'គាត់មិនយល់ទេ', english: 'He/She does not understand', pronunciation: 'koat min yol te', difficulty: 'medium', example: 'គាត់មិនយល់ទេ (koat min yol te) - He/She does not understand' },
                { khmer: 'យើងមិនចង់ទេ', english: 'We do not want', pronunciation: 'yung min chong te', difficulty: 'medium', example: 'យើងមិនចង់ទេ (yung min chong te) - We do not want' },
                { khmer: 'ពួកគេមិនមកទេ', english: 'They do not come', pronunciation: 'puak ke min mok te', difficulty: 'medium', example: 'ពួកគេមិនមកទេ (puak ke min mok te) - They do not come' },
            ],
        },
        {
            title: 'Present Tense',
            category: 'present',
            description: 'Learn how to express present tense actions and states in Khmer. Khmer often uses context rather than verb conjugation.',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'bg-purple-50 border-purple-200 text-purple-800',
            entries: [
                { khmer: 'ខ្ញុំរៀនភាសាខ្មែរ', english: 'I study Khmer', pronunciation: 'knyom rien pheasa khmer', difficulty: 'medium', example: 'ខ្ញុំរៀនភាសាខ្មែរ (knyom rien pheasa khmer) - I study Khmer' },
                { khmer: 'អ្នកធ្វើការ', english: 'You work', pronunciation: 'neak tveu kar', difficulty: 'medium', example: 'អ្នកធ្វើការ (neak tveu kar) - You work' },
                { khmer: 'គាត់រស់នៅភ្នំពេញ', english: 'He/She lives in Phnom Penh', pronunciation: 'koat ros nov phnom penh', difficulty: 'hard', example: 'គាត់រស់នៅភ្នំពេញ (koat ros nov phnom penh) - He/She lives in Phnom Penh' },
                { khmer: 'យើងចូលចិត្តអាហារ', english: 'We like food', pronunciation: 'yung chol chet ahar', difficulty: 'medium', example: 'យើងចូលចិត្តអាហារ (yung chol chet ahar) - We like food' },
                { khmer: 'ពួកគេនិយាយភាសាខ្មែរ', english: 'They speak Khmer', pronunciation: 'puak ke niyeay pheasa khmer', difficulty: 'hard', example: 'ពួកគេនិយាយភាសាខ្មែរ (puak ke niyeay pheasa khmer) - They speak Khmer' },
            ],
        },
        {
            title: 'Common Verbs',
            category: 'verbs',
            description: 'Master essential verbs that are used frequently in everyday Khmer conversation.',
            icon: <MessageSquare className="w-5 h-5" />,
            color: 'bg-orange-50 border-orange-200 text-orange-800',
            entries: [
                { khmer: 'ទៅ', english: 'to go', pronunciation: 'tov', difficulty: 'easy', example: 'ទៅ (tov) - to go' },
                { khmer: 'មក', english: 'to come', pronunciation: 'mok', difficulty: 'easy', example: 'មក (mok) - to come' },
                { khmer: 'ញុាំ', english: 'to eat', pronunciation: 'nyam', difficulty: 'easy', example: 'ញុាំ (nyam) - to eat' },
                { khmer: 'ផឹក', english: 'to drink', pronunciation: 'pheuk', difficulty: 'easy', example: 'ផឹក (pheuk) - to drink' },
                { khmer: 'រៀន', english: 'to study/learn', pronunciation: 'rien', difficulty: 'easy', example: 'រៀន (rien) - to study/learn' },
                { khmer: 'និយាយ', english: 'to speak', pronunciation: 'niyeay', difficulty: 'medium', example: 'និយាយ (niyeay) - to speak' },
                { khmer: 'យល់', english: 'to understand', pronunciation: 'yol', difficulty: 'easy', example: 'យល់ (yol) - to understand' },
                { khmer: 'ចង់', english: 'to want', pronunciation: 'chong', difficulty: 'easy', example: 'ចង់ (chong) - to want' },
                { khmer: 'ចូលចិត្ត', english: 'to like', pronunciation: 'chol chet', difficulty: 'medium', example: 'ចូលចិត្ត (chol chet) - to like' },
                { khmer: 'រស់នៅ', english: 'to live', pronunciation: 'ros nov', difficulty: 'medium', example: 'រស់នៅ (ros nov) - to live' },
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
        { id: 'all', name: 'All Sentences', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'svo', name: 'Subject-Verb-Object', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'questions', name: 'Yes/No Questions', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'negative', name: 'Negative Sentences', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'present', name: 'Present Tense', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'verbs', name: 'Common Verbs', icon: <MessageSquare className="w-4 h-4" /> },
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
                    <h1 className="text-4xl font-bold text-indigo-900 mb-4">💬 Simple Sentences</h1>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                        Master basic Khmer sentence structures. Learn how to form subject-verb-object sentences,
                        ask yes/no questions, and express negative statements.
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
                                placeholder="Search sentences, grammar, or examples..."
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
                                <p className="text-sm text-gray-600">Total Sentences</p>
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
                                        {section.entries.length} sentences
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
                        href="/lessons/beginner/numbers"
                        className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous: Numbers & Counting
                    </Link>
                    <Link
                        href="/lessons/beginner/polite"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                    >
                        Next: Polite Phrases & Common Questions
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

export default SimpleSentencesLesson;
