import { useDispatch } from 'react-redux';
import { delete_dragon } from '../actions/actions-types';

const Dragon = ({dragon}) => {
    const dispatch = useDispatch();

    return(
        <div>
            <p>Nom: {dragon}</p>
            <button onClick={() => dispatch(delete_dragon(dragon))}>Supprimer {dragon}</button>
        </div>
    )
}

export default Dragon;