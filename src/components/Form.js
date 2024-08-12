// src/components/FlashcardForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlashcardForm = ({ fetchFlashcards, editingFlashcard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (editingFlashcard) {
            setQuestion(editingFlashcard.question);
            setAnswer(editingFlashcard.answer);
        }
    }, [editingFlashcard]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingFlashcard) {
            await axios.put(`/api/flashcards/${editingFlashcard.id}`, { question, answer });
        } else {
            await axios.post('/api/flashcards', { question, answer });
        }

        setQuestion('');
        setAnswer('');
        fetchFlashcards();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
                <label className="block mb-1">Question</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1">Answer</label>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                />
            </div>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
                {editingFlashcard ? 'Update Flashcard' : 'Add Flashcard'}
            </button>
        </form>
    );
};

export default FlashcardForm;
