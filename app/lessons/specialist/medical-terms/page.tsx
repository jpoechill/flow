'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, Search, BookOpen, Heart, Users, AlertTriangle, MessageCircle, CheckCircle, X, RotateCcw, Star } from 'lucide-react';

const MedicalTerminologyLesson = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [completedItems, setCompletedItems] = useState(new Set());
  const [favorites, setFavorites] = useState(new Set());
  const [audioPlaying, setAudioPlaying] = useState(null);

  const sections = [
    {
      title: 'Medical Terms',
      category: 'medical',
      description: 'Common terms used to refer to healthcare workers, medications, and facilities. Khmer language includes both formal Sanskrit-rooted and colloquial words, making it vital to recognize when to use respectful versus conversational vocabulary in clinical contexts.',
      icon: <Heart className="w-5 h-5" />,
      color: 'bg-red-50 border-red-200 text-red-800',
      entries: [
        { khmer: 'វេជ្ជបណ្ឌិត', english: 'Doctor', pronunciation: 'vech-cha-ban-dit', difficulty: 'easy' },
        { khmer: 'អ្នកជំងឺ', english: 'Patient', pronunciation: 'neak-chum-ngeu', difficulty: 'easy' },
        { khmer: 'ថ្នាំ', english: 'Medicine', pronunciation: 'tnam', difficulty: 'easy' },
        { khmer: 'មន្ទីរពេទ្យ', english: 'Hospital', pronunciation: 'mon-tii-pet', difficulty: 'medium' },
        { khmer: 'ការពិនិត្យ', english: 'Examination', pronunciation: 'kar-pi-nit', difficulty: 'medium' },
      ],
    },
    {
      title: 'Body Parts',
      category: 'anatomy',
      description: 'Essential vocabulary for body parts used in clinical assessments and descriptions. Khmer often distinguishes between anatomical terms and polite euphemisms, so it\'s helpful to be aware of both when speaking with patients.',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      entries: [
        { khmer: 'ក្បាល', english: 'Head', pronunciation: 'kbal', difficulty: 'easy' },
        { khmer: 'បេះដូង', english: 'Heart', pronunciation: 'beh-doung', difficulty: 'easy' },
        { khmer: 'សួត', english: 'Lungs', pronunciation: 'suot', difficulty: 'medium' },
        { khmer: 'ពោះ', english: 'Stomach', pronunciation: 'poh', difficulty: 'easy' },
        { khmer: 'ជើង', english: 'Leg/Foot', pronunciation: 'cheung', difficulty: 'easy' },
        { khmer: 'ដៃ', english: 'Hand/Arm', pronunciation: 'dai', difficulty: 'easy' },
      ],
    },
    {
      title: 'Symptoms',
      category: 'symptoms',
      description: 'Useful words to describe common patient-reported symptoms and conditions. Khmer patients often describe symptoms metaphorically or with emotional expressions, which may require cultural sensitivity and follow-up questions.',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      entries: [
        { khmer: 'វិលមុខ', english: 'Dizziness', pronunciation: 'vil-muk', difficulty: 'medium' },
        { khmer: 'ក្អក', english: 'Cough', pronunciation: 'kaok', difficulty: 'easy' },
        { khmer: 'ឈឺក្បាល', english: 'Headache', pronunciation: 'cheu-kbal', difficulty: 'easy' },
        { khmer: 'ផ្តាសាយ', english: 'Cold/Flu', pronunciation: 'pda-saay', difficulty: 'medium' },
        { khmer: 'ឈាមរត់', english: 'Bleeding', pronunciation: 'chiam-rot', difficulty: 'medium' },
        { khmer: 'ក្ដៅខ្លួន', english: 'Fever', pronunciation: 'kdav-kluon', difficulty: 'medium' },
      ],
    },
    {
      title: 'Commands',
      category: 'commands',
      description: 'Imperative forms often used when giving medical instructions to patients. Khmer uses both soft and firm registers of speech—choosing the right tone is important to ensure cooperation without sounding impolite.',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'bg-green-50 border-green-200 text-green-800',
      entries: [
        { khmer: 'ផឹក', english: 'Drink', pronunciation: 'pheuk', difficulty: 'easy' },
        { khmer: 'ញុាំថ្នាំ', english: 'Take Medicine', pronunciation: 'nyam-tnam', difficulty: 'medium' },
        { khmer: 'សម្រាក', english: 'Rest', pronunciation: 'som-raak', difficulty: 'easy' },
        { khmer: 'ដកដង្ហើម', english: 'Breathe', pronunciation: 'dak-dong-haem', difficulty: 'hard' },
        { khmer: 'កុំញុាំ', english: 'Don\'t Eat', pronunciation: 'kom-nyam', difficulty: 'medium' },
      ],
    },
    {
      title: 'Patient Questions',
      category: 'questions',
      description: 'Questions doctors and nurses might ask patients during assessments or interviews. Khmer grammar often relies on tone and sentence-final particles, which can alter meaning subtly—especially in questions.',
      icon: <MessageCircle className="w-5 h-5" />,
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      entries: [
        { khmer: 'តើអ្នកឈឺនៅឯណា?', english: 'Where does it hurt?', pronunciation: 'tae-neak-cheu-nov-ae-na', difficulty: 'hard' },
        { khmer: 'តើអ្នកមានអារម្មណ៍យ៉ាងម៉េច?', english: 'How do you feel?', pronunciation: 'tae-neak-mien-aa-rom-yaang-mech', difficulty: 'hard' },
        { khmer: 'តើបានប៉ុន្មានថ្ងៃហើយ?', english: 'How many days?', pronunciation: 'tae-ban-pon-maan-tngai-haey', difficulty: 'medium' },
        { khmer: 'តើអ្នកមានជំងឺប្រចាំទេ?', english: 'Do you have chronic illness?', pronunciation: 'tae-neak-mien-chum-ngeu-pro-cham-te', difficulty: 'hard' },
      ],
    },
    {
      title: 'Emergency',
      category: 'emergency',
      description: 'Critical vocabulary for emergency situations and urgent medical responses. In high-stress environments, Khmer words must be pronounced clearly, and it\'s crucial to distinguish between formal and layperson versions of medical terms.',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'bg-red-50 border-red-200 text-red-800',
      entries: [
        { khmer: 'ជួយខ្ញុំផង!', english: 'Help me!', pronunciation: 'chuoy-knyom-phong', difficulty: 'medium' },
        { khmer: 'ហៅសង្គ្រោះបន្ទាន់!', english: 'Call emergency!', pronunciation: 'hav-song-groh-ban-toan', difficulty: 'hard' },
        { khmer: 'មិនអាចដកដង្ហើមបានទេ', english: 'Can\'t breathe', pronunciation: 'min-aach-dak-dong-haem-ban-te', difficulty: 'hard' },
        { khmer: 'មានគ្រោះថ្នាក់!', english: 'Emergency!', pronunciation: 'mien-kroh-tnak', difficulty: 'medium' },
        { khmer: 'ដាក់អុកស៊ីសែន', english: 'Give oxygen', pronunciation: 'dak-ok-si-sen', difficulty: 'hard' },
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
    { id: 'all', name: 'All Categories', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'medical', name: 'Medical Terms', icon: <Heart className="w-4 h-4" /> },
    { id: 'anatomy', name: 'Body Parts', icon: <Users className="w-4 h-4" /> },
    { id: 'symptoms', name: 'Symptoms', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'commands', name: 'Commands', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'questions', name: 'Questions', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'emergency', name: 'Emergency', icon: <AlertTriangle className="w-4 h-4" /> },
  ];

  const simulateAudio = (text) => {
    setAudioPlaying(text);
    // Simulate audio playback
    setTimeout(() => setAudioPlaying(null), 1500);
  };

  const startPractice = () => {
    setPracticeMode(true);
    setCurrentPracticeIndex(0);
    setShowAnswer(false);
    setUserAnswer('');
    setScore({ correct: 0, total: 0 });
  };

  const generateMultipleChoiceOptions = (correctAnswer) => {
    // Get all other entries except the current one
    const otherEntries = allEntries.filter(entry => entry.english !== correctAnswer);

    // Randomly select 3 wrong answers
    const wrongAnswers = [];
    const shuffledOthers = [...otherEntries].sort(() => Math.random() - 0.5);

    for (let i = 0; i < Math.min(3, shuffledOthers.length); i++) {
      wrongAnswers.push(shuffledOthers[i].english);
    }

    // Combine correct and wrong answers, then shuffle
    const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    return allOptions;
  };

  const checkAnswer = (selectedAnswer) => {
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

  const toggleFavorite = (khmer) => {
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

  const getDifficultyColor = (difficulty) => {
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

              <h2 className="text-4xl font-bold text-indigo-900 mb-4">{currentEntry.khmer}</h2>

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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-bold">Specialist</div>
            <span className="text-xs text-gray-600">Medical Khmer Module</span>
          </div>
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">🩺 Medical Terminology in Khmer</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Master essential medical vocabulary for communicating with Khmer-speaking patients. Learn pronunciation,
            cultural context, and practice with interactive exercises.
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
                placeholder="Search terms, translations, or pronunciations..."
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
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Start Practice
            </button>
          </div>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
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
                <p className="text-sm text-gray-600">Total Terms</p>
                <p className="text-2xl font-bold text-gray-900">{allEntries.length}</p>
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
                    {section.entries.length} terms
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

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
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

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
            <p className="text-indigo-100 mb-6">Test your knowledge with our interactive quiz system</p>
            <button
              onClick={startPractice}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
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

export default MedicalTerminologyLesson;