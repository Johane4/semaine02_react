import { useSelector, useDispatch } from 'react-redux';

import { reverse_dragon_list } from '../actions/actions-types';

const Header = () => {
    const { count } = useSelector(state => state.dragonReducer);

    const dispatch = useDispatch();

    return(
        <div>
            <p>Liste de nombres de dragon(s) {count}</p>
            <button onClick={() => dispatch(reverse_dragon_list())}>Reverse Dragon list</button>
        </div>
    )
}

export default Header;