'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const lessons = [
    {
      title: 'Complex Sentence Structures',
      description: 'Build fluency with compound/complex sentences and advanced grammar.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_1.html',
      sections: '4 Sections',
    },
    {
      title: 'Formal & Literary Registers',
      description: 'Explore elegant Khmer used in literature, speeches, and official communication.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_1.html',
      sections: '4 Sections',
    },
    {
      title: 'Mastering Transitions',
      description: 'Learn to use Khmer transition words fluently for smoother, more advanced communication.',
      tags: ['Flow', 'Natural Speech', 'Elegant Writing'],
      link: '3_1.html',
      sections: '4 Sections',
    },
    {
      title: 'Reading Khmer Literature & Nonfiction',
      description: 'Practice using rhetorical strategies, tone, and emphasis to persuade and impress.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_1.html',
      sections: '4 Sections',
    },
    {
      title: 'Idioms, Proverbs & Figurative Language',
      description: 'Practice using rhetorical strategies, tone, and emphasis to persuade and impress.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_5.html',
      sections: '4 Sections',
    },
    {
      title: 'Advance Listening and Interpreting',
      description: 'Practice using rhetorical strategies, tone, and emphasis to persuade and impress.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_1.html',
      sections: '4 Sections',
    },
    {
      title: 'Advance Rules and Grammar',
      description: 'Practice using rhetorical strategies, tone, and emphasis to persuade and impress.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_4.html',
      sections: '4 Sections',
    },
    {
      title: 'Khmer Public Speaking',
      description: 'Practice using rhetorical strategies, tone, and emphasis to persuade and impress.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_1.html',
      sections: '4 Sections',
    },
    {
      title: 'Advanced Listening & Transcription',
      description: 'Practice using rhetorical strategies, tone, and emphasis to persuade and impress.',
      tags: ['Speaking', 'Listening', 'Politeness'],
      link: '3_1.html',
      sections: '4 Sections',
    },
  ];

  return (
    <main className="pb-0 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div id="homepage" className="page active">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-bold">Advanced</div>
              <h2 className="text-xs text-gray-600">Mastery Level</h2>
            </div>
            <h2 className="text-xs text-gray-600">Module 3 • 12 Lessons • See All</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>

          <div className="text-sm w-full text-center pt-8">
            Suggest a Lesson
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

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
      <p className="text-sm mb-4">{description}</p>

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
