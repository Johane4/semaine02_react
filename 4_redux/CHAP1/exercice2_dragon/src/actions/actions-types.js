import {
    SET_DRAGON,
    ADD_DRAGON,
    DELETE_DRAGON,
    REVERSE_DRAGON_LIST,
    SET_LOG
} from '../constants/actions';

// librairie pour l'heure et la date
import moment from 'moment';

// payload est un argument qui nous renvoie la valeur de l'élément 
// ciblé, ici c'est le dragon donc on aura son nom au moment de 
// la récupération de la value

// reducer dragon
export const set_dragon = payload => {
    return {
        type: SET_DRAGON, payload
    };
}

export const add_dragon = () => {
    return {
        type: ADD_DRAGON
    };
}

export const delete_dragon = payload => {

    console.log(payload, "DELETE");

    return {
        type: DELETE_DRAGON, payload
    };
}

export const reverse_dragon_list = () => {
    return {
        type: REVERSE_DRAGON_LIST
    };
}

export const set_log = payload => {
    return {
        type: SET_LOG, payload
    };
}

// Fonctions utiles
export const checkDragonExist = (dragon, dragons) => {

    if( dragons.length === 0 ) return false;

    if( dragons.find( d => d === dragon ) ) return true;

    return false;
}

export const getDateNow = () => {

    return moment().format('DD MM YYYY hh:mm:ss');
}