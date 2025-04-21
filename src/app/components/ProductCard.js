'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="h-48 relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2">
                    {product.name}
                </h3>
                <p className="text-gray-400 mb-4 h-24 overflow-hidden">
                    {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-400">
                        {product.price}
                    </span>
                    <Link
                        href={`/products/${product.id}`}
                        className="px-4 py-2 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-400 transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
