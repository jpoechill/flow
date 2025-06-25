'use client';

import React, { useState, useEffect } from 'react';
import {
  Grid,
  List,
  Play,
  Clock,
  Users,
  Star,
  CheckCircle,
  Lock,
  BookOpen,
  Volume2,
  Trophy,
  Target,
  Filter,
  Search,
  BarChart3,
  Award,
  TrendingUp
} from 'lucide-react';

const BeginnerPage = () => {
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [completedLessons, setCompletedLessons] = useState(new Set(['alphabet', 'greetings']));
  const [currentStreak, setCurrentStreak] = useState(7);
  const [totalXP, setTotalXP] = useState(245);

  const lessons = [
    {
      id: 'alphabet',
      title: 'Khmer Alphabet (Consonants)',
      description: 'Learn the first group of Khmer consonants and their sounds. Master the foundation of reading Khmer script.',
      tags: ['Alphabet', 'Reading', 'Pronunciation'],
      link: '/alphabet',
      sections: 3,
      estimatedTime: '25 min',
      difficulty: 'Essential',
      xpReward: 30,
      icon: '🔤',
      isUnlocked: true,
      prerequisites: [],
      khmerSample: 'ក ខ គ ឃ ង',
    },
    {
      id: 'vowels',
      title: 'Independent Vowels',
      description: 'Master stand-alone vowel characters in Khmer. Learn proper pronunciation and writing techniques.',
      tags: ['Vowels', 'Reading', 'Writing'],
      link: '/vowels/independent',
      sections: 2,
      estimatedTime: '20 min',
      difficulty: 'Essential',
      xpReward: 25,
      icon: '📝',
      isUnlocked: true,
      prerequisites: ['alphabet'],
      khmerSample: 'អ ឥ ឦ ឧ ឨ',
    },
    {
      id: 'greetings',
      title: 'Greetings & Introductions',
      description: 'Say hello, introduce yourself, and be polite in conversation. Essential social interactions.',
      tags: ['Speaking', 'Politeness', 'Listening'],
      link: '/lessons/greetings',
      sections: 3,
      estimatedTime: '30 min',
      difficulty: 'Beginner',
      xpReward: 35,
      icon: '👋',
      isUnlocked: true,
      prerequisites: [],
      khmerSample: 'សួស្តី ជំរាបសួរ',
    },
    {
      id: 'numbers',
      title: 'Numbers & Counting',
      description: 'Learn how to count, ask prices, and talk about quantity. Essential for daily transactions.',
      tags: ['Numbers', 'Vocabulary', 'Shopping'],
      link: '/lessons/numbers',
      sections: 2,
      estimatedTime: '35 min',
      difficulty: 'Beginner',
      xpReward: 30,
      icon: '🔢',
      isUnlocked: completedLessons.has('greetings'),
      prerequisites: ['greetings'],
      khmerSample: '១ ២ ៣ ៤ ៥',
    },
    {
      id: 'sentences',
      title: 'Simple Sentences',
      description: 'Form subject–verb–object sentences and ask yes/no questions. Build your first complete thoughts.',
      tags: ['Grammar', 'Speaking', 'Structure'],
      link: '/lessons/sentences',
      sections: 3,
      estimatedTime: '40 min',
      difficulty: 'Beginner',
      xpReward: 40,
      icon: '💬',
      isUnlocked: completedLessons.has('greetings'),
      prerequisites: ['greetings'],
      khmerSample: 'ខ្ញុំជាគ្រូ',
    },
    {
      id: 'polite',
      title: 'Polite Phrases & Common Questions',
      description: 'Use "please," "thank you," and ask simple questions respectfully. Cultural etiquette matters.',
      tags: ['Politeness', 'Daily Use', 'Culture'],
      link: '/lessons/polite',
      sections: 2,
      estimatedTime: '25 min',
      difficulty: 'Beginner',
      xpReward: 25,
      icon: '🙏',
      isUnlocked: completedLessons.has('sentences'),
      prerequisites: ['sentences'],
      khmerSample: 'សូម អរគុណ',
    },
    {
      id: 'family',
      title: 'Family & People Words',
      description: 'Talk about relatives, friends, and pronouns. Personal relationships and social connections.',
      tags: ['Vocabulary', 'Speaking', 'Relationships'],
      link: '/lessons/family',
      sections: 2,
      estimatedTime: '30 min',
      difficulty: 'Beginner',
      xpReward: 30,
      icon: '👨‍👩‍👧‍👦',
      isUnlocked: completedLessons.has('sentences'),
      prerequisites: ['sentences'],
      khmerSample: 'ម្តាយ ឪពុក កូន',
    },
    {
      id: 'actions',
      title: 'Daily Verbs & Actions',
      description: 'Describe everyday actions and create simple routines. Express what you do throughout the day.',
      tags: ['Verbs', 'Conversation', 'Daily Life'],
      link: '/lessons/actions',
      sections: 3,
      estimatedTime: '45 min',
      difficulty: 'Beginner+',
      xpReward: 45,
      icon: '🏃‍♂️',
      isUnlocked: completedLessons.has('family') && completedLessons.has('polite'),
      prerequisites: ['family', 'polite'],
      khmerSample: 'ទៅ មក ញុាំ',
    },
    {
      id: 'food',
      title: 'Food & Eating Out',
      description: 'Learn food vocabulary and how to order in Khmer. Navigate restaurants and markets confidently.',
      tags: ['Food', 'Speaking', 'Culture'],
      link: '/lessons/food',
      sections: 3,
      estimatedTime: '50 min',
      difficulty: 'Beginner+',
      xpReward: 50,
      icon: '🍜',
      isUnlocked: completedLessons.has('actions') && completedLessons.has('numbers'),
      prerequisites: ['actions', 'numbers'],
      khmerSample: 'បាយ ទឹក អាហារ',
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Essential': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Beginner+': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const markAsCompleted = (lessonId) => {
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
            <div className="text-sm bg-green-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Beginner Level
            </div>
            <span className="text-sm text-gray-600">Foundations • Module 1</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🇰🇭 Start Your Khmer Journey
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Master the fundamentals of Khmer language with our structured learning path.
            From alphabet to conversation, build your confidence step by step.
          </p>
        </div>

        {/* Progress Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total XP</p>
                <p className="text-2xl font-bold text-green-600">{totalXP}</p>
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
                <p className="text-2xl font-bold text-orange-600">{currentStreak} days</p>
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
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Beginner</span>
            <span>Elementary</span>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Tag Filter */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {allTags.map(tag => (
                <option key={tag} value={tag}>
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
          {filteredLessons.map((lesson, index) => (
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Start with the Khmer alphabet and work your way through our carefully designed progression.
              Each lesson builds on the previous one for maximum learning efficiency.
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
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
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
const LessonCard = ({ lesson, view, isCompleted, onComplete }) => {
  const isLocked = !lesson.isUnlocked;

  const cardClass = view === 'grid'
    ? "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    : "bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden";

  return (
    <div className={`${cardClass} ${isLocked ? 'opacity-60' : ''} ${isCompleted ? 'ring-2 ring-green-200' : ''}`}>
      {view === 'grid' ? (
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl">{lesson.icon}</div>
            <div className="flex flex-col items-end gap-2">
              {isCompleted && <CheckCircle className="w-6 h-6 text-green-500" />}
              {isLocked && <Lock className="w-5 h-5 text-gray-400" />}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{lesson.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{lesson.description}</p>

          {/* Khmer Sample */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-2xl font-khmer text-center text-indigo-700">{lesson.khmerSample}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {lesson.tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
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
              <button className="flex-1 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Completed
              </button>
            ) : (
              <button
                onClick={onComplete}
                className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
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
              {isCompleted && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
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
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm">
                Review
              </button>
            ) : (
              <button
                onClick={onComplete}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all"
              >
                Start
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Essential': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
    case 'Beginner+': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default BeginnerPage;