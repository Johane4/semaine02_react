import React, { useEffect } from 'react';

import {
  useSelector,
  useDispatch
} from 'react-redux';

import Dragons from './components/Dragons';
import Container from './components/Container';
import Colonne from './components/Colonne';
import Form from './components/Form';
import Header from './components/Header';

import { set_log, getDateNow } from './actions/actions-types';

// le useSelector va récupérer les state dont on a besoin
// le nombre de dragons qu'on a au total et les infos dans la console
const App = () => {
  const { count, logs } = useSelector(state => {

    return {
      count: state.dragonReducer.count,
      logs: state.logReducer.logs
    }
  });
  const dispatch = useDispatch();

  // à chaque fois que l'on ajoute un dragon on dispatch la date dans les log avec le nombre de dragon(s)
  useEffect(() => {

    dispatch(set_log({
      count: count,
      date: getDateNow()
    }));

  }, [count, dispatch]);

  console.log(logs);

  return (
    <Container>
      <Header />
      <Colonne>
        <Form />
      </Colonne>
      <Colonne>
        <Dragons />
      </Colonne>
    </Container>
  );
}

export default App;
