'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Play,
    Pause,
    RotateCcw,
    Volume2,
    CheckCircle,
    Clock,
    Star,
    BookOpen,
    Target,
    Award,
    ChevronRight,
    ChevronLeft,
    Mic,
    MicOff,
    Eye,
    EyeOff,
    Trophy,
    Home
} from 'lucide-react';

interface LessonSection {
    id: string;
    title: string;
    type: 'vocabulary' | 'dialogue' | 'practice' | 'culture';
    content: VocabularyContent | DialogueContent | PracticeContent;
}

interface VocabularyContent {
    items: VocabularyItem[];
}

interface DialogueContent {
    dialogue: DialogueItem[];
}

interface PracticeContent {
    exercises: PracticeExercise[];
}

interface VocabularyItem {
    khmer: string;
    romanization: string;
    english: string;
    audio?: string;
    notes?: string;
}

interface DialogueItem {
    speaker: string;
    khmer: string;
    romanization: string;
    english: string;
}

interface PracticeExercise {
    type: 'match' | 'fill';
    instruction: string;
    items?: Array<{ khmer: string; english: string }>;
    sentence?: string;
    answer?: string;
    hint?: string;
}

interface VocabularySectionProps {
    items: VocabularyItem[];
    showRomanization: boolean;
    showTranslation: boolean;
    onItemComplete: (itemId: string) => void;
    completedItems: Set<string>;
    playAudio: () => void;
    isPlaying: boolean;
    toggleRecording: () => void;
    isRecording: boolean;
}

interface DialogueSectionProps {
    dialogue: DialogueItem[];
    showRomanization: boolean;
    showTranslation: boolean;
    onItemComplete: (itemId: string) => void;
    completedItems: Set<string>;
    playAudio: () => void;
    isPlaying: boolean;
}

interface PracticeSectionProps {
    exercises: PracticeExercise[];
    onItemComplete: (itemId: string) => void;
    completedItems: Set<string>;
}

