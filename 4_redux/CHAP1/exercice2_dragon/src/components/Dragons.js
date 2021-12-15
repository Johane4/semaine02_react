import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {

    const { dragons } = useSelector(state => state.dragonReducer);

    if (dragons.length > 0)
        return (
            <div>
                {dragons.map((dragon, i) => 
                    <Dragon key={i} dragon={dragon}
                    />
                )}
            </div>
        );
    return(
        <p> Désolé il n'y a aucun dragon dans la liste</p>
    )
};

export default Dragons;