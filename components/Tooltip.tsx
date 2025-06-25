'use client';

import React, { useState } from 'react';

type TooltipProps = {
    word: string;              // Khmer word
    translation: string;       // English translation (short)
    definition?: string;       // Optional extended English definition
    transliteration: string;   // Romanized Khmer
    example?: string;          // Optional usage
    href?: string;
    vocabId?: string;
};

const Tooltip: React.FC<TooltipProps> = ({
    word,
    translation,
    definition,
    transliteration,
    example,
    href,
    vocabId,
}) => {
    const [hovering, setHovering] = useState(false);

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <a
                href={href || (vocabId ? `#${vocabId}` : undefined)}
                className="font-semibold text-indigo-600 hover:underline cursor-pointer"
            >
                {word}
            </a>

            {hovering && (
                <div className="absolute z-50 top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-sm text-gray-800 transition duration-200">
                    {/* Khmer Word */}
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Khmer</p>
                    <p className="text-md font-semibold text-gray-900 mb-2">{word}</p>

                    {/* English Translation */}
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Translation</p>
                    <p className="text-base font-bold text-indigo-700 mb-2">{translation}</p>

                    {/* Optional Extended Definition */}
                    {definition && (
                        <>
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Definition</p>
                            <p className="text-sm text-gray-700 mb-2">{definition}</p>
                        </>
                    )}

                    {/* Transliteration */}
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Transliteration</p>
                    <p className="text-xs italic text-gray-600 mb-2">[{transliteration}]</p>

                    {/* Optional Example */}
                    {example && (
                        <>
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Example</p>
                            <p className="text-gray-700 italic">“{example}”</p>
                        </>
                    )}
                </div>
            )}
        </span>
    );
};

export default Tooltip;
