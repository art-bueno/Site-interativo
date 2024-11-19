// src/components/Quiz.jsx
import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.toLowerCase() === quizData[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
    }
    setInput('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h2>Quiz de Energia</h2>
      {currentQuestion < quizData.length ? (
        <>
          <p>{quizData[currentQuestion].question}</p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Sua resposta"
          />
          <button
            onClick={handleSubmit}
          
          >
            Enviar
          </button>
        </>
      ) : (
        <p>Sua pontuação: {score}</p>
      )}
    </div>
  );
};

export default Quiz;
