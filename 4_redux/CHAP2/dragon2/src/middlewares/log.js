import { ADD_DRAGON, DELETE_DRAGON, ADD_KNIGHT, DELETE_KNIGHT } from '../constants/actions';
import { set_log, getDateNow } from '../actions/actions-types';
/*
Le middleware est une extension de ce que l'on peut faire avec redux, il peut
intervenir entre le moment du dispatch et du reducer.
Selon la syntaxe on fait appelle à des fonctions soit:
function middlewareLog(store) {
  return function next() {
      return function action() {
          return next(action)
      }
  }
}

on accède d'abord au store puis next nous renvoie au prochain middleware
et action est l'action qui sera envoyée au reducer

On va pouvoir accéder aux state, de modifier le comportement natif de redux en 
en envoyant des fonctionnalités de manières asynchrones. Ce qui ne perturbera pas
la poursuite du script.
getState permet d'accéder a la valeur actuelle d'un élément dans le store
*/

const middlewareLog = store => next => action => {

  const returnAction = next(action);

  if (action.type === ADD_DRAGON || action.type === DELETE_DRAGON) {
    const { count } = store.getState().dragonReducer;

    store.dispatch(set_log({ count : count , date : getDateNow(), name : 'dragon' }));
  }

  if (action.type === ADD_KNIGHT || action.type === DELETE_KNIGHT) {
    const { count } = store.getState().knightReducer;

    store.dispatch(set_log({ count : count , date : getDateNow(), name : 'knight'}));
  }

  return returnAction;
}

export default middlewareLog;