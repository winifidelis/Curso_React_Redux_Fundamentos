import { bindActionCreators } from "redux"

const INITIAL_STATE = {
    //como eu coloquei as chaves dentro de parenteses ele vai entender que
    //é uma expressão, passa a ser um objeto e não o corpo
    description: '',
    list: []
    /*
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Reunião com a equipe às 10:00',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta médica na terça depois do almoço',
        done: false
    }]
    */
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state

    }
}