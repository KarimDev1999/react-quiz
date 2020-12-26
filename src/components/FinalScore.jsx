import React from 'react';
import { StyledFinalScore } from './FinalScore.styles';
import { StyledTite, MainButton } from '../App.styles.js';

const FinalScore = ({ score, handleTryAgain }) => {
    return (
        <StyledFinalScore className='final-score'>
            <StyledTite>{`Правильных ответов: ${score}`}</StyledTite>
            <MainButton onClick={handleTryAgain} margin>попробовать снова</MainButton>
        </StyledFinalScore>
    )
}

export default FinalScore
