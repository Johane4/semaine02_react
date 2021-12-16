import React, {useReducer} from 'react';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import QuizContext from './context/QuizContext';

import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
} from './reducers/types.js';
import quizReducer from './reducers/QuizReducer';

import './App.css';

const App = () => {
    const questions = [
        {
            id: 1,
            question: 'Qui est l’inséparable compagnon de Titi ?',
            answer_a:
                'Toto',
            answer_b: 'Grosminet',
            answer_c:
                "Tac",
            answer_d: 'Tom',
            correct_answer: 'b',
        },
        {
            id: 2,
            question: 'Quel est le nom du principal indice boursier de la place de Paris ?',
            answer_a: 'Le CAC 40',
            answer_b: 'Le Dax',
            answer_c: 'Le Nifty',
            answer_d: 'Le Footsie',
            correct_answer: 'a',
        },
        {
            id: 3,
            question: 'Quelle est la capitale de l\'Australie?',
            answer_a: 'Ankara',
            answer_b: 'Sydney',
            answer_c: 'Melbourne',
            answer_d: 'Aucune des trois',
            correct_answer: 'd',
        },
    ];

    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: '',
    };

    const [state, dispatch] = useReducer(quizReducer, initialState);
    const {currentQuestion, currentAnswer, answers, showResults, error} = state;

    const question = questions[currentQuestion];

    const renderError = () => {
        if (!error) {
            return;
        }

        return <div className="error">{error}</div>;
    };

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className="correct">Bonne réponse !</span>;
        }

        return <span className="failed">Mauvaise réponse !</span>;
    };

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            );

            return (
                <div key={question.id}>
                    {question.question} - {renderResultMark(question, answer)}
                </div>
            );
        });
    };

    const restart = () => {
        dispatch({type: RESET_QUIZ});
    };

    const next = () => {
        const answer = {questionId: question.id, answer: currentAnswer};

        if (!currentAnswer) {
            dispatch({type: SET_ERROR, error: `Selectionnez une réponse`});
            return;
        }

        answers.push(answer);
        dispatch({type: SET_ANSWERS, answers});
        dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

        if (currentQuestion + 1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }

        dispatch({type: SET_SHOW_RESULTS, showResults: true});
    };

    if (showResults) {
        return (
            <div className="container results">
                <h2>Résultats</h2>
                <ul>{renderResultsData()}</ul>
                <button className="btn btn-primary" onClick={restart}>
                    Rejouer
                </button>
            </div>
        );
    } else {
        return (
            <QuizContext.Provider value={{state, dispatch}}>
                <div className="container">
                    <h1>Question pour un champion !</h1>
                    <Progress
                        total={questions.length}
                        current={currentQuestion + 1}
                    />
                    <Question />
                    {renderError()}
                    <Answers />
                    <button className="btn btn-primary" onClick={next}>
                        Suivante {'>>'}
                    </button>
                </div>
            </QuizContext.Provider>
        );
    }
}

export default App;
