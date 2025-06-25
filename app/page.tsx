'use client';

import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Hero */}
      <div className="px-4 py-16 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
          🇰🇭 Learn Khmer with Confidence
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
          Dive into reading, speaking, and understanding Khmer through cultural lessons, interactive tools, and real-world examples.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/alphabet">
            <span className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition">
              Start Learning
            </span>
          </Link>
          <Link href="/culture">
            <span className="bg-white text-indigo-600 px-6 py-3 rounded-md border border-indigo-600 font-semibold hover:bg-indigo-50 transition">
              Explore Culture
            </span>
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4 md:px-8 mb-20">
        {[
          {
            title: '🅰️ Khmer Alphabet',
            description: 'Master consonants and vowels with sound-based guidance and animations.',
            href: '/alphabet',
          },
          {
            title: '🔊 Pronunciation Lab',
            description: 'Practice authentic pronunciation and listen to native audio.',
            href: '/pronunciation',
          },
          {
            title: '🧠 Flashcard Trainer',
            description: 'Build vocabulary with visual and auditory flashcard drills.',
            href: '/flashcards',
          },
          {
            title: '📝 Grammar Builder',
            description: 'Understand sentence structure, verb forms, and question particles.',
            href: '/grammar',
          },
          {
            title: '📖 Reading Practice',
            description: 'Start with syllables and work up to full stories and dialogue.',
            href: '/reading',
          },
          {
            title: '🏯 Khmer Culture',
            description: 'Learn through festivals, traditions, and Cambodian worldviews.',
            href: '/culture',
          },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition hover:scale-[1.01]"
          >
            <h3 className="text-indigo-600 font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </Link>
        ))}
      </div>

      {/* Learning Path */}
      <div className="bg-white py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-8">📚 A Guided Learning Path</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: '🎯 Beginner',
              content: 'Learn the alphabet, common phrases, greetings, and survival vocabulary.',
            },
            {
              title: '🚀 Intermediate',
              content: 'Improve pronunciation, sentence structure, and reading fluency.',
            },
            {
              title: '🎓 Advanced',
              content: 'Master formal registers, storytelling, and real-world conversation practice.',
            },
          ].map((level, i) => (
            <div key={i} className="bg-indigo-50 p-6 rounded shadow">
              <h3 className="font-semibold text-indigo-700 mb-2">{level.title}</h3>
              <p className="text-gray-700">{level.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="py-16 px-4 md:px-16 bg-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">🔁 How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            'Choose your level and topic',
            'Study through guided lessons',
            'Practice with flashcards and audio',
            'Track your growth and review',
          ].map((step, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <p className="font-semibold text-indigo-600 text-lg mb-2">Step {i + 1}</p>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Highlights */}
      <div className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">🆕 New This Month</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'New: Khmer Proverbs Lesson',
              desc: 'Explore wisdom through common expressions and metaphors.',
            },
            {
              title: 'Added: Food Vocabulary Set',
              desc: '20+ new words with pictures and pronunciation practice.',
            },
            {
              title: 'Update: Advanced Grammar Tips',
              desc: 'Now with sentence breakdowns and PDF downloads.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-indigo-50 p-6 rounded shadow">
              <h3 className="text-lg font-semibold text-indigo-700 mb-1">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips & Teaching Notes */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📚 Language Tips</h2>
          <p className="text-md mb-4">
            Khmer is a syllabic language—focus on syllable chunks instead of individual letters.
          </p>
          <p className="text-md mb-4">
            Don’t worry about mastering everything at once. Repetition and immersion are key.
          </p>
          <p className="text-md">
            Cultural understanding boosts language learning. Explore customs and etiquette alongside grammar.
          </p>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-white py-16 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">📬 Stay Updated</h2>
        <p className="text-gray-700 mb-6">Get Khmer phrases, updates, and culture notes in your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
