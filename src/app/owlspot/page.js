'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function OwlSpotDemo() {
    const videoRef = useRef(null);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center font-mono">
            {/* Header Section */}
            <header className="w-full py-12 bg-gray-800 text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-400">
                    OwlSpot Demo
                </h1>
                <p className="mt-4 text-md md:text-lg text-gray-400">
                    AI-assisted parking solution for Kennesaw State University
                </p>
            </header>

            {/* Video Section */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold text-green-400">
                        Demo Video
                    </h2>
                    <p className="mt-4 text-gray-400 text-center max-w-3xl">
                        This project integrates real-time CCTV footage with a
                        computer vision model to detect available parking spots.
                        Built with React Native, Node.js, Express.js, and Flask.
                    </p>

                    <div className="w-full max-w-4xl mt-6 overflow-hidden rounded-lg shadow-lg">
                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            className="w-full"
                        >
                            <source
                                src="/hackathon_demo.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="flex justify-center mt-6">
                        <Link
                            href="/"
                            className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded shadow-lg hover:bg-green-400 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            {/* Project Details Section */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700">
                <h2 className="text-3xl font-bold text-green-400">
                    Project Details
                </h2>
                <div className="mt-6 bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-400">
                        OwlSpot is an AI-assisted mobile app for smart parking
                        at Kennesaw State University events. This award-winning
                        project demonstrates the integration of computer vision
                        with mobile app technology to create a practical
                        solution to campus parking challenges.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-green-400">
                            Technologies Used:
                        </h3>
                        <ul className="list-disc list-inside mt-2 text-gray-400">
                            <li>
                                React Native for cross-platform mobile
                                development
                            </li>
                            <li>Node.js and Express for backend API</li>
                            <li>
                                Python and Flask for the computer vision service
                            </li>
                            <li>TensorFlow for object detection model</li>
                            <li>
                                Real-time CCTV integration for live footage
                                analysis
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

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
