const INITIAL_STATE = { value: 'Brasil!' }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            //só quero saber quando houver modificações
            return { value: action.payload }
        default:
            return state
    }
}