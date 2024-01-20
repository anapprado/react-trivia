// QuestionCard.js
import React, { useState } from 'react';

const QuestionCard = ({ question, answer, onCorrectAnswer }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    return (
        <div className="question-card">
            <h2>{question}</h2>
            <div 
                className={`answer ${isAnswerVisible ? 'visible' : ''}`}
                onClick={() => setIsAnswerVisible(!isAnswerVisible)}
            >
                {answer}
            </div>
            <button onClick={onCorrectAnswer}>I Knew It!</button>
        </div>
    );
};

export default QuestionCard;
