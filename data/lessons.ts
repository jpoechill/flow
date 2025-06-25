export type Lesson = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  sections?: string;
  comingSoon?: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export const lessons: Lesson[] = [
  // Beginner
  {
    title: 'Alphabet & Pronunciation',
    description: 'Learn to read, write, and pronounce Khmer letters with step-by-step guidance.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/alphabet',
    sections: '3 Sections',
    level: 'Beginner',
  },
  {
    title: 'Greetings & Introductions',
    description: 'Practice common greetings, polite phrases, and how to introduce yourself clearly.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    comingSoon: true,
    level: 'Beginner',
  },
  {
    title: 'Numbers, Dates & Time',
    description: 'Master counting, telling time, and using dates in everyday Khmer conversations.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    comingSoon: true,
    level: 'Beginner',
  },

  // Intermediate
  {
    title: 'Conversational Khmer',
    description: 'Improve fluency with practical dialogues for daily routines, family, and activities.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    comingSoon: true,
    level: 'Intermediate',
  },
  {
    title: 'Time, Tense & Sequence',
    description: 'Understand how Khmer expresses past, present, and future using adverbs and markers.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    comingSoon: true,
    level: 'Intermediate',
  },
  {
    title: 'Khmer in Public',
    description: 'Learn useful phrases for shopping, dining, asking for help, and public transport.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    comingSoon: true,
    level: 'Intermediate',
  },

  // Advanced
  {
    title: 'Complex Sentence Structures',
    description: 'Build fluency with compound/complex sentences and advanced grammar.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/advanced-sentences',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Formal & Literary Registers',
    description: 'Explore elegant Khmer used in literature, speeches, and official communication.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/literary-registers',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Mastering Transitions',
    description: 'Use Khmer transition words fluently for smoother, more advanced communication.',
    tags: ['Flow', 'Natural Speech', 'Elegant Writing'],
    link: '/lessons/transitions',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Reading Khmer Literature & Nonfiction',
    description: 'Practice rhetorical strategies, tone, and emphasis to persuade and impress.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/literature-reading',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Idioms, Proverbs & Figurative Language',
    description: 'Practice using expressions and metaphors common in Khmer culture.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/figurative-language',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Advanced Listening & Interpreting',
    description: 'Sharpen your ear and mind for fast, nuanced Khmer speech.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/advanced-listening',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Advanced Rules & Grammar',
    description: 'Refine your grammar for high-level writing and speaking.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/advanced-grammar',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Khmer Public Speaking',
    description: 'Deliver strong, confident speeches in Khmer for ceremonies or debates.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/public-speaking',
    sections: '4 Sections',
    level: 'Advanced',
  },
  {
    title: 'Advanced Listening & Transcription',
    description: 'Transcribe real Khmer speech and learn from native rhythms and tone.',
    tags: ['Speaking', 'Listening', 'Politeness'],
    link: '/lessons/transcription',
    sections: '4 Sections',
    level: 'Advanced',
  },
];
