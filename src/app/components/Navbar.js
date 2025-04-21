'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800 shadow-lg py-3' : 'bg-gray-800 py-5'
            }`}
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-center items-center">
                    <ul className="flex space-x-12">
                        <li>
                            <Link
                                href="/"
                                className={`text-lg font-medium transition-colors ${
                                    pathname === '/'
                                        ? 'text-green-400 border-b-2 border-green-400 pb-1'
                                        : 'text-gray-300 hover:text-green-400'
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className={`text-lg font-medium transition-colors ${
                                    pathname === '/products'
                                        ? 'text-green-400 border-b-2 border-green-400 pb-1'
                                        : 'text-gray-300 hover:text-green-400'
                                }`}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`text-lg font-medium transition-colors ${
                                    pathname === '/contact'
                                        ? 'text-green-400 border-b-2 border-green-400 pb-1'
                                        : 'text-gray-300 hover:text-green-400'
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
