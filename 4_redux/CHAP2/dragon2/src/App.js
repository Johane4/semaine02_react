import React from 'react';

import {
  useSelector,
} from 'react-redux';

import Dragons from './components/Dragons';
import Knights from './components/Knights';
import Container from './components/Container';
import Colonne from './components/Colonne';
import FormDragon from './components/FormDragon';
import FormKnight from './components/FormKnight';

import Header from './components/Header';

const App = () => {
  const { logs } = useSelector(state => {

    return {
      logs: state.logReducer.logs
    }
  });

  return (
    <Container>
      <Header />
      <Colonne>
        <FormDragon />
        <FormKnight />
        <ul>
          <li>Log(s) :</li>
          {logs.map((log, i) => <li key={i} >Date : {log.date} nb {log.name} : {log.count}</li>)}
        </ul>
      </Colonne>
      <Colonne>
        <Dragons />
        <Knights />
      </Colonne>
    </Container>
  );
}

export default App;
