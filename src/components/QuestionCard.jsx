import React from 'react'
import { Wrapper, WrappedButtons, QuestionButton, Question, QuestionCounter, } from './QuestionCard.styles';


const QuestionCard = ({ question, totalQuestions, currentQuestion, handleResponse, score, answers, disabled }) => {
    return (
        <Wrapper>
            <h1> SCORE: {score}</h1>
            <Question>{question}</Question>
            <QuestionCounter>{currentQuestion} / {totalQuestions}</QuestionCounter>
            <WrappedButtons>
                {answers && answers.map((answer, index) => (
                    <QuestionButton key={index + answer} disabled={disabled ? disabled : null} value={answers[index]} onClick={handleResponse}>
                        <span> {answer}</span>
                    </QuestionButton>
                ))}
            </WrappedButtons>
        </Wrapper>
    )
}

export default QuestionCard
