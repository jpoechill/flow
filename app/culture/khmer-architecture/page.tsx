'use client';

import React from 'react';

const ArchitecturePage = () => {
    return (
        <div className="page px-4 py-10 md:px-16 lg:px-24 bg-white min-h-screen">
            <div className="bg-white p-8 rounded-xl shadow mb-10">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">🏯 Khmer Architecture & Temples</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Khmer architecture reflects a deep connection between spirituality, symbolism, and artistry. From ancient temples to royal palaces, the designs are rich with meaning and beauty.
                </p>

                {/* Section: Angkorian Temples */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🛕 Angkorian Temples</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                        <li>
                            <strong>Angkor Wat:</strong> The world’s largest religious monument, built in the 12th century, symbolizes Mount Meru and is dedicated to Vishnu.
                        </li>
                        <li>
                            <strong>Bayon Temple:</strong> Known for its serene stone faces, located in Angkor Thom, representing Avalokiteshvara or King Jayavarman VII.
                        </li>
                        <li>
                            <strong>Ta Prohm:</strong> A jungle temple left largely unrestored to showcase the power of nature reclaiming man-made structures.
                        </li>
                    </ul>
                </section>

                {/* Section: Architectural Features */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">📐 Key Features of Khmer Architecture</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <h3 className="font-bold text-indigo-700 mb-2">Stepped Pyramidal Towers (Prasats)</h3>
                            <p>Symbolize the cosmic mountain. Each tower often represents a deity and serves as the temple’s central shrine.</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <h3 className="font-bold text-indigo-700 mb-2">Intricate Bas-Reliefs</h3>
                            <p>Carvings of celestial dancers (apsaras), Hindu epics, and Khmer history line the gallery walls of temples like Angkor Wat.</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <h3 className="font-bold text-indigo-700 mb-2">Moats & Causeways</h3>
                            <p>Represent oceans and spiritual journeys. Crossing the causeway symbolizes entering the sacred space of the gods.</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <h3 className="font-bold text-indigo-700 mb-2">Sandstone & Laterite</h3>
                            <p>Primary building materials used for strength and detail. Sandstone allowed for fine carving work.</p>
                        </div>
                    </div>
                </section>

                {/* Section: Cultural Importance */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🌏 Cultural Importance</h2>
                    <p className="text-gray-700 mb-4">
                        Khmer temples were not only places of worship but centers of education, astronomy, and governance. Many were aligned with celestial events and served as visual representations of Khmer cosmology.
                    </p>
                    <p className="text-gray-700">
                        Today, these architectural wonders remain vital to Cambodian national identity and continue to inspire art, dance, and design throughout the country.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ArchitecturePage;
