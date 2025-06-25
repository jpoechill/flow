'use client';

import React from 'react';
import Link from 'next/link';

const IntermediatePage = () => {
  const lessons = [
    {
      title: 'Subscript Consonants & Clusters',
      description: 'Learn how consonants combine with subscripts to form complex words.',
      tags: ['Reading', 'Pronunciation', 'Writing'],
      link: '/lessons/clusters',
      sections: '3 Sections',
    },
    {
      title: 'Sentence Expansion with Adjectives & Adverbs',
      description: 'Make your sentences more descriptive using modifiers.',
      tags: ['Grammar', 'Speaking'],
      link: '/lessons/expand-sentences',
      sections: '2 Sections',
    },
    {
      title: 'Asking & Answering Questions',
      description: 'Use question particles and learn how to give natural responses.',
      tags: ['Conversation', 'Politeness'],
      link: '/lessons/questions',
      sections: '3 Sections',
    },
    {
      title: 'Describing Time & Daily Routines',
      description: 'Talk about time, schedules, and how often things happen.',
      tags: ['Vocabulary', 'Daily Use'],
      link: '/lessons/time',
      sections: '3 Sections',
    },
    {
      title: 'Using Measure Words & Counters',
      description: 'Learn the Khmer way of counting people, objects, and money.',
      tags: ['Grammar', 'Culture'],
      link: '/lessons/counters',
      sections: '2 Sections',
    },
    {
      title: 'Transition Words for Flow',
      description: 'Use words like "because", "then", "however" for smoother speech.',
      tags: ['Flow', 'Speech'],
      link: '/lessons/transitions',
      sections: '3 Sections',
    },
    {
      title: 'Common Sentence Patterns',
      description: 'Practice sentence types like comparisons, reasons, and cause-effect.',
      tags: ['Structure', 'Speaking'],
      link: '/lessons/patterns',
      sections: '3 Sections',
    },
    {
      title: 'Giving Directions & Location',
      description: 'Ask for and explain directions, places, and movement.',
      tags: ['Travel', 'Listening'],
      link: '/lessons/directions',
      sections: '2 Sections',
    },
    {
      title: 'Conversation Practice Scenarios',
      description: 'Role-play and follow dialogues to improve fluency.',
      tags: ['Speaking', 'Fluency', 'Listening'],
      link: '/lessons/conversations',
      sections: '4 Sections',
    },
  ];

  return (
    <main className="pb-0 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div id="homepage" className="page active">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full font-bold">Intermediate</div>
              <h2 className="text-xs text-gray-600">Progression Level</h2>
            </div>
            <h2 className="text-xs text-gray-600">Module 2 • 9 Lessons • Keep Going</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
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

export default IntermediatePage;

// === COMPONENT ===

type LessonCardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  sections?: string;
  comingSoon?: boolean;
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
