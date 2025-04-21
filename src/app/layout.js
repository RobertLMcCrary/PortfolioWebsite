import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata = {
    title: 'Robert McCrary',
    description: 'Web | Mobile | AI',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
            >
                <Navbar />
                <div className="mt-[68px]">{children}</div>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
