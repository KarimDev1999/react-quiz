import React, { useState } from 'react';
//Components
import QuestionCard from './components/QuestionCard';
import Alert from './components/Alert';
import FinalScore from './components/FinalScore';
//Components
import './App.css';
import { MainButton, StyledTite, StyledApp } from './App.styles'
import axios from 'axios';

const TOTAL_QUESTIONS = 10;

function App() {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [showAlert, setShowAlert] = useState(false);





  const handleStart = (e) => {
    setLoading(true)
    axios.get(`https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}`).then(({ data }) => {
      setQuestions(data.results.map(result => result.question));
      setLoading(false);
      setShowQuestions(true);
      setCorrectAnswers(data.results.map(result => result.correct_answer));
      const dataArr = data.results.map(result => result.incorrect_answers.concat(result.correct_answer)) // соединяем неправильные ответы и один правильный в массив
      setAnswers(dataArr.map(answers => answers.sort(() => Math.random() - 0.5))); // рандомно сортируем каждый массив ответов

    });

  }

  const handleNext = (e) => {
    if (number + 1 !== TOTAL_QUESTIONS) {
      setNumber(number + 1)
      setDisabled(false)
      setShowAlert(false)
    }
    else {
      setShowFinalScore(true);
      setShowQuestions(false);
    }

  }

  const handleResponse = (e) => {
    const userAnswer = e.currentTarget.value;
    if (correctAnswers[number] === userAnswer) {
      setScore(score + 1);
      setDisabled(true);
      setShowAlert(true);
      setResult(true);
      // убрать лишний рендер при клике на ответ, который заново сортирует ответы (✓)
      // пофиксить кодировку
    }
    else {
      setResult(false);
      setDisabled(true);
      setShowAlert(true);
    }
  }
  const handleTryAgain = () => {
    setNumber(0);
    setScore(0);
    setShowFinalScore(false);
  };



  return (
    <StyledApp>
      {showAlert && <Alert result={result} />}
      <StyledTite>React-quiz</StyledTite>
      {showFinalScore ? <FinalScore handleTryAgain={handleTryAgain} score={score} /> : null}
      {!showQuestions && !showFinalScore ? <MainButton margin onClick={handleStart}>start</MainButton> : null}
      <div>
        {loading && <p>Loading Questions...</p>}
        {showQuestions ? <QuestionCard disabled={disabled} answers={answers.length !== 0 ? answers[number] : null} score={score} handleResponse={handleResponse} question={questions[number]} totalQuestions={TOTAL_QUESTIONS} currentQuestion={number + 1} /> : null}

      </div>
      {showQuestions && <MainButton margin onClick={handleNext}>Next question</MainButton>}


    </StyledApp>
  );
}

export default App;
