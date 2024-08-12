// src/components/Flashcard.js
import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`relative w-64 h-40 cursor-pointer transform transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="absolute w-full h-full flex items-center justify-center bg-white p-4 rounded-lg shadow-lg">
                <div className={`w-full h-full absolute bg-white text-gray-800 rounded-lg shadow-lg flex items-center justify-center backface-hidden p-4 ${isFlipped ? 'hidden' : 'block'}`}>
                    <h2 className="text-xl font-bold text-center">{question}</h2>
                </div>
                <div className={`w-full h-full absolute bg-blue-500 text-white rounded-lg shadow-lg flex items-center justify-center rotate-y-180 backface-hidden p-4 ${isFlipped ? 'block' : 'hidden'} flex items-center justify-center bg-blue-500 text-white`}>
                    <h2 className="text-xl font-bold text-center">{answer}</h2>
                </div>
            </div>  
        </div>
    );
};

export default Flashcard;
// src/components/Flashcard.js
// import React, { useState } from 'react';

// const Flashcard = ({ question, answer }) => {
//     const [isFlipped, setIsFlipped] = useState(false);

//     return (
//         <div className="relative w-64 h-40 cursor-pointer perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
//             <div
//                 className={`absolute w-full h-full transform ${isFlipped ? 'rotate-y-180' : ''} transition-transform duration-500 ease-in-out`}
//             >
//                 <div className="w-full h-full absolute bg-white text-gray-800 rounded-lg shadow-lg flex items-center justify-center backface-hidden p-4">
//                     <h2 className="text-lg font-semibold text-center">{question}</h2>
//                 </div>
//                 <div className="w-full h-full absolute bg-blue-500 text-white rounded-lg shadow-lg flex items-center justify-center rotate-y-180 backface-hidden p-4">
//                     <h2 className="text-lg font-semibold text-center">{answer}</h2>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Flashcard;

