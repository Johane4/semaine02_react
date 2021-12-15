import { useSelector, useDispatch } from 'react-redux';

import Dragon from './components/Dragon';
import Container from './components/Container';
import Colonne from './components/Colonne';
import Form from './components/Form';
import Header from './components/Header';

import { set_log, logs } from './actions/actions-types';
import { useEffect } from 'react';

const App = () => {

    const {count, logs} = useSelector(state => {
        return {
            count: state.dragonReducer.count,
            logs: state.logReducer.logs
        }
    })

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(set_log({
    //         count: count,
    //         date:
    //     }))
    // })
}

export default App;