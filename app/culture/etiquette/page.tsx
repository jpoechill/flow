'use client';

import React from 'react';

const EtiquettePage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">🙏 Daily Customs & Etiquette</h1>

            <p className="text-md text-gray-700 mb-6 leading-relaxed">
                In Cambodian culture, politeness is more than just manners — it’s a sign of respect, humility, and harmony.
                Learning Khmer means also understanding how to carry yourself in a way that honors tradition, especially when
                interacting with elders, monks, or in formal settings.
            </p>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🤲 The Sampeah (សំពះ)</h2>
            <p className="text-gray-700 mb-4">
                The <strong>Sampeah</strong> is the traditional Khmer greeting. It’s performed by placing your palms together in
                a prayer-like gesture and bowing slightly. The height of your hands shows the level of respect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Below the chest – for friends or younger people</li>
                <li>At the chin – for teachers, elders, or strangers</li>
                <li>At the nose or forehead – for monks or royalty</li>
            </ul>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🍚 Eating Etiquette</h2>
            <p className="text-gray-700 mb-4">
                Meals are typically shared. It’s polite to wait until the eldest person begins eating. Don’t stick your spoon
                into a shared dish, and avoid pointing your feet at others while sitting.
            </p>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🛕 Visiting Temples</h2>
            <p className="text-gray-700 mb-4">
                When visiting a pagoda or sacred site:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Dress modestly (covered shoulders and knees)</li>
                <li>Remove your shoes before entering buildings</li>
                <li>Never touch a monk or point at Buddha images</li>
                <li>Women should not hand objects directly to monks</li>
            </ul>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">👵 Elders & Respect</h2>
            <p className="text-gray-700 mb-4">
                Always greet elders with a Sampeah and soft tone. Use polite language like <strong>"som tooh"</strong> (sorry),
                <strong> "aw khun"</strong> (thank you), and <strong>"som" </strong>(please) in everyday speech. Never step over someone’s legs or interrupt a group of elders talking.
            </p>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🏠 Daily Interactions</h2>
            <p className="text-gray-700 mb-4">
                Cambodians value friendliness and humility. Loud voices or showing anger in public is considered shameful. When
                entering someone’s home, remove your shoes. If you hand something to someone, use both hands if possible.
            </p>

            <div className="border-t border-indigo-200 my-10"></div>

            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🌸 Cultural Wisdom</h2>
            <p className="text-gray-700 mb-6">
                “Politeness is the flower of humanity” — a value deeply rooted in Khmer proverbs and Buddhist teaching. When
                learning the language, practicing respectful behavior is just as important as speaking the words.
            </p>

            <div className="mt-10 text-sm text-gray-500">
                Want to practice polite phrases and greetings? Explore our Speaking modules or follow us on{' '}
                <a
                    href="https://facebook.com/oakkhmerangkor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                >
                    Facebook
                </a>{' '}
                for cultural videos and examples.
            </div>
        </div>
    );
};

export default EtiquettePage;
