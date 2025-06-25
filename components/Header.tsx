'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [isLessonsOpen, setIsLessonsOpen] = useState(false);
    const [isPracticeOpen, setIsPracticeOpen] = useState(false);

    const isActive = (href: string) => pathname.startsWith(href);

    return (
        <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
                <Link href="/" className="text-xl font-bold tracking-wide hover:text-indigo-200 transition">
                    🇰🇭 LingoKhmer
                </Link>

                <nav className="hidden md:flex gap-6 text-sm font-medium relative">
                    {/* Lessons Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsLessonsOpen(true)}
                        onMouseLeave={() => setIsLessonsOpen(false)}
                    >
                        <span className="cursor-pointer hover:text-indigo-200 transition py-4">
                            Lessons ▾
                        </span>

                        <div
                            className={`absolute left-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg overflow-hidden transition-opacity duration-200 ${isLessonsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}
                        >
                            <Link href="/lessons/beginner" className={`block px-4 py-2 hover:bg-indigo-100 ${isActive('/lessons/beginner') ? 'bg-indigo-100 font-semibold text-indigo-700' : ''}`}>
                                Beginner
                            </Link>
                            <Link href="/lessons/intermediate" className={`block px-4 py-2 hover:bg-indigo-100 ${isActive('/lessons/intermediate') ? 'bg-indigo-100 font-semibold text-indigo-700' : ''}`}>
                                Intermediate
                            </Link>
                            <Link href="/lessons/advanced" className={`block px-4 py-2 hover:bg-indigo-100 ${isActive('/lessons/advanced') ? 'bg-indigo-100 font-semibold text-indigo-700' : ''}`}>
                                Advanced
                            </Link>

                            <div className="border-t border-gray-200 my-1" />

                            <Link href="/lessons/specialist" className={`block px-4 py-2 hover:bg-indigo-100 text-sm font-semibold ${isActive('/lessons/specialist') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-800'}`}>
                                Specialist
                            </Link>
                        </div>
                    </div>

                    {/* Practice Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsPracticeOpen(true)}
                        onMouseLeave={() => setIsPracticeOpen(false)}
                    >
                        <span className="cursor-pointer hover:text-indigo-200 transition py-4">
                            Practice ▾
                        </span>

                        <div
                            className={`absolute left-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg overflow-hidden transition-opacity duration-200 ${isPracticeOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}
                        >
                            <Link href="/reading" className={`block px-4 py-2 hover:bg-indigo-100 ${isActive('/practice/reading') ? 'bg-indigo-100 font-semibold text-indigo-700' : ''}`}>
                                Reading Practice
                            </Link>
                            <Link href="/practice/quiz" className={`block px-4 py-2 hover:bg-indigo-100 ${isActive('/practice/quiz') ? 'bg-indigo-100 font-semibold text-indigo-700' : ''}`}>
                                Quizzes
                            </Link>
                            <Link href="/practice/audio" className={`block px-4 py-2 hover:bg-indigo-100 ${isActive('/practice/audio') ? 'bg-indigo-100 font-semibold text-indigo-700' : ''}`}>
                                Audio Drills
                            </Link>
                        </div>
                    </div>

                    {/* Other Nav */}
                    {/* <Link href="/culture" className={`hover:text-indigo-200 transition ${isActive('/culture') ? 'font-bold underline underline-offset-4' : ''}`}>
                        Culture
                    </Link> */}
                    <Link href="/about" className={`hover:text-indigo-200 transition ${isActive('/about') ? 'font-bold underline underline-offset-4' : ''}`}>
                        About
                    </Link>
                    <Link href="/contact" className={`hover:text-indigo-200 transition ${isActive('/contact') ? 'font-bold underline underline-offset-4' : ''}`}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
