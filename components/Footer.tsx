'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                {/* Language Switcher */}
                <div>
                    <h3 className="font-semibold mb-2">🌐 Language</h3>
                    <select
                        className="bg-white text-gray-700 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none"
                        onChange={(e) => console.log(`Switch to: ${e.target.value}`)}
                    >
                        <option value="en">English</option>
                        <option value="km">ភាសាខ្មែរ</option>
                    </select>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold mb-2">🔗 Connect</h3>
                    <div className="flex gap-4 items-center">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg className="w-5 h-5 fill-current hover:text-blue-300" viewBox="0 0 24 24">
                                <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2v-2.88h2V9.41c0-2 1.2-3.11 3.04-3.11.88 0 1.79.16 1.79.16v1.97h-1.01c-1 0-1.31.62-1.31 1.25v1.51h2.22l-.35 2.88h-1.87v6.99A10 10 0 0 0 22 12z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg className="w-5 h-5 fill-current hover:text-pink-300" viewBox="0 0 24 24">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                            </svg>
                        </a>
                        <a href="mailto:example@email.com" aria-label="Email">
                            <svg className="w-5 h-5 fill-current hover:text-indigo-300" viewBox="0 0 24 24">
                                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01l8 5.24 8-5.24V6H4zm16 12V9.24l-7.4 4.85a1 1 0 0 1-1.2 0L4 9.24V18h16z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="font-semibold mb-2">📃 Legal</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/terms" className="hover:underline hover:text-indigo-200">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:underline hover:text-indigo-200">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-xs text-indigo-100 pb-6">
                © {new Date().getFullYear()} KhmerLingo. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
