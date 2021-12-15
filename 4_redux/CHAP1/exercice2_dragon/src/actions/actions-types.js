import {
    SET_DRAGON,
    ADD_DRAGON,
    DELETE_DRAGON,
    REVERSE_DRAGON_LIST,
    SET_LOG
} from '../constants/actions';

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
    return {
        type: DELETE_DRAGON, payload // récupère son nom
    };
}

export const reverse_dragon_list = () => {
    return {
        type: REVERSE_DRAGON_LIST, 
    };
}

export const checkDragonExists = (dragon, dragons) => {
    if (dragons.length === 0) return false;

    if (dragons.find(d => d === dragon)) return true;
}

export const set_log = payload => {
    return {
        type: SET_LOG, payload
    };
}

