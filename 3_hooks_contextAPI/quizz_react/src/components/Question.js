import React, {useContext} from 'react';
import QuizContext from '../context/QuizContext';

const Question = () => {
    const {state} = useContext(QuizContext);
    const {currentQuestion, questions} = state;
    const question = questions[currentQuestion];
    return <h2>{question.question}</h2>;
}

export default Question;
