// TriviaGame.js
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import './TriviaGame.css';

const triviaQuestions = [
    { question: 'Where did pizza originate?', answer: 'Italy' },
    { question: 'What country is known for sushi?', answer: 'Japan' },
    { question: "Gnocchi are small potato dumplings from which country?", answer: "Italy"},
    { question: "Blueberries are native to which continent? ", answer: "North America"},
    { question: "Blinis are small savory pancakes from which country?", answer: "Russia"},
    { question: "Up until the Middle Ages, which popular vegetable was always purple in color?", answer: "Carrot"},
    { question: "Plantain is an unsweet version of which fruit?", answer: "Banana" },
    { question: "Cabernet Sauvignon is a wine originating in which country?", answer: "France" },
    { question: "What type of rice would you use to make risotto?", answer: "Arborio" },
    { question: 'What is Saké, a Japanese wine made from?', answer: 'Rice' },
    { question: 'Farro, quinoa, and amaranth are examples of ancient grains. True or False?', answer: 'True' },
    { question: 'Which grain is the main ingredient in traditional Mexican tortillas?', answer: 'Corn' },
    { question: 'Which rice variety is often used to make sushi?', answer: 'Short-grain rice' },
    { question: 'What vegetable is added to eggs to make a Spanish omelette, also known as tortilla?', answer: 'Potato' },
    { question: 'Macadamia nuts come from which country?', answer: 'Australia' },
    { question: 'Tahini is an ingredient made from which type of seeds?', answer: 'Sesame' },
    { question: 'What is added to oil, vinegar, and lemon juice to make mayonnaise?', answer: 'Egg yolks' },
    { question: 'What cooking technique involves soaking meat in oil, wine, herbs, or garlic?', answer: 'Marinate' },
    { question: "Quinoa is a fashionable grain food from which continent? ", answer: "South America"},
    { question: 'Where did tacos originate?', answer: 'Mexico' }
];

const TriviaGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showEmoji,setShowEmoji] = useState(false);

    const handleCorrectAnswer = () => {
        setScore(score + 1);
        setShowEmoji(true);
        setTimeout(() => setShowEmoji(false), 1000);
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
            <h1>Miscellaneous Food Trivia</h1>
            <QuestionCard 
                question={triviaQuestions[currentQuestionIndex].question}
                answer={triviaQuestions[currentQuestionIndex].answer}
                onCorrectAnswer={handleCorrectAnswer}
            />
            <button onClick={previousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
            <button onClick={nextQuestion}>Next</button>
            <div className="score-section">
                Score: {score} {showEmoji && '🌟'}
            </div>
        </div>
    );
};

export default TriviaGame;
