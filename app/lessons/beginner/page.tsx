'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const BeginnerPage = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const lessons = [
    {
      title: 'Khmer Alphabet (Consonants)',
      description: 'Learn the first group of Khmer consonants and their sounds.',
      tags: ['Alphabet', 'Reading', 'Pronunciation'],
      link: '/alphabet',
      sections: '3 Sections',
    },
    {
      title: 'Independent Vowels',
      description: 'Master stand-alone vowel characters in Khmer.',
      tags: ['Vowels', 'Reading'],
      link: '/vowels/independent',
      sections: '2 Sections',
    },
    {
      title: 'Greetings & Introductions',
      description: 'Say hello, introduce yourself, and be polite in conversation.',
      tags: ['Speaking', 'Politeness', 'Listening'],
      link: '/lessons/greetings',
      sections: '3 Sections',
    },
    {
      title: 'Numbers & Counting',
      description: 'Learn how to count, ask prices, and talk about quantity.',
      tags: ['Numbers', 'Vocabulary'],
      link: '/lessons/numbers',
      sections: '2 Sections',
    },
    {
      title: 'Simple Sentences',
      description: 'Form subject–verb–object sentences and ask yes/no questions.',
      tags: ['Grammar', 'Speaking'],
      link: '/lessons/sentences',
      sections: '3 Sections',
    },
    {
      title: 'Polite Phrases & Common Questions',
      description: 'Use “please,” “thank you,” and ask simple questions respectfully.',
      tags: ['Politeness', 'Daily Use'],
      link: '/lessons/polite',
      sections: '2 Sections',
    },
    {
      title: 'Family & People Words',
      description: 'Talk about relatives, friends, and pronouns.',
      tags: ['Vocabulary', 'Speaking'],
      link: '/lessons/family',
      sections: '2 Sections',
    },
    {
      title: 'Daily Verbs & Actions',
      description: 'Describe everyday actions and create simple routines.',
      tags: ['Verbs', 'Conversation'],
      link: '/lessons/actions',
      sections: '3 Sections',
    },
    {
      title: 'Food & Eating Out',
      description: 'Learn food vocabulary and how to order in Khmer.',
      tags: ['Food', 'Speaking', 'Culture'],
      link: '/lessons/food',
      sections: '3 Sections',
    },
  ];

  return (
    <main className="pb-0 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div id="homepage" className="page active">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-bold">Beginner</div>
              <h2 className="text-xs text-gray-600">Foundations Level</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
              >
                Toggle to {view === 'grid' ? 'List' : 'Grid'} View
              </button>
              <h2 className="text-xs text-gray-600">Module 1 • 9 Lessons • Start Here</h2>
            </div>
          </div>

          <div className={view === 'grid' ? 'grid md:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
            {lessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} view={view} />
            ))}
          </div>

          <div className="text-sm w-full text-center pt-8 text-gray-500 hover:underline cursor-pointer">
            Suggest a Lesson
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeginnerPage;

// === COMPONENT ===

type LessonCardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  sections?: string;
  comingSoon?: boolean;
  view?: 'grid' | 'list';
};

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  tags,
  link,
  sections,
  comingSoon = false,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col">
      <h3 className="text-indigo-600 text-md font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4 text-gray-700">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        {comingSoon ? (
          <button
            className="bg-indigo-300 text-white px-4 py-2 rounded text-sm cursor-not-allowed opacity-90"
            disabled
          >
            Coming Soon
          </button>
        ) : (
          <Link href={link || '#'}>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700"
              onClick={() => console.log(`Navigating to ${link}`)}
            >
              Start Section
            </button>
          </Link>
        )}
        {sections && <h2 className="text-sm text-gray-400">{sections}</h2>}
      </div>
    </div>
  );
};