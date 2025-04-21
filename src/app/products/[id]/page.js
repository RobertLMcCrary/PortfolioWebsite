'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import productsData from '../products.json';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //find the product with the matching ID
        const foundProduct = productsData.find((p) => p.id === id);
        setProduct(foundProduct);
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
                <div className="text-green-400 text-xl">Loading...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center">
                <h1 className="text-3xl text-green-400 mb-4">
                    Product Not Found
                </h1>
                <p className="text-gray-400 mb-6">
                    The product you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link
                    href="/products"
                    className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-400"
                >
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center font-mono">
            {/* Product Detail */}
            <div className="w-[90vw] max-w-5xl py-12">
                <Link
                    href="/products"
                    className="text-green-400 hover:text-green-300 mb-8 inline-flex items-center"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        ></path>
                    </svg>
                    Back to Products
                </Link>

                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <div className="md:flex">
                        <div className="md:w-1/2 h-64 md:h-auto relative">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <h1 className="text-3xl font-bold text-green-400 mb-4">
                                {product.name}
                            </h1>
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
                            <p className="text-gray-400 mb-6">
                                {product.description}
                            </p>
                            <div className="text-2xl font-bold text-green-400 mb-6">
                                {product.price}
                            </div>
                            <button className="w-full px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded hover:bg-green-400 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className="p-8 border-t border-gray-700">
                        <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Product Details
                        </h2>
                        <p className="text-gray-400 mb-6">
                            {product.longDescription || product.description}
                        </p>

                        {product.features && (
                            <div className="mt-6">
                                <h3 className="text-xl font-bold text-green-400 mb-3">
                                    Key Features
                                </h3>
                                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="p-8 border-t border-gray-700 bg-gray-800/50">
                        <h2 className="text-2xl font-bold text-green-400 mb-4">
                            Related Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {productsData
                                .filter(
                                    (p) =>
                                        p.id !== product.id &&
                                        p.tags.some((tag) =>
                                            product.tags.includes(tag)
                                        )
                                )
                                .slice(0, 3)
                                .map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.id}
                                        href={`/products/${relatedProduct.id}`}
                                        className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
                                    >
                                        <div className="h-32 relative mb-2">
                                            <Image
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <h3 className="text-green-400 font-bold">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            {relatedProduct.price}
                                        </p>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-gray-800 p-8 rounded-lg shadow-lg text-center">
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
            </div>
        </div>
    );
}
