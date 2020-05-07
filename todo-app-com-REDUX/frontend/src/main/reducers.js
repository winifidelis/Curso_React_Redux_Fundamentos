import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    //o objeto abaixo é o estado da aplicação controlado pelo redux
    /*
    todo: () => ({
        //como eu coloquei as chaves dentro de parenteses ele vai entender que
        //é uma expressão, passa a ser um objeto e não o corpo
        description: 'Ler livro',
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
    })
    */
    todo: todoReducer
})

export default rootReducer