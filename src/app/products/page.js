'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import productsData from './products.json';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [availableTags, setAvailableTags] = useState([]);

    useEffect(() => {
        // Load products from JSON file
        setProducts(productsData);
        setFilteredProducts(productsData);

        // Extract all unique tags
        const tags = [];
        productsData.forEach((product) => {
            product.tags.forEach((tag) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        });
        setAvailableTags(tags.sort());
    }, []);

    useEffect(() => {
        // Filter products based on search term and selected tags
        let results = products;

        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            results = results.filter(
                (product) =>
                    product.name.toLowerCase().includes(term) ||
                    product.description.toLowerCase().includes(term) ||
                    product.tags.some((tag) => tag.toLowerCase().includes(term))
            );
        }

        // Filter by selected tags
        if (selectedTags.length > 0) {
            results = results.filter((product) =>
                selectedTags.some((tag) => product.tags.includes(tag))
            );
        }

        setFilteredProducts(results);
    }, [searchTerm, selectedTags, products]);

    const handleTagToggle = (tag) => {
        setSelectedTags((prevSelectedTags) => {
            if (prevSelectedTags.includes(tag)) {
                return prevSelectedTags.filter((t) => t !== tag);
            } else {
                return [...prevSelectedTags, tag];
            }
        });
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedTags([]);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center font-mono">
            {/* Header Section */}
            <header className="w-full py-12 bg-gray-800 text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-400">
                    Products
                </h1>
                <p className="mt-4 text-md md:text-lg text-gray-400">
                    Tools and resources to enhance your development workflow
                </p>
            </header>

            {/* Search and Filter Section */}
            <section className="w-[90vw] max-w-5xl py-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-700 text-white p-3 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <svg
                                className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-green-400 mb-2">
                            Filter by Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {availableTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagToggle(tag)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                        selectedTags.includes(tag)
                                            ? 'bg-green-500 text-gray-900'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-gray-400">
                            Showing {filteredProducts.length} of{' '}
                            {products.length} products
                        </div>
                        {(searchTerm || selectedTags.length > 0) && (
                            <button
                                onClick={clearFilters}
                                className="text-green-400 hover:text-green-300 text-sm flex items-center"
                            >
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                Clear filters
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="w-[90vw] max-w-5xl py-8">
                {filteredProducts.length === 0 ? (
                    <div className="bg-gray-800 p-8 rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-green-400 mb-4">
                            No products found
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Try adjusting your search or filter criteria.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-400"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>

            {/* Call to Action */}
            <section className="w-[90vw] max-w-5xl py-12 mb-12">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-gray-400 mb-6">
                        I can build custom tools and applications tailored to
                        your specific requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded shadow-lg hover:bg-green-400 inline-block"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
