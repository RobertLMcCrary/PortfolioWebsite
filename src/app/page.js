'use client';
//packages
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import Image from 'next/image';

//images
import hackathon2 from '../images/hackathon2.jpg';
import hackathon3 from '../images/hackathon3.jpg';
import nvim1 from '../images/nvim1.png';
import nvim2 from '../images/nvim2.png';
import nvim3 from '../images/nvim3.png';
import profilepic from '../images/profilepic.png';

import './globals.css';

function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center font-mono">
            {/* Header Section */}
            <header className="w-full py-12 bg-gray-800 text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-400">
                    Robert McCrary
                </h1>
                <p className="mt-4 text-md md:text-lg text-gray-400">
                    Web Development | Machine Learning | Embedded Systems
                </p>
                <button
                    onClick={() =>
                        window.open('/Robert-McCrary-Resume.pdf', '_blank')
                    }
                    className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-green-500 text-gray-900 font-semibold rounded shadow-lg hover:bg-green-400"
                >
                    View Resume
                </button>
            </header>

            {/* About Me Section */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold text-green-400">
                            About Me
                        </h2>
                        <p className="mt-4 text-gray-400">
                            Hello! I&apos;m Robert, a developer with a deep
                            passion for coding, problem-solving, and
                            contributing to open-source. I specialize in
                            crafting efficient, scalable, and maintainable
                            applications using modern technologies such as
                            Next.js, JavaScript, TypeScript, Go, Python, and
                            MongoDB.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src={profilepic}
                            alt="Robert McCrary"
                            width={300}
                            height={300}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700">
                <h2 className="text-3xl font-bold text-green-400">Projects</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project Card */}
                    <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-green-400">
                            PseudoAI
                        </h3>
                        <p className="mt-2 text-gray-400">
                            AI powered technical interview prep website build
                            with Next.js, JavaScript, Tailwindd CSS, and
                            MongoDB.
                        </p>
                        <div className="mt-4 flex justify-between">
                            <a
                                href="https://github.com/RobertLMcCrary/PseudoAI.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 underline"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://pseudoaidev.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 underline"
                            >
                                Visit Site
                            </a>
                        </div>
                    </div>

                    {/* Project Card */}
                    <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-green-400">
                            Compiler In Go
                        </h3>
                        <p className="mt-2 text-gray-400">
                            A recursive descent parser implemented in Go
                            featuring a REPL interface. Built to interpret a
                            custom language.
                        </p>
                        <div className="mt-4 flex">
                            <a
                                href="https://github.com/robertlmccrary/CompilerInGo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Project Card */}
                    <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-green-400">
                            NN From Scratch
                        </h3>
                        <p className="mt-2 text-gray-400">
                            A neural network built from first principles
                            implementing forward and backpropagation and XOR
                            operations.
                        </p>
                        <div className="mt-4 flex">
                            <a
                                href="https://github.com/RobertLMcCrary/NN-From-Scratch.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700">
                <h2 className="text-3xl font-bold text-green-400">
                    Achievements
                </h2>
                <div className="mt-8 space-y-4">
                    {/* Achievement Item */}
                    <div className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition">
                        <h3 className="text-xl font-semibold text-green-400">
                            KSU AI Club Hackathon - 1st Place
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Led the development of PseudoAI, an AI-powered
                            technical interview preparation platform. Built
                            using Next.js, JavaScript, Tailwind CSS, and
                            MongoDB, the project secured first place for its
                            innovative approach to interview preparation.
                        </p>
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-2 gap-4">
                            <Image
                                src={hackathon2}
                                alt="Project Presentation"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover rounded"
                            />
                            <Image
                                src={hackathon3}
                                alt="Award Ceremony"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>
                    {/* Repeat for other achievements */}
                </div>
            </section>

            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700">
                {/* Neovim Config Showcase */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">
                        My Development Environment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Image
                            src={nvim2}
                            alt="Neovim Configuration"
                            width={500}
                            height={300}
                            className="rounded shadow-lg"
                        />
                        <Image
                            src={nvim1}
                            alt="Neovim in Action"
                            width={500}
                            height={300}
                            className="rounded shadow-lg"
                        />
                        <Image
                            src={nvim3}
                            alt="Neovim in Action"
                            width={500}
                            height={300}
                            className="rounded shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* GitHub Calendar */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700 text-center">
                <h2 className="text-3xl font-bold text-green-400">
                    GitHub Activity
                </h2>
                <div className="mt-4 overflow-x-auto">
                    <GitHubCalendar
                        username="RobertLMcCrary"
                        colorScheme="dark"
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section className="w-[90vw] max-w-5xl py-12 border-b border-gray-700 text-center">
                <h2 className="text-3xl font-bold text-green-400">
                    Let&apos;s Connect
                </h2>
                <p className="mt-4 text-gray-400">
                    I&apos;m always open to new opportunities and collaborations
                </p>
                <div className="mt-6 flex justify-center gap-8">
                    <a
                        href="https://github.com/RobertLMcCrary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center gap-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/robertlmccrary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center gap-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="mailto:rlmccrary@gmail.com"
                        className="text-green-400 hover:text-green-300 flex items-center gap-2"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        Email
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="w-full py-6 bg-gray-800 text-gray-400 text-center">
                <p className="mb-[5px]">Robert McCrary</p>
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

export default Home;
