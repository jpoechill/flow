'use client';

import React from 'react';
import Link from 'next/link';

const SpecialistPage = () => {
  const lessons = [
    {
      title: 'Medical Terminology in Khmer',
      description: 'Master key anatomy, symptoms, and patient communication terms in Khmer.',
      tags: ['Medical', 'Vocabulary', 'Professional'],
      link: '/lessons/specialist/medical-terms',
      sections: '4 Sections',
    },
    {
      title: 'Live Interpretation Skills',
      description: 'Practice rapid listening, memory retention, and rephrasing techniques.',
      tags: ['Interpreting', 'Listening', 'Speaking'],
      link: '/lessons/interpretation',
      sections: '3 Sections',
    },
    {
      title: 'Technical & Legal Vocabulary',
      description: 'Learn words for documents, contracts, and formal negotiations.',
      tags: ['Legal', 'Professional', 'Writing'],
      link: '/lessons/legal-terms',
      sections: '3 Sections',
    },
    {
      title: 'Hospital & Emergency Dialogues',
      description: 'Practice conversations between medical staff and patients.',
      tags: ['Healthcare', 'Dialogue'],
      link: '/lessons/hospital-dialogue',
      sections: '3 Sections',
    },
    {
      title: 'Khmer for Public Service',
      description: 'Train to communicate with the public in official or civic roles.',
      tags: ['Government', 'Speaking'],
      link: '/lessons/public-service',
      sections: '2 Sections',
    },
    {
      title: 'Translation Strategies',
      description: 'Handle nuance, tone, and formal language when translating between Khmer and English.',
      tags: ['Translation', 'Bilingual Skills'],
      link: '/lessons/translation',
      sections: '3 Sections',
    },
    {
      title: 'Health Education & Community Outreach',
      description: 'Create health flyers, speak to groups, and answer public health questions.',
      tags: ['Outreach', 'Speaking', 'Cultural'],
      link: '/lessons/health-education',
      sections: '3 Sections',
    },
    {
      title: 'Legal Interpreting Ethics',
      description: 'Understand interpreter roles, neutrality, and code of conduct.',
      tags: ['Ethics', 'Professional'],
      link: '/lessons/interpreter-ethics',
      sections: '2 Sections',
    },
    {
      title: 'Advanced Forms & Documentation',
      description: 'Navigate Khmer-language forms used in clinics, courts, and public offices.',
      tags: ['Documents', 'Forms', 'Reading'],
      link: '/lessons/forms',
      sections: '3 Sections',
    },
  ];

  return (
    <main className="pb-0 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div id="homepage" className="page active">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="text-xs bg-teal-600 text-white px-3 py-1 rounded-full font-bold">Specialist</div>
              <h2 className="text-xs text-gray-600">Professional Use</h2>
            </div>
            <h2 className="text-xs text-gray-600">Module 4 • 9 Lessons • Applied Learning</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>

          <div className="text-sm w-full text-center pt-8 text-gray-500 hover:underline cursor-pointer">
            Suggest a Specialist Lesson
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecialistPage;

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