const GreetingsLesson = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showRomanization, setShowRomanization] = useState(true);
    const [showTranslation, setShowTranslation] = useState(true);
    const [completedItems, setCompletedItems] = useState(new Set());
    const [isRecording, setIsRecording] = useState(false);
    const [earnedXP, setEarnedXP] = useState(0);

    const lessonData = {
        title: 'Greetings & Introductions',
        description: 'Say hello, introduce yourself, and be polite in conversation. Essential social interactions.',
        estimatedTime: '30 min',
        sections: 3,
        xpReward: 35,
        difficulty: 'Beginner'
    };

    const sections: LessonSection[] = [
        {
            id: 'greetings',
            title: 'Basic Greetings',
            type: 'vocabulary',
            content: {
                items: [
                    {
                        khmer: 'សួស្តី',
                        romanization: 'Sous-dei',
                        english: 'Hello (formal)',
                        notes: 'Used in formal situations or with people you don\'t know well'
                    },
                    {
                        khmer: 'ជំរាបសួរ',
                        romanization: 'Chum-reab sour',
                        english: 'Hello (very formal)',
                        notes: 'Most polite greeting, used with elders or in very formal contexts'
                    },
                    {
                        khmer: 'អរុណសួស្តី',
                        romanization: 'A-run sous-dei',
                        english: 'Good morning',
                        notes: 'Used until around 11 AM'
                    },
                    {
                        khmer: 'ទិវាសួស្តី',
                        romanization: 'Ti-vea sous-dei',
                        english: 'Good afternoon',
                        notes: 'Used from 11 AM to 5 PM'
                    },
                    {
                        khmer: 'សាយ័ណសួស្តី',
                        romanization: 'Sai-yon sous-dei',
                        english: 'Good evening',
                        notes: 'Used after 5 PM'
                    },
                    {
                        khmer: 'លាហើយ',
                        romanization: 'Lea haey',
                        english: 'Goodbye (casual)',
                        notes: 'Informal way to say goodbye'
                    }
                ]
            }
        },
        {
            id: 'introductions',
            title: 'Introducing Yourself',
            type: 'dialogue',
            content: {
                dialogue: [
                    {
                        speaker: 'Person A',
                        khmer: 'សួស្តី! ខ្ញុំឈ្មោះ សុផាត។',
                        romanization: 'Sous-dei! Khnhom chhmouh So-phat.',
                        english: 'Hello! My name is Sophat.'
                    },
                    {
                        speaker: 'Person B',
                        khmer: 'ជំរាបសួរ! ខ្ញុំឈ្មោះ លីណា។',
                        romanization: 'Chum-reab sour! Khnhom chhmouh Li-na.',
                        english: 'Hello! My name is Lina.'
                    },
                    {
                        speaker: 'Person A',
                        khmer: 'អ្នកមកពីណា?',
                        romanization: 'Neak mok pi na?',
                        english: 'Where are you from?'
                    },
                    {
                        speaker: 'Person B',
                        khmer: 'ខ្ញុំមកពីភ្នំពេញ។ ចុះអ្នកវិញ?',
                        romanization: 'Khnhom mok pi Phnom Penh. Choh neak vinh?',
                        english: 'I\'m from Phnom Penh. How about you?'
                    },
                    {
                        speaker: 'Person A',
                        khmer: 'ខ្ញុំមកពីសៀមរាប។',
                        romanization: 'Khnhom mok pi Siem Reap.',
                        english: 'I\'m from Siem Reap.'
                    },
                    {
                        speaker: 'Person B',
                        khmer: 'រីករាយណាស់ដែលបានស្គាល់អ្នក!',
                        romanization: 'Rik-rey nas del ban s-gal neak!',
                        english: 'Nice to meet you!'
                    }
                ]
            }
        },
        {
            id: 'practice',
            title: 'Practice & Review',
            type: 'practice',
            content: {
                exercises: [
                    {
                        type: 'match',
                        instruction: 'Match the Khmer greeting with its English meaning',
                        items: [
                            { khmer: 'សួស្តី', english: 'Hello (formal)' },
                            { khmer: 'អរុណសួស្តី', english: 'Good morning' },
                            { khmer: 'លាហើយ', english: 'Goodbye (casual)' },
                            { khmer: 'ជំរាបសួរ', english: 'Hello (very formal)' }
                        ]
                    },
                    {
                        type: 'fill',
                        instruction: 'Complete the introduction',
                        sentence: 'ខ្ញុំឈ្មោះ ___',
                        answer: '[your name]',
                        hint: 'Say your name after "ខ្ញុំឈ្មោះ" (My name is...)'
                    }
                ]
            }
        }
    ];

    const totalItems = sections.reduce((acc, section) => {
        if (section.type === 'vocabulary') return acc + section.content.items.length;
        if (section.type === 'dialogue') return acc + section.content.dialogue.length;
        if (section.type === 'practice') return acc + section.content.exercises.length;
        return acc + 1;
    }, 0);

    useEffect(() => {
        const newProgress = (completedItems.size / totalItems) * 100;
        setProgress(newProgress);

        if (newProgress === 100) {
            setEarnedXP(lessonData.xpReward);
        }
    }, [completedItems, totalItems]);

    const markItemCompleted = (itemId: string) => {
        setCompletedItems(prev => new Set([...prev, itemId]));
    };

    const playAudio = () => {
        setIsPlaying(true);
        // Simulate audio playback
        setTimeout(() => setIsPlaying(false), 2000);
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        // Simulate recording functionality
        if (!isRecording) {
            setTimeout(() => setIsRecording(false), 3000);
        }
    };

    const currentSectionData = sections[currentSection];

    return (
        <div className="">
            <div className="">
                {/* Header */}
                <div className="bg-white shadow-sm sticky top-0 z-10">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                                </button>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">👋 {lessonData.title}</h1>
                                    <p className="text-sm text-gray-600">Section {currentSection + 1} of {sections.length}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    {lessonData.estimatedTime}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-orange-600">
                                    <Star className="w-4 h-4" />
                                    {earnedXP}/{lessonData.xpReward} XP
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                            <div className="flex justify-between text-xs text-gray-600 mb-2">
                                <span>Progress</span>
                                <span>{Math.round(progress)}% Complete</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-8">
                    {/* Section Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-lg">
                            {sections.map((section, index) => (
                                <button
                                    key={section.id}
                                    onClick={() => setCurrentSection(index)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${index === currentSection
                                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Settings */}
                    <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Learning Options</span>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setShowRomanization(!showRomanization)}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs transition-colors ${showRomanization ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                        }`}
                                >
                                    {showRomanization ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                    Romanization
                                </button>
                                <button
                                    onClick={() => setShowTranslation(!showTranslation)}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs transition-colors ${showTranslation ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                        }`}
                                >
                                    {showTranslation ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                    Translation
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Section Content */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Section Header */}
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
                            <h2 className="text-2xl font-bold mb-2">{currentSectionData.title}</h2>
                            <div className="flex items-center gap-4 text-green-100">
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    {currentSectionData.type === 'vocabulary' ? 'Vocabulary' :
                                        currentSectionData.type === 'dialogue' ? 'Dialogue' : 'Practice'}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Target className="w-4 h-4" />
                                    Interactive Learning
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            {currentSectionData.type === 'vocabulary' && (
                                <VocabularySection
                                    items={currentSectionData.content.items}
                                    showRomanization={showRomanization}
                                    showTranslation={showTranslation}
                                    onItemComplete={markItemCompleted}
                                    completedItems={completedItems}
                                    playAudio={playAudio}
                                    isPlaying={isPlaying}
                                    toggleRecording={toggleRecording}
                                    isRecording={isRecording}
                                />
                            )}

                            {currentSectionData.type === 'dialogue' && (
                                <DialogueSection
                                    dialogue={currentSectionData.content.dialogue}
                                    showRomanization={showRomanization}
                                    showTranslation={showTranslation}
                                    onItemComplete={markItemCompleted}
                                    completedItems={completedItems}
                                    playAudio={playAudio}
                                    isPlaying={isPlaying}
                                />
                            )}

                            {currentSectionData.type === 'practice' && (
                                <PracticeSection
                                    exercises={currentSectionData.content.exercises}
                                    onItemComplete={markItemCompleted}
                                    completedItems={completedItems}
                                />
                            )}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                            disabled={currentSection === 0}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${currentSection === 0
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Previous
                        </button>

                        <button
                            onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                            disabled={currentSection === sections.length - 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${currentSection === sections.length - 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 shadow-md'
                                }`}
                        >
                            Next
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Completion Message */}
                    {progress === 100 && (
                        <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 text-white text-center">
                            <div className="mb-4">
                                <Trophy className="w-16 h-16 mx-auto text-yellow-300" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Lesson Complete!</h3>
                            <p className="text-green-100 mb-4">
                                You've earned {lessonData.xpReward} XP and mastered the basics of Khmer greetings!
                            </p>
                            <div className="flex gap-4 justify-center">
                                <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                                    <Home className="w-4 h-4" />
                                    Back to Lessons
                                </button>
                                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4" />
                                    Next Lesson
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Vocabulary Section Component
const VocabularySection = ({
    items,
    showRomanization,
    showTranslation,
    onItemComplete,
    completedItems,
    playAudio,
    isPlaying,
    toggleRecording,
    isRecording
}: VocabularySectionProps) => {
    return (
        <div className="space-y-4">
            {items.map((item: VocabularyItem, index: number) => {
                const itemId = `vocab-${index}`;
                const isCompleted = completedItems.has(itemId);

                return (
                    <div key={index} className={`border rounded-lg p-4 transition-all ${isCompleted ? 'bg-green-50 border-green-200' : 'border-gray-200 hover:border-blue-300'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="text-3xl font-bold text-indigo-700 mb-2">{item.khmer}</div>
                                {showRomanization && (
                                    <div className="text-lg text-gray-600 mb-1">{item.romanization}</div>
                                )}
                                {showTranslation && (
                                    <div className="text-lg font-medium text-gray-900 mb-2">{item.english}</div>
                                )}
                                {item.notes && (
                                    <div className="text-sm text-blue-600 bg-blue-50 rounded px-3 py-2">
                                        💡 {item.notes}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-2 ml-4">
                                <button
                                    onClick={playAudio}
                                    className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                                    disabled={isPlaying}
                                >
                                    {isPlaying ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                </button>

                                <button
                                    onClick={toggleRecording}
                                    className={`p-3 rounded-full transition-colors ${isRecording ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                        }`}
                                >
                                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                                </button>

                                <button
                                    onClick={() => onItemComplete(itemId)}
                                    className={`p-3 rounded-full transition-colors ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-green-500 hover:text-white'
                                        }`}
                                >
                                    <CheckCircle className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// Dialogue Section Component
const DialogueSection = ({
    dialogue,
    showRomanization,
    showTranslation,
    onItemComplete,
    completedItems,
    playAudio,
    isPlaying
}: DialogueSectionProps) => {
    return (
        <div className="space-y-4">
            {dialogue.map((item: DialogueItem, index: number) => {
                const itemId = `dialogue-${index}`;
                const isCompleted = completedItems.has(itemId);
                const isPersonA = item.speaker === 'Person A';

                return (
                    <div key={index} className={`flex ${isPersonA ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-md p-4 rounded-lg ${isPersonA ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-green-50 border-r-4 border-green-500'
                            }`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-600">{item.speaker}</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={playAudio}
                                        className="p-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                                        disabled={isPlaying}
                                    >
                                        {isPlaying ? <Pause className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                                    </button>
                                    <button
                                        onClick={() => onItemComplete(itemId)}
                                        className={`p-1 rounded-full transition-colors ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-green-500 hover:text-white'
                                            }`}
                                    >
                                        <CheckCircle className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            <div className="text-xl font-bold text-indigo-700 mb-1">{item.khmer}</div>
                            {showRomanization && (
                                <div className="text-sm text-gray-600 mb-1">{item.romanization}</div>
                            )}
                            {showTranslation && (
                                <div className="text-sm font-medium text-gray-900">{item.english}</div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// Practice Section Component
const PracticeSection = ({ exercises, onItemComplete, completedItems }: PracticeSectionProps) => {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});

    return (
        <div className="space-y-6">
            {exercises.map((exercise: PracticeExercise, index: number) => {
                const exerciseId = `exercise-${index}`;
                const isCompleted = completedItems.has(exerciseId);

                return (
                    <div key={index} className={`border rounded-lg p-6 ${isCompleted ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
                        <h4 className="text-lg font-medium text-gray-900 mb-4">{exercise.instruction}</h4>

                        {exercise.type === 'match' && (
                            <div className="grid md:grid-cols-2 gap-4">
                                {exercise.items?.map((item: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                                        <span className="text-xl font-bold text-indigo-700">{item.khmer}</span>
                                        <span className="text-gray-700">{item.english}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {exercise.type === 'fill' && (
                            <div className="space-y-4">
                                <div className="text-xl">
                                    {exercise.sentence?.split('___').map((part: string, i: number) => (
                                        <span key={i}>
                                            {part}
                                            {i < exercise.sentence?.split('___').length - 1 && (
                                                <input
                                                    type="text"
                                                    className="mx-2 px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="..."
                                                    value={answers[exerciseId] || ''}
                                                    onChange={(e) => setAnswers({ ...answers, [exerciseId]: e.target.value })}
                                                />
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-sm text-blue-600 bg-blue-50 rounded px-3 py-2">
                                    💡 {exercise.hint}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => onItemComplete(exerciseId)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${isCompleted
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    }`}
                            >
                                {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Target className="w-4 h-4" />}
                                {isCompleted ? 'Completed' : 'Check Answer'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default GreetingsLesson;