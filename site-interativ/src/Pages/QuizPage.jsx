
import React, { useEffect, useState } from 'react';


const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Use a função fetchQuizData da API importada
    fetchQuizData().then(data => setQuizData(data));
  }, []);

  return (
    <div>
      <h1>Página do Quiz</h1>
      <ul>
        {quizData.map((item, index) => (
          <li key={index}>{item.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizPage;

