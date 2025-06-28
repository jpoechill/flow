'use client';

import React, { useState } from 'react';
import {
  Grid,
  List,
  Play,
  Clock,
  Star,
  CheckCircle,
  Lock,
  BookOpen,
  Trophy,
  Target,
  Search,
  Award,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  sections: number;
  estimatedTime: string;
  difficulty: string;
  xpReward: number;
  icon: string;
  isUnlocked: boolean;
  prerequisites: string[];
  khmerSample: string;
}

const AdvancedPage = () => {
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [completedLessons, setCompletedLessons] = useState(new Set(['complex-sentences']));
  const [totalXP, setTotalXP] = useState(185);

  const lessons = [
    {
      id: 'complex-sentences',
      title: 'Complex Sentence Structures',
      description: 'Build fluency with compound and complex grammar patterns. Master advanced sentence construction.',
      tags: ['Grammar', 'Fluency', 'Writing'],
      link: '/lessons/advanced/complex-sentences',
      sections: 4,
      estimatedTime: '45 min',
      difficulty: 'Advanced',
      xpReward: 50,
      icon: '🏗️',
      isUnlocked: true,
      prerequisites: [],
      khmerSample: 'ខ្ញុំគិតថាការសិក្សាភាសាខ្មែរគឺជាការវិភាគដ៏សំខាន់',
    },
    {
      id: 'formal-registers',
      title: 'Formal & Literary Registers',
      description: 'Explore elegant Khmer used in speeches, writing, and literature. Master formal communication.',
      tags: ['Style', 'Reading', 'Listening'],
      link: '/lessons/advanced/formal-registers',
      sections: 3,
      estimatedTime: '40 min',
      difficulty: 'Advanced',
      xpReward: 45,
      icon: '📚',
      isUnlocked: true,
      prerequisites: ['complex-sentences'],
      khmerSample: 'សូមអនុញ្ញាតឱ្យខ្ញុំបង្ហាញពីការវិភាគនេះ',
    },
    {
      id: 'transitions',
      title: 'Mastering Transitions',
      description: 'Use smooth connectors like "however", "therefore", and "although". Enhance flow and coherence.',
      tags: ['Writing', 'Fluency'],
      link: '/lessons/advanced/transitions',
      sections: 3,
      estimatedTime: '35 min',
      difficulty: 'Advanced',
      xpReward: 40,
      icon: '🔗',
      isUnlocked: completedLessons.has('formal-registers'),
      prerequisites: ['formal-registers'],
      khmerSample: 'ទោះយ៉ាងណា ទោះបីជា ដូច្នេះ',
    },
    {
      id: 'literature',
      title: 'Khmer Literature & Nonfiction',
      description: 'Read and analyze text types, tones, and cultural context. Deep dive into Khmer literary traditions.',
      tags: ['Reading', 'Critical Thinking'],
      link: '/lessons/advanced/literature',
      sections: 4,
      estimatedTime: '60 min',
      difficulty: 'Advanced+',
      xpReward: 60,
      icon: '📖',
      isUnlocked: completedLessons.has('transitions'),
      prerequisites: ['transitions'],
      khmerSample: 'រឿងព្រេងខ្មែរ អក្សរសាស្ត្រ កំណាព្យ',
    },
    {
      id: 'idioms',
      title: 'Idioms, Proverbs & Figurative Language',
      description: 'Use advanced phrases that express wisdom, humor, and nuance. Master cultural expressions.',
      tags: ['Speaking', 'Cultural Insight'],
      link: '/lessons/advanced/idioms',
      sections: 3,
      estimatedTime: '50 min',
      difficulty: 'Advanced',
      xpReward: 55,
      icon: '💭',
      isUnlocked: completedLessons.has('literature'),
      prerequisites: ['literature'],
      khmerSample: 'ដូចជាកូនក្មេងដែលរត់ទៅរកភ្លើង',
    },
    {
      id: 'listening-advanced',
      title: 'Advanced Listening & Interpretation',
      description: 'Practice real-world audio, rapid speech, and summarization. Master comprehension skills.',
      tags: ['Listening', 'Transcription'],
      link: '/lessons/advanced/listening-advanced',
      sections: 3,
      estimatedTime: '45 min',
      difficulty: 'Advanced',
      xpReward: 50,
      icon: '🎧',
      isUnlocked: completedLessons.has('idioms'),
      prerequisites: ['idioms'],
      khmerSample: 'ការស្តាប់ ការយល់ ការបកស្រាយ',
    },
    {
      id: 'grammar-advanced',
      title: 'Advanced Grammar & Particles',
      description: 'Dissect sentence endings, modality, and formal syntax. Master linguistic precision.',
      tags: ['Grammar', 'Structure'],
      link: '/lessons/advanced/grammar-advanced',
      sections: 3,
      estimatedTime: '40 min',
      difficulty: 'Advanced+',
      xpReward: 55,
      icon: '🔍',
      isUnlocked: completedLessons.has('listening-advanced'),
      prerequisites: ['listening-advanced'],
      khmerSample: 'ដែល ដែលជា ដែលនៅ ដែលមាន',
    },
    {
      id: 'public-speaking',
      title: 'Khmer Public Speaking',
      description: 'Develop confidence in delivering presentations and storytelling. Master oratory skills.',
      tags: ['Presentation', 'Speaking'],
      link: '/lessons/advanced/public-speaking',
      sections: 4,
      estimatedTime: '55 min',
      difficulty: 'Advanced+',
      xpReward: 65,
      icon: '🎤',
      isUnlocked: completedLessons.has('grammar-advanced'),
      prerequisites: ['grammar-advanced'],
      khmerSample: 'ការនិយាយទៅកាន់សាធារណៈ ការបង្ហាញ',
    },
    {
      id: 'transcription',
      title: 'Transcription & Summarization Practice',
      description: 'Listen to long-form content and produce accurate summaries. Master academic skills.',
      tags: ['Listening', 'Academic'],
      link: '/lessons/advanced/transcription',
      sections: 3,
      estimatedTime: '50 min',
      difficulty: 'Expert',
      xpReward: 70,
      icon: '📝',
      isUnlocked: completedLessons.has('public-speaking'),
      prerequisites: ['public-speaking'],
      khmerSample: 'ការសរសេរចុះ ការសង្ខេប ការវិភាគ',
    },
  ];

  // Get all unique tags
  const allTags = ['all', ...new Set(lessons.flatMap(lesson => lesson.tags))];

  // Filter lessons based on search and tag
  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = searchTerm === '' ||
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = selectedTag === 'all' || lesson.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  // Calculate progress
  const totalLessons = lessons.length;
  const completedCount = completedLessons.size;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);
  const unlockedLessons = lessons.filter(lesson => lesson.isUnlocked).length;

  const markAsCompleted = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
    // Simulate XP gain
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
      setTotalXP(prev => prev + lesson.xpReward);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-sm bg-red-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Advanced Level
            </div>
            <span className="text-sm text-gray-600">Mastery • Module 3</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Master Khmer Fluency
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Achieve native-like proficiency with advanced grammar, literature, and cultural mastery.
            Perfect your Khmer language skills to the highest level.
          </p>
        </div>

        {/* Progress Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total XP</p>
                <p className="text-2xl font-bold text-red-600">{totalXP}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-blue-600">{progressPercentage}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Streak</p>
                <p className="text-2xl font-bold text-orange-600">12 days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Unlocked</p>
                <p className="text-2xl font-bold text-purple-600">{unlockedLessons}/{totalLessons}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Learning Progress</h3>
            <span className="text-sm text-gray-600">{completedCount} of {totalLessons} lessons completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-red-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Advanced</span>
            <span>Expert</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search lessons, topics, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Tag Filter */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {allTags.map((tag, i) => (
                <option key={i} value={tag}>
                  {tag === 'all' ? 'All Topics' : tag}
                </option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${view === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
              >
                <Grid className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${view === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
              >
                <List className="w-4 h-4" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Lessons Grid/List */}
        <div className={view === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              view={view}
              isCompleted={completedLessons.has(lesson.id)}
              onComplete={() => markAsCompleted(lesson.id)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No lessons found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Master Khmer?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Challenge yourself with advanced grammar, literature, and cultural mastery.
              Each lesson pushes your skills to the next level of fluency.
            </p>
            <button
              onClick={() => {
                const firstUncompletedLesson = lessons.find(lesson =>
                  lesson.isUnlocked && !completedLessons.has(lesson.id)
                );
                if (firstUncompletedLesson) {
                  console.log(`Starting lesson: ${firstUncompletedLesson.title}`);
                }
              }}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lesson Card Component
const LessonCard = ({ lesson, view, isCompleted, onComplete }: { lesson: Lesson, view: string, isCompleted: boolean, onComplete: () => void }) => {
  const isLocked = !lesson.isUnlocked;

  const cardClass = view === 'grid'
    ? "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    : "bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden";

  const cardContent = (
    <div className={`${cardClass} ${isLocked ? 'opacity-60' : ''} ${isCompleted ? 'ring-2 ring-red-200' : ''}`}>
      {view === 'grid' ? (
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl">{lesson.icon}</div>
            <div className="flex flex-col items-end gap-2">
              {isCompleted && <CheckCircle className="w-6 h-6 text-red-500" />}
              {isLocked && <Lock className="w-5 h-5 text-gray-400" />}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{lesson.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{lesson.description}</p>

          {/* Khmer Sample */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-lg font-khmer text-center text-indigo-700">{lesson.khmerSample}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {lesson.tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {lesson.tags.length > 2 && (
              <span className="text-xs text-gray-500">+{lesson.tags.length - 2} more</span>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {lesson.estimatedTime}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {lesson.sections} sections
              </span>
            </div>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {lesson.xpReward} XP
            </span>
          </div>

          {/* Difficulty Badge */}
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${getDifficultyColor(lesson.difficulty)}`}>
            {lesson.difficulty}
          </div>

          {/* Action Button */}
          <div className="flex gap-2">
            {isLocked ? (
              <button
                className="flex-1 bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2"
                disabled
              >
                <Lock className="w-4 h-4" />
                Locked
              </button>
            ) : isCompleted ? (
              <button className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Completed
              </button>
            ) : (
              <button
                onClick={onComplete}
                className="flex-1 bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Start Lesson
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center p-4 gap-4">
          <div className="text-2xl">{lesson.icon}</div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 truncate">{lesson.title}</h3>
              {isCompleted && <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
              {isLocked && <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />}
            </div>

            <p className="text-sm text-gray-600 line-clamp-1 mb-2">{lesson.description}</p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className={`px-2 py-1 rounded-full border ${getDifficultyColor(lesson.difficulty)}`}>
                {lesson.difficulty}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {lesson.estimatedTime}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {lesson.xpReward} XP
              </span>
            </div>
          </div>

          <div className="flex-shrink-0">
            {isLocked ? (
              <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm cursor-not-allowed" disabled>
                Locked
              </button>
            ) : isCompleted ? (
              <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm">
                Review
              </button>
            ) : (
              <button
                onClick={onComplete}
                className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm transition-all"
              >
                Start
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // Wrap in Link if lesson is unlocked
  if (!isLocked) {
    return (
      <Link href={lesson.link} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
    case 'Advanced+': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Expert': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default AdvancedPage;
