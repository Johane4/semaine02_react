export const initialState = {
    notes: [],
    number: '',
    message: '',
    average: 0
}

export const MAX_NOTES = 5;

export const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_NUMBER':

            return {
                ...state,
                number: action.number,
                message: ''
            }
        
        case 'AVERAGE':
            
            let sum = state.notes.reduce((curr, acc) => curr + acc) / (state.notes.length);
            sum = Math.floor(sum * 100) / 100;
            console.log(sum);

            return {
                ...state,
                average: sum
            }
        
        case 'ADD_NUMBER': {

            const notes = [...state.notes]
            notes.push(Number(state.number))


            if (state.number === '' || isNaN(state.number)) {
                return {
                    ...state,
                    message: "Attention ce n'est pas un nombre !"
                }
            }

            if (state.notes.length === MAX_NOTES) {
                return {
                    ...state,
                    message: "Vous ne pouvez plus ajouter de notes"
                }
            }

            return {
                ...state,
                number: '',
                notes: notes
            }
        }
        default:
            return state;

            
    }
}