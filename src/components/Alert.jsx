import React from 'react';
import { Result } from './Alert.styles'

const Alert = ({ result }) => {
    return (
        <div>
            <Result result={result}>
                {result ? "Верно" : "Неверно"}
            </Result>
        </div>
    )
}

export default Alert
