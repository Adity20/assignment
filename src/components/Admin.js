// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { getFlashcards, addFlashcard, updateFlashcard, deleteFlashcard } from '../services/api';

const AdminDashboard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [form, setForm] = useState({ question: '', answer: '', id: null });

    useEffect(() => {
        loadFlashcards();
    }, []);

    const loadFlashcards = async () => {
        const response = await getFlashcards();
        setFlashcards(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.id) {
            await updateFlashcard(form.id, { question: form.question, answer: form.answer });
        } else {
            await addFlashcard({ question: form.question, answer: form.answer });
        }
        setForm({ question: '', answer: '', id: null });
        loadFlashcards();
    };

    const handleEdit = (flashcard) => {
        setForm(flashcard);
    };

    const handleDelete = async (id) => {
        await deleteFlashcard(id);
        loadFlashcards();
    };

    return (
        <div className="admin-dashboard p-4">
            <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Question"
                    value={form.question}
                    onChange={(e) => setForm({ ...form, question: e.target.value })}
                    className="p-2 border rounded mb-2"
                    required
                />
                <input
                    type="text"
                    placeholder="Answer"
                    value={form.answer}
                    onChange={(e) => setForm({ ...form, answer: e.target.value })}
                    className="p-2 border rounded mb-2"
                    required
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    {form.id ? 'Update Flashcard' : 'Add Flashcard'}
                </button>
            </form>
            <ul>
                {flashcards.map((flashcard) => (
                    <li key={flashcard.id} className="mb-2 flex justify-between items-center">
                        <div>
                            <strong>{flashcard.question}</strong>: {flashcard.answer}
                        </div>
                        <div>
                            <button onClick={() => handleEdit(flashcard)} className="px-4 py-2 bg-yellow-500 text-white rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(flashcard.id)} className="px-4 py-2 bg-red-500 text-white rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
