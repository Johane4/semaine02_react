import { useSelector, useDispatch } from 'react-redux';
import { set_dragon, add_dragon } from '../actions/actions-types';

const Form = () => {

    const { message, dragon } = useSelector(state => state.dragonReducer);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value: dragon } = e.target;

        dispatch(set_dragon(dragon));
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(add_dragon());
    }

    return(
        <div>
            {message !== '' && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={dragon}
                    onChange={handleChange}
                />
                <button type='submit'>Ajouter</button>
            </form>
        </div>
    )
}

export default Form;