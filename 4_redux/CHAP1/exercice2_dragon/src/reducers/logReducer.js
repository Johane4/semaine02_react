// Ce fichier va servir à récupérer le nombre de dragons et la date d'éxécution
// dans la console

// Ce fichier va servir à récupérer le nombre de dragons et la date d'éxécution
// dans la console

import {
    SET_LOG
} from "../constants/actions";

const initialState = {
    logs: new Map() // comme un dictionnaire clé/valeur
}

const reducer = (state = initialState, action ) => {

    switch (action.type) {

        case SET_LOG:
            const {count, date } = action.payload;
            const logs = new Map(state.logs);
            logs.set(date, count); // clé date et count la valeur associée à la clé

            return {
                ...state,
                logs
            }

        default:
            return state;
    }
}

export default reducer;