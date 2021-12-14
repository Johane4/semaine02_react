import { useEffect, useReducer } from 'react';
import NumberContext from '../context/NumberContext';

const initialState = {
    numbers: [],
    number: ''
}

const reducer = (state, action) => {

    switch (action.type) {
        
        case 'INIT':
            return {
                ...state,
                numbers: action.numbers
            }
        
        case 'SET_NUMBER':
            return {
                ...state,
                number: action.number
            }
        
        case 'ADD_NUMBER':
            const numbers = [...state.numbers]
                numbers.push(Number(state.number))
            return {
                ...state,
                number: '',
                numbers: numbers
            }
                
        default:
            return state
    }
}

const NumbersProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT', numbers: [
                40,
                78,
                34
            ]
        })
    }, [])

    return (
        <NumberContext.Provider value={[state, dispatch]}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumbersProvider;
