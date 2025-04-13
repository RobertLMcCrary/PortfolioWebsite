'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Message sent successfully!',
                });
                // Clear form
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setSubmitStatus({
                    success: false,
                    message:
                        data.error ||
                        'Failed to send message. Please try again.',
                });
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'An error occurred. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center font-mono">
            {/* Header Section */}
            <header className="w-full py-12 bg-gray-800 text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-400">
                    Contact Me
                </h1>
                <p className="mt-4 text-md md:text-lg text-gray-400">
                    I&apos;d love to hear from you!
                </p>
            </header>

            <div className="w-[90vw] max-w-3xl py-12">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    {submitStatus && (
                        <div
                            className={`mb-6 p-4 rounded ${
                                submitStatus.success
                                    ? 'bg-green-800/50 text-green-300'
                                    : 'bg-red-800/50 text-red-300'
                            }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-green-400 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-green-400 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="block text-green-400 mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-green-400 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="6"
                                className="w-full bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded shadow-lg hover:bg-green-400 transition-colors ${
                                    isSubmitting
                                        ? 'opacity-70 cursor-not-allowed'
                                        : ''
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            <Link
                                href="/"
                                className="text-green-400 hover:text-green-300"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full py-6 bg-gray-800 text-gray-400 text-center mt-auto">
                <p className="mb-[5px]">
                    <a href="/">Robert McCrary</a>
                </p>
                <div className="flex justify-center space-x-8">
                    <a
                        href="https://github.com/RobertLMcCrary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/robertlmccrary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </footer>
        </div>
    );
}
