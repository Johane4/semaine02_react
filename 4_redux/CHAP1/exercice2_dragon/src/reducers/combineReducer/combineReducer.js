// Le combineReducers permet de récupérer en une 
// fois le résulat de plusieurs reducers

import { combineReducers } from 'redux';

import dragonReducer from '../dragonReducer';
import logReducer from '../logReducer';

// propriété dragonReducer crée qui renvoie à la const dragon
// pareil pour log

let reducer = combineReducers({
    dragonReducer,
    logReducer
});

export default reducer;