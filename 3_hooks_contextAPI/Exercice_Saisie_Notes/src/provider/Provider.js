import { useReducer } from 'react';

import { initialState, reducer } from '../reducer/notes';
import { NotesContext } from '../context/Context';


const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <NotesContext.Provider value={[state, dispatch]}>
                {children}
            </NotesContext.Provider>
        </div>
    )
}

export default Provider
