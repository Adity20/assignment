import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlashcardContainer from './components/Container';
import AdminDashboard from './components/Admin';
import LandingPage from './components/LandingPage'; // New Landing Page Component

function App() {
    const [flashcards, setFlashcards] = useState([
        { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
        { question: 'What is a component?', answer: 'A reusable piece of UI.' },
        { question: 'What is JSX?', answer: 'A syntax extension for JavaScript.' },
        { question: 'What is Babel?', answer: 'A JavaScript compiler.' },
        // Additional flashcards can be added here
    ]);

    return (
        <Router>
            <div className="App min-h-screen flex flex-col">
                <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        <Link to="/" className="hover:text-yellow-300">Flashcard Learning Tool</Link>
                    </h1>
                    <nav>
                        <Link to="/flashcards" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Flashcards</Link>
                        <Link to="/admin" className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Admin Dashboard</Link>
                    </nav>
                </header>
                <main className="flex-1 p-4">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/flashcards" element={<FlashcardContainer flashcards={flashcards} />} />
                        <Route path="/admin" element={<AdminDashboard setFlashcards={setFlashcards} />} />
                    </Routes>
                </main>
                <footer className="bg-gray-800 text-white text-center p-4">
                    &copy; 2024 Flashcard Learning Tool. All rights reserved.
                </footer>
            </div>
        </Router>
    );
}

export default App;
