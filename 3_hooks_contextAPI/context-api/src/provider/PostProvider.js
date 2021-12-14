import { useReducer, useEffect } from 'react';
import PostContext from '../context/PostContext';

const initialState = {
    posts: []
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                posts: action.posts
            }
        case 'SHUFFLE':
            const posts = [...state.posts];
            posts.sort(() => Math.random() - 2);
            return {
                ...state,
                posts: posts
            }
        default:
            return state
    }
}

const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'INIT', posts: [
                "Bonjour", "Comment", "Ça", "Va"
            ]
        })
    }, [])

    return ( 
        <PostContext.Provider value={[state, dispatch]}>
            {children}
        </PostContext.Provider>
        
    )
}

export default PostProvider;