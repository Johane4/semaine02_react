// Le combienReducers permet de récupérer en une 
// fois le résulat de plusieurs reducers

import { combineReducers } from 'redux';

import dragonReducer from './dragonReducer';
import logReducer from './logReducer';

// Récupération des imports reducers
let reducer = combineReducers({
    dragonReducer,
    logReducer
});

export default reducer;