import { useContext } from 'react';
import NumberContext from '../context/NumberContext';

const Numbers = () => {

    const [state, dispatch] = useContext(NumberContext);
    const {numbers, number} = state;

    const handleChange = e => {
        const { value } = e.target;
        dispatch({
            type: 'SET_NUMBER', number: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({
            type: 'ADD_NUMBER'
        });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='number' value={number} onChange={handleChange} />
                <button>Ajouter</button>
                {numbers.map((num, i) => <p key={i}>{num}</p>)}
            </form>
            
        </div>
    )
}

export default Numbers;
