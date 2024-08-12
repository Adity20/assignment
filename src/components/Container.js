import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardContainer = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Flashcard
                question={flashcards[currentIndex].question}
                answer={flashcards[currentIndex].answer}
            />
            <div className="mt-4 flex justify-between w-full max-w-sm">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === flashcards.length - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlashcardContainer;
