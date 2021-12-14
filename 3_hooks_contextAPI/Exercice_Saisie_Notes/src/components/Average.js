import { NotesContext } from '../context/Context';
import { useContext } from 'react';


const Average = () => {
    const [state, dispatch] = useContext(NotesContext);

    const { average } = state;

    const handleAverage = () => {
        dispatch({
            type: 'AVERAGE'
        });
    }

    return (
        <div className='average'>
            <p>La moyenne est: {average}</p>
            <p><button onClick={handleAverage}>Moyenne</button></p>
        </div>
    )
}

export default Average;