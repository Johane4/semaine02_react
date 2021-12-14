import { useContext } from "react";

import { MAX_NOTES } from '../reducer/notes';
import { NotesContext } from '../context/Context';
import Notes from './Notes';
import Message from './Message';
import Average from './Average';

const Form = () => {

    const [state, dispatch] = useContext(NotesContext);

    const { notes, number, message } = state;

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
        })
    }

    return (
        <div className="form-div">
            <h1 className="title">Bulletin de notes</h1>
            {message !== '' && <Message message={message}/>}
            <form onSubmit={handleSubmit}>
                <input type='text' value={number} onChange={handleChange} />
                <button>Ajouter une note</button>
            </form>
            {notes.length === MAX_NOTES && <Average />}
            {notes.length > 0 && <Notes notes={notes}/>}
        </div>
    )
}

export default Form;