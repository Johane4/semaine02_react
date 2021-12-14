import { useReducer, Fragment } from 'react';

const initialState = {
    number1: '',
    number2: '',
    result: 0
}
    
const reducer = (state, action) => {
        
    switch (action.type) {
        
        case 'SET_NUMBER1':

            const { number1 } = action;

            return {
                ...state,
                number1 : number1
            }
        
        case 'SET_NUMBER2':

            const { number2 } = action;

            return {
                ...state,
                number2 : number2
            }
        
        case 'MULTIPLICATON':

            return {
                ...state,
                result: parseFloat(state.number1) * parseFloat(state.number2)
            }
        
        case 'ADDITION':

            return {
                ...state,
                result: parseFloat(state.number1) + parseFloat(state.number2)
            }
        
        default:
            return state
    }
}

const Calculate = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const style = {margin: '10px'}

    const handleChange = e => {
        const { value, name } = e.target;

        if (name === 'number1') {
            dispatch({ type: 'SET_NUMBER1', number1: value })
        }

        if (name === 'number2') {
            dispatch({ type: 'SET_NUMBER2', number2: value })
        }
    }

    return(

   
    <Fragment>
        <p>Calculate</p>
        <div style={style}>
            <label>Number 1 </label>
            <input
                type="text"
                name="number1"
                value={state.number1}
                onChange={handleChange}
            />
        </div>
        <div style={style}>
            <label>Number 2 </label>
            <input
                type="text"
                name="number2"
                value={state.number2}
                onChange={handleChange}
            />
        </div>
        <div style={style}>
            <button
                onClick={() => dispatch({ type: 'ADDITION'})}
            >Addition</button>
            
        </div>
        <div style={style}>
            <button
                onClick={() => dispatch({ type: 'MULTIPLICATION'})}
            >Multiplication</button>
        </div>
        <p>Resultat : {state.result}</p>
    </Fragment>
    )
}

export default Calculate;