'use client';

import React, { useState } from 'react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
            <h1 className="text-3xl font-bold text-indigo-600 mb-6">✉️ Contact Us</h1>

            <p className="text-gray-700 mb-8 text-md">
                Got a question, suggestion, or want to collaborate? Reach out using the form below or email us directly at{' '}
                <a
                    href="mailto:oakkhmerangkor@gmail.com"
                    className="text-indigo-600 hover:underline"
                >
                    oakkhmerangkor@gmail.com
                </a>
                .
            </p>

            {submitted ? (
                <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded mb-6">
                    Thanks for reaching out! We&apos;ll get back to you soon.
                </div>
            ) : (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                        // You can later hook into an API route here
                    }}
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            )}

            <div className="mt-10 text-sm text-gray-500">
                You can also find us on{' '}
                <a
                    href="https://facebook.com/oakkhmerangkor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                >
                    Facebook
                </a>{' '}
                or reach out by DM.
            </div>
        </div>
    );
};

export default ContactPage;
