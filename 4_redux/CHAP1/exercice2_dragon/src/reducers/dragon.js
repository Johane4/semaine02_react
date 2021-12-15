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
        'Mireille'
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
        
        // Manque delete, reverse
    }
}

export default reducer;