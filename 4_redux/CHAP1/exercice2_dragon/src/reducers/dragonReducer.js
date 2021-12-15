// On met à jour les state liés aux dragons, partie algorithmique de l'application

import { checkDragonExists } from '../actions/actions-types';
import {
    SET_DRAGON,
    ADD_DRAGON,
    DELETE_DRAGON,
    REVERSE_DRAGON_LIST,
} from '../constants/actions';

const initialState = {
    dragons: [
        'André',
        'Hubert',
        'Mireille',
    ],
    dragon: '',
    count: 3,
    message: ''
}

const reducer = (state = initialState, action) => {

    let dragon, dragons;

    switch (action.type) {
        case SET_DRAGON:
            dragon = action.payload;

            return {
                ...state,
                dragon,
                message: ''
            }

        case ADD_DRAGON:
            dragon = state.dragon;
            dragons = state.dragons;

            if (dragon === '') {
                return {
                    ...state,
                    message: "Attention votre champs de saisie est vide",
                    dragon: ''
                }
            }

            if (checkDragonExists(dragon, dragons) === true) {
                return {
                    ...state,
                    message: `Attention le dragon ${dragon} existe déjà dans le tabeau`,
                    dragon: ''
                }
            }
            dragons = dragons.push(state.dragon);

            return {
                ...state,
                dragons,
                count: state.count + 1,
                dragon: ''
            }
        
        case DELETE_DRAGON:
        dragon = action.payload;
        dragons = [ ...state.dragons ] ;

        if (checkDragonExists(dragon, dragons) === false)
            return {
                ...state,
                message: `Le dragon ${dragon} que vous essayez de supprimer n'existe pas `,
                dragon: ''
            }

        dragons = dragons.filter(d => d !== dragon);

        return {
            ...state,
            dragons,
            message: `votre dragon ${dragon} a bien été supprimé`,
            count: state.count - 1
        }

        case REVERSE_DRAGON_LIST:
            //copie des dragons pour ne pas faire muter le state
            dragons = [...state.dragons];

            dragons.sort( Math.random() - .5);

            return {
                ...state,
                dragons
            }

        default:
            return state;
    }
    

}

export default reducer;