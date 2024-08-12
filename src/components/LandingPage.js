// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold mb-4">Flashcard Learning Tool</h1>
                <p className="text-lg mb-6">Enhance your knowledge with interactive flashcards.</p>
                <Link to="/flashcards">
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition ease-in-out duration-300">
                        Start Learning
                    </button>
                </Link>
            </header>
            <section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Why Use Our Flashcard Tool?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
                        <p>Engage with flashcards that flip to reveal answers, making learning more interactive and memorable.</p>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Customizable Flashcards</h3>
                        <p>Admins can easily add, edit, and delete flashcards to tailor the learning experience.</p>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
                        <p>Access the tool on any device with a clean and responsive design that adapts to your screen size.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
