// TriviaGame.js
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import './TriviaGame.css';

const triviaQuestions = [
    { question: 'Where did pizza originate?', answer: 'Italy' },
    { question: 'What country is known for sushi?', answer: 'Japan' },
    // ... Add 18 more questions about originality of foods
    { question: 'Where did tacos originate?', answer: 'Mexico' }
];

const TriviaGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleCorrectAnswer = () => {
        setScore(score + 1);
        nextQuestion();
    };

    const nextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < triviaQuestions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            alert(`Game Over! Your score is ${score}/${triviaQuestions.length}`);
            setCurrentQuestionIndex(0);
            setScore(0);
        }
    };

    const previousQuestion = () => {
        const prevQuestionIndex = currentQuestionIndex - 1;
        if (prevQuestionIndex >= 0) {
            setCurrentQuestionIndex(prevQuestionIndex);
        }
    };

    return (
        <div className="trivia-game">
            <h1>Food Origin Trivia</h1>
            <QuestionCard 
                question={triviaQuestions[currentQuestionIndex].question}
                answer={triviaQuestions[currentQuestionIndex].answer}
                onCorrectAnswer={handleCorrectAnswer}
            />
            <button onClick={previousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
            <button onClick={nextQuestion}>Next</button>
            <div className="score-section">
                Score: {score}
            </div>
        </div>
    );
};

export default TriviaGame;
