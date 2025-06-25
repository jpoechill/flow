'use client';

import React from 'react';

const CambodianCuisinePage = () => {
    return (
        <div className="page px-4 py-10 md:px-16 lg:px-24 bg-white min-h-screen">
            <div className="bg-white p-8 rounded-xl shadow mb-10">
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">🍲 Cambodian Cuisine</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Khmer cuisine is all about balance—sweet, salty, sour, and bitter flavors come together in every dish.
                    Cambodian food is deeply tied to local ingredients, family gatherings, and traditional celebrations.
                </p>

                {/* Section: Popular Dishes */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🍛 Signature Dishes</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                        <li>
                            <strong>អាម៉ុក (Amok):</strong> A rich, steamed fish curry in banana leaves—often considered Cambodia’s national dish.
                        </li>
                        <li>
                            <strong>សម្លកកូរ (Samlor Korkor):</strong> A hearty vegetable and fish soup flavored with fermented fish paste and crushed rice.
                        </li>
                        <li>
                            <strong>បាយសាច់ជ្រូក (Bai Sach Chrouk):</strong> Grilled pork served over rice, often with pickled veggies and soup—popular for breakfast.
                        </li>
                        <li>
                            <strong>នំបញ្ចុក (Num Banh Chok):</strong> Fresh rice noodles with green fish curry and crisp herbs, typically eaten for breakfast or lunch.
                        </li>
                    </ul>
                </section>

                {/* Section: Food Culture */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🍴 Food & Culture</h2>
                    <p className="text-gray-700 mb-4">
                        Meals are often shared family-style, with everyone eating from shared dishes placed in the center.
                        Rice is a staple at almost every meal, and fermented fish paste (prahok) is a common flavor base.
                    </p>
                    <p className="text-gray-700">
                        Khmer New Year, Pchum Ben, and weddings often feature special dishes, desserts, and ceremonial foods.
                    </p>
                </section>

                {/* Section: Common Phrases */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-600 mb-4">🗣️ Useful Food Phrases in Khmer</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <p className="font-bold text-indigo-700 mb-1">ខ្ញុំឃ្លាន (Khnhom khlean)</p>
                            <p>I’m hungry.</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <p className="font-bold text-indigo-700 mb-1">នេះជារសជាតិឆ្ងាញ់ណាស់! (Nih chea ros cheat chnganh nas!)</p>
                            <p>This tastes delicious!</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <p className="font-bold text-indigo-700 mb-1">តើអ្នកមានអាហារបន្លែទេ? (Tae anak mean aha banh lea te?)</p>
                            <p>Do you have vegetarian food?</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded shadow">
                            <p className="font-bold text-indigo-700 mb-1">សូមអាហារម្ហូបជាតិខ្មែរ (Soum aha mhob cheat Khmer)</p>
                            <p>I’d like a traditional Khmer dish, please.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CambodianCuisinePage;
